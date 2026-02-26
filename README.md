# [cite_start]Secure Patient Medical Record Portal [cite: 1]

## Description
[cite_start]This project is a patient-centric web application designed to help individuals securely manage and share their medical records across hospitals while maintaining full ownership and privacy of their data[cite: 8]. [cite_start]It features a dashboard with a chronological medical history timeline [cite: 13] [cite_start]and relies on consent-based access control[cite: 9]. [cite_start]Additionally, it includes an explicit, time-bound emergency access mode[cite: 28, 32].

## Core Features
* [cite_start]**Patient Dashboard:** A clean and trustworthy patient dashboard [cite: 12] [cite_start]that displays a chronological medical history timeline[cite: 13].
* [cite_start]**Data Privacy (Conceptual):** The UI visually reflects encrypted data status and access permissions[cite: 16, 20, 21]. [cite_start]The platform relies entirely on consent-based access control[cite: 9].
* [cite_start]**Interoperability Awareness:** Simulates the process of importing medical records from different hospitals[cite: 24, 25].
* [cite_start]**Emergency Access:** Provides an Emergency Access option for critical situations [cite: 28] [cite_start]that is strictly time-bound[cite: 32].

## Tech Stack
* **HTML5:** Page structure and layout.
* **CSS3:** Styling and visual feedback (e.g., color changes for emergency mode).
* **Vanilla JavaScript:** DOM manipulation, simulation of data decryption, and timer logic for emergency access.

## How to Run This Project
1. Clone or download this repository to your local machine.
2. Open the project folder.
3. Double-click on the `index.html` file to open it in your default web browser.
4. No server or database installation is required; the application runs entirely in the browser using mock data.

## What I Learned
* **Dynamic Frontend Logic:** I learned to use JavaScript arrays and loops to generate the medical timeline dynamically, rather than hardcoding HTML.
* **Visualizing Security:** I understood how to use UI cues—like lock icons and color changes—to visually represent encryption and build user trust.
* **Simulating Complex Features:** I learned to simulate backend concepts like "Emergency Access" and "Data Privacy" using simple boolean logic and timers (`setTimeout`).
