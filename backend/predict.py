import cv2
from ultralytics import YOLO
import os

def save_annotated_image(results, output_dir, image_name):
    """
    Saves the annotated image with a custom name to the specified directory.
    
    :param results: YOLO prediction results object.
    :param output_dir: Directory to save the annotated image.
    :param image_name: Name for the output image.
    """
    # Ensure the output directory exists
    os.makedirs(output_dir, exist_ok=True)

    # Get the annotated image
    annotated_image = results[0].plot()

    # Construct the output path
    output_path = os.path.join(output_dir, image_name)

    # Save the annotated image
    cv2.imwrite(output_path, annotated_image)
    print(f"Saved: {output_path}")

# Define paths
source_dir = "datasets/test/images"  # Input images directory
model_path = "./models/best.pt"  # YOLO model weights
output_dir = "output"  # Directory to save annotated images

# Load the YOLO model
model = YOLO(model_path)

# Supported image extensions
image_extensions = (".jpg", ".jpeg", ".png", ".bmp", ".tiff")

# List all images in the source directory
image_files = [f for f in os.listdir(source_dir) if f.lower().endswith(image_extensions)]

if not image_files:
    print(f"No images found in directory: {source_dir}")
else:
    print(f"Processing {len(image_files)} images from {source_dir}...")

    for image_file in image_files:
        # Full path to the image
        image_path = os.path.join(source_dir, image_file)

        # Run detection
        print(f"Processing {image_file}...")
        results = model.predict(source=image_path, conf=0.5, save=False)  # Disable auto-save

        # Define a custom name for the output image
        custom_name = f"annotated_{image_file}"

        # Save the annotated image
        save_annotated_image(results, output_dir, custom_name)

print(f"All images processed. Check the annotated images in '{output_dir}'.")
