# MINI MAC OS -- Web-Based Desktop Simulation

*A macOS‑Inspired Operating System Mockup Built with HTML, CSS & Minimal
JavaScript*

## 📘 Overview

**MINI OS** is a browser‑based simulation of a minimal operating system
inspired by macOS.\
Developed as a collaborative web development activity, it demonstrates:

-   Visual OS recreation\
-   Modular, isolated application windows\
-   Desktop--style interactions\
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

---

## 🔢 **Calculator App**

**Files:** `calculator.html`, `calculator.css`

The Calculator App is a **static HTML + CSS replica of the macOS calculator**, created for the CRUDScope – HTML MediaPanel project. Its objective is to reproduce the appearance and layout of the Apple calculator while serving as a practice tool for interface design without functional JavaScript logic.

### **Features**

- A macOS-style window with the characteristic **close, minimize, and maximize buttons**.
- A prominent **display area** at the top of the window.
- A **grid-based button panel** that organizes numbers, operators and functional keys just like a real calculator.
- **Smooth CSS-only press animations** that give tactile feedback to simulate a physical calculator.
- Faithful reproduction of macOS layout, spacing, colors and window aesthetics.

### **Purpose & Learning Goals**

This app is designed to strengthen practical skills in:

- Semantic HTML layout structuring.
- Precision styling using CSS.
- Desktop application visual simulation.
- UI component composition inside a windowed interface.
- Integration of standalone applications into an operating-system-like environment.

Although the calculator does **not execute mathematical operations**, it plays an important role in the mini OS experience by opening inside the system’s `<iframe>`, giving users the illusion of working within a real desktop environment.

---

## 🎵 **Music Player App**

**Files:** `music_player.html`, `music_player.css`

The Music Player App is a **static simulation of a macOS-style music application**, built using only HTML and CSS. It forms part of the project’s multimedia panel and focuses on accurately replicating the layout of a modern audio interface.

### **Features**

- A macOS-inspired **title bar** with close, minimize, and maximize buttons.
- A main display area showing the **album artwork** or representative media image.
- Classic multimedia controls:
  - **Play**, **Pause**
  - **Next** and **Previous** buttons
  - A **progress bar** representing playback timeline.
- Clean, organized component layout consistent with Apple’s design style.

### **Purpose & Learning Goals**

This app allows practice in:

- Structuring UI components through HTML containers.
- Using multimedia-related elements.
- Recreating OS-style application windows with high visual fidelity.
- Designing standalone apps to be embedded inside the main OS via `<iframe>`.

Although it does **not include real audio playback**, it successfully portrays the interface and basic behavior of a macOS music player within the “mini operating system” environment.

---

## 🖼 **Image Gallery App**

**Files:** `image_gallery.html`, `image_gallery.css`

The Image Gallery App focuses on visually displaying photos in a clean, responsive, and organized layout. Built entirely with HTML and CSS, it demonstrates the creation of a modern grid-based media component.

### **Features**

- A dedicated main **gallery container** for housing all images.
- A fully responsive layout powered by **CSS Grid**, ensuring that photos automatically adapt to different screen sizes.
- Consistent presentation using `object-fit: cover` to avoid image distortion.
- Visual aesthetics such as:
  - **Rounded corners**
  - **Soft shadows**
  - **Hover effects**
- Uniform image proportions for a seamless gallery experience.

### **Purpose & Learning Goals**

This component supports practice in:

- Creating responsive grid layouts using modern CSS techniques.
- Ensuring aesthetic consistency across media assets.
- Designing clean, modular UI components.
- Integrating visual apps inside the main OS through an `<iframe>` without page reloads.

This gallery section is one of the visual pillars of the project, enhancing the multimedia experience inside the mini operating system.

------------------------------------------------------------------------

# ⚙️ How the System Works

## 📌 The `<iframe>` = The OS Window

Located in `index.html`:

``` html
<iframe id="app-frame" class="app-window hidden"></iframe>
```

The iframe:

-   Starts hidden\
-   Loads app HTML files when clicked\
-   Is shown/hidden using JavaScript\
-   Can be closed from inside an app

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
4.  App appears inside the OS window

------------------------------------------------------------------------

## ❌ Closing an App

Inside each app:

``` html
<span class="close" onclick="parent.closeApp()"></span>
```

In `index.html`:

``` javascript
function closeApp() {
  iframe.src = "";
  iframe.classList.add("hidden");
}
```

### ✔ Sequence When Closing

1.  App calls `parent.closeApp()`\
2.  OS empties iframe\
3.  iframe is hidden again

------------------------------------------------------------------------

# 🔁 Window Flow Diagram

    ┌──────────────┐
    │ User clicks  │
    │ an app icon  │
    └──────┬───────┘
           ▼
    ┌────────────────────────┐
    │ JS reads data-app URL │
    └──────┬────────────────┘
           ▼
    ┌────────────────────────┐
    │ iframe.src = app.html │
    └──────┬────────────────┘
           ▼
    ┌────────────────────────┐
    │ iframe becomes visible │
    └──────┬────────────────┘
           ▼
    ┌───────────────┐
    │ User clicks   │
    │ close button  │
    └──────┬────────┘
           ▼
    ┌────────────────────────┐
    │ parent.closeApp() is   │
    │ triggered from iframe  │
    └──────┬────────────────┘
           ▼
    ┌────────────────────────┐
    │ iframe clears and hides│
    └────────────────────────┘

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
        ├── music_images/
        ├── app_2.html
        └── app_3.css

------------------------------------------------------------------------

# 🛠 Development Notes

The activity required:

-   Designing UI using HTML + CSS\
-   Minimal JavaScript interaction logic\
-   Emphasis on OS aesthetics\
-   Modular application architecture\
-   Team collaboration using Git

------------------------------------------------------------------------

# 🚀 Usage

1.  Download or clone the repository\
2.  Open **`index.html`** in any browser\
3.  Click app icons to open them in the iframe\
4.  Use the red traffic‑light button inside each app to close it

No server required.

------------------------------------------------------------------------

# 👥 Team

### **Daniela Quinto Rios**
**Role:** Frontend Developer  
**Contributions:**
- Developed the **main desktop environment** (`index.html`).
- Configured and styled the OS layout, dock, icons, and app window area.
- Implemented the **iframe system** for loading applications.
- Added **JavaScript functionality** to handle opening and closing apps.
- Managed integration and **merged all components** from the team into the final mini OS.


---

### **Branner Andres Ramirez Zapata**
**Role:** Frontend Developer – Image Gallery  
**Contributions:**
- Created the **Image Gallery App** using HTML and CSS.
- Designed the responsive grid layout with CSS Grid.
- Implemented uniform image styling using `object-fit: cover`.
- Added visual enhancements such as rounded edges, shadows, and hover effects.

---

### **Samuel Monsalve Vanegas**
**Role:** Frontend Developer – Music Player  
**Contributions:**
- Developed the **Music Player App**.
- Created the layout for album artwork, playback buttons and progress section.

---

### **Anderson Fabian Guzman Ochoa** *(Project Lead)*
**Role:** Lead Developer – Calculator  
**Contributions:**
- Designed and built the **Calculator App** using HTML and CSS.
- Replicated the macOS calculator window and button grid.
- Implemented visual button-press animations.
