# Muse AR

![MuseAR Logo](https://i.ibb.co/B2LZj40/0485acbf-4443-4dc8-b437-3da67b53348b.jpg)

Muse AR is an innovative mobile application developed for the KU Hackfest organized by Kathmandu University. It uses Augmented Reality (AR) to provide real-time information about scanned artifacts. The application employs a YOLO model trained on custom datasets for artifact recognition and retrieves detailed information dynamically by scraping Wikipedia and YouTube. Additionally, it includes voice output and translation support for accessibility. A complementary web platform delivers general information about the museums.

---

## Table of Contents

1. Features
2. Technology Stack
3. Usage
4. Screenshots
5. Contributing
6. License

---

## Features

- **Artifact Recognition:** Uses a YOLO model trained on custom datasets to identify artifacts in real time.
- **Dynamic Information Retrieval:** Scrapes Wikipedia and YouTube for live information about artifacts.
- **Voice Support:** Provides audio narration for artifact information.
- **Translation:** Offers multi-language support for translated descriptions.
- **AR Integration:** Delivers an immersive user experience with real-time artifact tracking.
- **Web Platform:** A React-based web portal for general information about artifacts.

---

## Technology Stack

### Mobile Application:

- Framework: Unity
- AR Library: Vuforia

### Backend Servers:

- Language: Python
- Framework: FastAPI

### Machine Learning:

- Model: YOLO (Object Detection)
- Dataset: Custom-trained and labelled datasets for artifact recognition

### Web Platform:

- Frontend: React.js
- Backend: Python

---

## Usage

1. Open the mobile application and allow camera access for AR functionality.
2. Point the device's camera at any artifact.
3. Muse AR will:
   - Recognize the artifact using the YOLO model.
   - Provide pre-recorded details and live dynamic information from Wikipedia and YouTube.
   - Narrate the details and offer translation if selected.

---

## Screenshots

### Mobile App Interface

![Mobile Interface](https://i.ibb.co/G0hG40B/image.png)

---

## Presentation

To learn more about Muse AR, view our detailed presentation [here](https://github.com/bibhushansaakha/museAR/blob/main/assets/MuseAR.pdf).

## YouTube

Checkout our YouTube video [here](https://www.youtube.com/watch?v=DFRhqaavsuU).


- Built at KU Hackfest 2023
