# MINI OS -- Web-Based Desktop Simulation

## Overview

This project is a web simulation of a minimal operating system inspired
by macOS. It is designed as part of a collaborative web development
activity where the team functions as a small software company. The goal
is to recreate the structure of a desktop environment entirely through
HTML and CSS, without page reloads or JavaScript-driven logic.

The system provides a desktop-like interface that includes a wallpaper,
a dock with applications, and multiple simulated apps (calculator, music
player, and image gallery). Each application loads inside the main
system using an `<iframe>`, emulating the behavior of a real window
inside an operating system.

## Project Features

### Desktop Environment

The main interface (`index.html`) renders a desktop containing:

-   A fixed full-screen wallpaper.
-   A macOS-inspired Dock located at the bottom.
-   Application icons displayed both on the desktop and within the dock.
-   An `<iframe>` that acts as the main application window area.
-   A navigation structure that avoids page reloads.

The desktop design emphasizes:

-   Full-layout interface construction using HTML and CSS.
-   Semantic HTML structure.
-   Operating-system--style UI elements.
-   Interaction flow through embedded apps rather than direct
    navigation.

### Applications

All apps are stored inside `/apps` and are loaded dynamically through
the main desktop iframe.

#### Calculator App

**Files:** `calculator.html`, `calculator.css`

-   A static replica of the macOS calculator window.
-   macOS-style window frame with the three standard traffic-light
    buttons.
-   Display section.
-   Grid-based layout for numeric and operator buttons.
-   CSS-only button press animations.
-   Visual-only---no calculation logic implemented.

#### Music Player App

**Files:** `music_player.html`, `music_player.css`

-   Static mockup of a macOS-style music player.
-   Top action bar with close/minimize/maximize buttons.
-   Album-art container.
-   Player controls (play, pause, next, previous).
-   Progress UI (non-functional).

#### Image Gallery App

**Files:** `image_gallery.html`, `image_gallery.css`

-   Responsive CSS Grid gallery layout.
-   Automatic adjustment to screen width.
-   Image consistency using `object-fit: cover`.
-   Rounded corners, shadows, and hover effects.
-   Static media display inside the OS.

## Project Structure

    mini_OS/
    │
    ├── index.html
    ├── styles.css
    ├── README.md
    │
    ├── background/
    │   └── [wallpaper images]
    │
    ├── icon/
    │   └── [desktop and dock icons]
    │
    └── apps/
        ├── calculator.html
        ├── calculator.css
        │
        ├── music_player.html
        ├── music_player.css
        │
        ├── image_gallery.html
        ├── image_gallery.css
        │
        ├── images/
        │   └── [gallery images]
        │
        ├── music_images/
        │   └── [album or UI images]
        │
        ├── app_2.html
        └── app_3.css

## Key Notes

-   The main OS shell is defined in `index.html` and `styles.css`.
-   Apps are isolated in `/apps` for modularity.
-   Images are grouped into appropriate folders:
    -   `/background`
    -   `/icon`
    -   `/apps/images`
    -   `/apps/music_images`
-   The `<iframe>` in `index.html` loads apps via relative paths.

## Development Approach

This project emphasizes:

-   Interface design without JavaScript.
-   OS-style UI simulation using only HTML and CSS.
-   Modular file organization.
-   Git workflow with branches for independent development.

## Installation and Usage

1.  Clone or download the repository.
2.  Open `index.html` in any modern browser.
3.  Use the dock or desktop icons to launch applications.
4.  No server or dependencies required.

## Team

-   **Daniela Quinto Rios**
-   **Branner Andres Ramirez Zapata**
-   **Samuel Monsalve Vanegas**
-   **Anderson Fabian Guzman Ochoa (Project Lead)**
