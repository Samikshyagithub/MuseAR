from fastapi import FastAPI, File, UploadFile
from fastapi.responses import StreamingResponse
from ultralytics import YOLO
import cv2
import numpy as np
import os
import io

app = FastAPI()

MODEL_PATH = "./models/best.pt"
OUTPUT_DIR = "output"

# Load YOLO model
model = YOLO(MODEL_PATH)


def save_annotated_image(results, image_name):
    """
    Save the annotated image as a byte stream.
    
    :param results: YOLO prediction results object.
    :param image_name: Name for the output image.
    :return: Byte stream of the annotated image.
    """
    # Get the annotated image
    annotated_image = results[0].plot()

    # Convert annotated image to a byte stream
    _, buffer = cv2.imencode(".jpg", annotated_image)
    return io.BytesIO(buffer)


@app.post("/predict/")
async def predict(image: UploadFile = File(...)):
    """
    Accept an image file, run YOLO detection, and return the annotated image.
    """
    # Ensure the output directory exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Read the uploaded image file
    image_bytes = await image.read()
    
    # Convert the image bytes to a NumPy array
    nparr = np.frombuffer(image_bytes, np.uint8)
    image_cv = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Run YOLO detection
    results = model.predict(source=image_cv, conf=0.5, save=False)

    # Create the annotated image stream
    annotated_image_stream = save_annotated_image(results, image.filename)

    # Return the annotated image as a response
    return StreamingResponse(annotated_image_stream, media_type="image/jpeg")
