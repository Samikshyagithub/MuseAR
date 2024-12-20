import cv2
from ultralytics import YOLO

# Load your YOLO model
model = YOLO("model/best.pt")  # Update the path to your model

# Open the webcam (0 for the default camera, change if you have multiple cameras)
cap = cv2.VideoCapture("https://192.168.137.154:8080/video")

if not cap.isOpened():
    print("Error: Could not open webcam.")
    exit()

print("Press 'q' to quit.")

while True:
    # Capture frame-by-frame
    ret, frame = cap.read()
    if not ret:
        print("Failed to grab frame. Exiting...")
        break

    # Perform object detection
    results = model.predict(frame, conf=0.5, show=False)  # Adjust `conf` for confidence threshold

    # Visualize the results
    annotated_frame = results[0].plot()  # Add bounding boxes to the frame

    # Display the resulting frame
    cv2.imshow("YOLO Detection", annotated_frame)

    # Exit loop on 'q' key press
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the capture and close the windows
cap.release()
cv2.destroyAllWindows()
