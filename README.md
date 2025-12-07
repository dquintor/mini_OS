# MINI OS -- Web-Based Desktop Simulation

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

### 🔢 Calculator

**Files:** `calculator.html`, `calculator.css`\
Features:

-   Traffic‑light window buttons\
-   Digital display\
-   Button grid\
-   CSS‑based click animations

➡ Visual mockup only (no math logic).

------------------------------------------------------------------------

### 🎵 Music Player

**Files:** `music_player.html`, `music_player.css`\
Features:

-   Top bar with macOS window controls\
-   Album artwork\
-   Player controls (play, pause, skip)\
-   Progress UI

➡ UI-only --- no audio playback.

------------------------------------------------------------------------

### 🖼 Image Gallery

**Files:** `image_gallery.html`, `image_gallery.css`\
Features:

-   Responsive CSS Grid\
-   Consistent cropping via `object-fit: cover`\
-   Rounded corners\
-   Hover effects

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

-   **Daniela Quinto Rios**\
-   **Branner Andres Ramirez Zapata**\
-   **Samuel Monsalve Vanegas**\
-   **Anderson Fabian Guzman Ochoa** *(Project Lead)*
