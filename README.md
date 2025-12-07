# MINI MAC OS -- Web-Based Desktop Simulation

*A macOS-Inspired Operating System Mockup Built with HTML, CSS & Minimal
JavaScript*

------------------------------------------------------------------------

# 📑 Table of Contents

> *(Click to jump to each section)*

-   [📘 Overview](#-overview)
-   [⭐ Core Features](#-core-features)
    -   [🖥 Desktop Environment
        (`indexhtml`)](#-desktop-environment-indexhtml)
    -   [✔ JavaScript Interactivity](#-javascript-interactivity)
-   [🧩 Applications](#-applications)
    -   [🔢 Calculator App](#-calculator-app)
    -   [🎵 Music Player App](#-music-player-app)
    -   [🖼 Image Gallery App](#-image-gallery-app)
-   [⚙️ How the System Works](#️-how-the-system-works)
    -   [📌 The iframe = The OS Window](#-the-iframe--the-os-window)
    -   [🖱️ Opening an App](#️-opening-an-app)
    -   [❌ Closing an App](#-closing-an-app)
-   [🔁 Window Flow Diagram](#-window-flow-diagram)
-   [📁 Project Structure](#-project-structure)
-   [🛠 Development Notes](#-development-notes)
-   [🚀 Usage](#-usage)
    -   [🟢 Deployed
        Version](#-option-1--use-the-deployed-version-recommended)
    -   [🟦 Run Locally](#-option-2--run-locally)
-   [👥 Team](#-team)

------------------------------------------------------------------------

## 📘 Overview

**MINI OS** is a browser‑based simulation of a minimal operating system
inspired by macOS.\
Developed as a collaborative web development activity, it demonstrates:

-   Visual OS recreation\
-   Modular, isolated application windows\
-   Desktop‑style interactions\
-   Full UI design using **HTML + CSS**\
-   Lightweight **JavaScript** exclusively for opening and closing
    applications inside an `<iframe>`

The result is a static but immersive OS‑like environment rendered
entirely in the browser.

------------------------------------------------------------------------

# ⭐ Core Features

## 🖥 Desktop Environment (`index.html`)

Includes:

-   Fullscreen wallpaper\
-   macOS‑styled Dock with app shortcuts\
-   Desktop icons\
-   A main `<iframe>` window acting as the OS application container\
-   CSS‑based animations and transitions

### ✔ JavaScript Interactivity

The only JavaScript in the project handles:

-   Opening apps inside the iframe\
-   Closing apps using communication from inside the iframe

This provides a real OS‑like experience while keeping the project close
to the "HTML + CSS only" constraint.

------------------------------------------------------------------------

# 🧩 Applications

------------------------------------------------------------------------

## 🔢 **Calculator App**

**Files:** `calculator.html`, `calculator.css`

The Calculator App is a **static HTML + CSS replica of the macOS
calculator**, created for the CRUDScope -- HTML MediaPanel project. Its
objective is to reproduce the appearance and layout of the Apple
calculator while serving as a practice tool for interface design without
functional JavaScript logic.

### **Features**

-   A macOS-style window with the characteristic **close, minimize, and
    maximize buttons**.
-   A prominent **display area** at the top of the window.
-   A **grid-based button panel** organizing numbers, operators, and
    functional keys.
-   **Smooth CSS-only press animations**, simulating physical calculator
    interaction.
-   Faithful reproduction of macOS layout, spacing, and color styling.

### **Purpose & Learning Goals**

This app supports learning in:

-   Semantic HTML structure\
-   Precision CSS styling\
-   Desktop interface simulation\
-   Window‑based UI component organization\
-   Integration of standalone apps inside a simulated OS

Though it lacks real calculation functionality, it provides a visually
accurate calculator experience within the `<iframe>` window of the mini
OS.

------------------------------------------------------------------------

## 🎵 **Music Player App**

**Files:** `music_player.html`, `music_player.css`

The Music Player App is a **static macOS‑style music interface**,
created entirely with HTML and CSS.

### **Features**

-   A macOS‑inspired **title bar**\
-   Album artwork display section\
-   Playback controls:
    -   **Play**, **Pause**, **Next**, **Previous**\
    -   A **visual progress bar**\
-   Clean and structured interface design

### **Purpose & Learning Goals**

This app reinforces:

-   UI layout building with HTML\
-   Multimedia‑related structure (non‑functional audio)\
-   OS application window simulation\
-   Embedding apps using `<iframe>`

Despite lacking audio playback, it accurately replicates the style and
structure of a macOS music player.

------------------------------------------------------------------------

## 🖼 **Image Gallery App**

**Files:** `image_gallery.html`, `image_gallery.css`

A visually structured, responsive image gallery built with HTML and CSS.

### **Features**

-   A flexible **CSS Grid‑based layout**\
-   Automatic image adjustment using `object-fit: cover`\
-   Rounded corners, smooth shadows, and hover effects\
-   Consistent and balanced grid proportions

### **Purpose & Learning Goals**

Supports practice in:

-   Responsive CSS Grid\
-   Consistent image handling\
-   Clean media display UI\
-   `<iframe>`‑based app embedding

This gallery enhances the visual experience of the mini OS environment.

------------------------------------------------------------------------

# ⚙️ How the System Works

## 📌 The `<iframe>` = The OS Window

Located in `index.html`:

``` html
<iframe id="app-frame" class="app-window hidden"></iframe>
```

The iframe:

-   Starts hidden\
-   Loads app HTML files dynamically\
-   Appears/disappears via JavaScript\
-   Allows closing from inside the app

------------------------------------------------------------------------

## 🖱️ Opening an App

Each icon has a `data-app` attribute:

``` html
<button class="open-app" data-app="apps/calculator.html">
```

JavaScript reads this value:

``` javascript
const iframe = document.getElementById("app-frame");

document.querySelectorAll(".open-app").forEach(button => {
  button.addEventListener("click", () => {
    iframe.src = button.getAttribute("data-app");
    iframe.classList.remove("hidden");
  });
});
```

### ✔ Sequence When Clicking an Icon

1.  JavaScript reads the app path\
2.  Sets `iframe.src`\
3.  Removes `.hidden`\
4.  App appears in the OS window

------------------------------------------------------------------------

## ❌ Closing an App

Inside each app:

``` html
<span class="close" onclick="parent.closeApp()"></span>
```

And in `index.html`:

``` javascript
function closeApp() {
  iframe.src = "";
  iframe.classList.add("hidden");
}
```

### ✔ Sequence When Closing

1.  App calls `parent.closeApp()`\
2.  OS clears the iframe\
3.  Window becomes hidden

------------------------------------------------------------------------

# 🔁 Window Flow Diagram

    [User clicks icon]
           ↓
    JS reads data-app URL
           ↓
    iframe.src = app.html
           ↓
    iframe becomes visible
           ↓
    User clicks close button
           ↓
    parent.closeApp() triggered
           ↓
    iframe clears and hides

------------------------------------------------------------------------

# 📁 Project Structure

    mini_OS/
    │
    ├── index.html
    ├── styles.css
    ├── README.md
    │
    ├── background/
    │   └── [wallpapers]
    │
    ├── icon/
    │   └── [system icons]
    │
    └── apps/
        ├── calculator.html
        ├── calculator.css
        ├── music_player.html
        ├── music_player.css
        ├── image_gallery.html
        ├── image_gallery.css
        ├── images/
        └── music_images/

------------------------------------------------------------------------

# 🛠 Development Notes

The activity required:

-   UI design using HTML + CSS\
-   Minimal JavaScript logic\
-   OS‑style visual simulation\
-   Modular app architecture\
-   Git‑based collaboration

------------------------------------------------------------------------

# 🚀 Usage

You can use MINI OS in two ways:

## 🟢 Option 1 --- Use the Deployed Version (Recommended)

The project is deployed online:

👉 **Live Demo:** https://dquintor.github.io/mini_OS/

------------------------------------------------------------------------

## 🟦 Option 2 --- Run Locally

1.  Download or clone the repository\
2.  Open **`index.html`** in any modern browser\
3.  Click the app icons to load them in the iframe\
4.  Use the red close button to exit apps

No server required.

------------------------------------------------------------------------

# 👥 Team

### **Daniela Quinto Rios**

**Role:** Frontend Developer\
**Contributions:** - Designed and built the **main desktop interface**
(`index.html`), including all visual elements. - Created the
**macOS-style Dock**, animations, and hover effects. - Implemented the
**iframe system** and **JavaScript logic** for app control. - Integrated
and merged all project components into the final mini OS.

------------------------------------------------------------------------

### **Branner Andres Ramirez Zapata**

**Role:** Frontend Developer -- Image Gallery\
**Contributions:** - Created the **Image Gallery App** (HTML/CSS). -
Designed the responsive grid. - Implemented image styling and visual
enhancements.

------------------------------------------------------------------------

### **Samuel Monsalve Vanegas**

**Role:** Frontend Developer -- Music Player\
**Contributions:** - Developed the **Music Player App** UI. - Created
layout for artwork, controls, and progress bar.

------------------------------------------------------------------------

### **Anderson Fabian Guzman Ochoa** *(Project Lead)*

**Role:** Lead Developer -- Calculator\
**Contributions:** - Built the **Calculator App**. - Recreated the macOS
window and button grid. - Implemented visual button animations.
