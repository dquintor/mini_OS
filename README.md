# MINI OS -- Web-Based Desktop Simulation

*A Visual-Only Operating System Experience Built with Pure HTML & CSS*

## 📘 Overview

**MINI OS** is a fully static, browser-based simulation of a minimal
macOS‑inspired operating system.\
Created as part of a collaborative front‑end development activity, the
project emphasizes:

-   UI/UX design through **HTML and CSS only**\
-   Desktop--like interaction without JavaScript logic\
-   Modular and reusable structure using standalone application files\
-   An OS-style environment rendered inside the browser using an
    `<iframe>`

This project demonstrates how far visual interface recreation can go
without dynamic scripting.

------------------------------------------------------------------------

## ⭐ Core Features

### 🖥️ Desktop Environment (index.html)

The main shell of the system provides:

-   A full-screen wallpaper background\
-   A macOS-style **Dock** with application shortcuts\
-   Desktop icons for quick access\
-   A central `<iframe>` that loads applications without page reloads\
-   Static navigation resembling a real OS workflow

The environment focuses on **semantic HTML**, **CSS layout mastery**,
and **OS-like visual fidelity**.

------------------------------------------------------------------------

## 🧩 Applications

All applications live in the `/apps` directory and load inside the OS
iframe.

### 🔢 Calculator App

**Files:** `calculator.html`, `calculator.css`\
A static replica of the macOS Calculator, featuring:

-   Traffic-light window controls\
-   A clean digital-style display\
-   Grid-based number & operator keys\
-   CSS-only button animation

> 🚫 No mathematical operations---visual mockup only.

------------------------------------------------------------------------

### 🎵 Music Player App

**Files:** `music_player.html`, `music_player.css`

Includes:

-   macOS-style title bar\
-   Album-art display container\
-   Player controls (play, pause, next, previous)\
-   Timeline & progress indicators

> 🚫 No audio playback functionality---UI only.

------------------------------------------------------------------------

### 🖼️ Image Gallery App

**Files:** `image_gallery.html`, `image_gallery.css`

A responsive grid-based gallery with:

-   CSS Grid adaptive layout\
-   Image cropping via `object-fit: cover`\
-   Rounded corners & shadows\
-   Clean hover and spacing polish

------------------------------------------------------------------------

## 📁 Project Structure

    mini_OS/
    │
    ├── index.html
    ├── styles.css
    ├── README.md   ← You are generating this file!
    │
    ├── background/
    │   └── [wallpapers]
    │
    ├── icon/
    │   └── [desktop + dock icons]
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
        ├── app_2.html        (unused placeholder)
        └── app_3.css         (unused placeholder)

------------------------------------------------------------------------

## 📝 Development Notes

This activity required the team to:

-   Build a simulated OS UI using **only HTML & CSS**\
-   Avoid any JavaScript interactivity\
-   Structure files modularly (one CSS/HTML per app)\
-   Collaborate using Git workflows and branches\
-   Emphasize visual fidelity over functionality

The resulting project demonstrates real-world teamwork in a controlled,
design‑focused environment.

------------------------------------------------------------------------

## 🚀 Usage Instructions

1.  Download or clone the project ZIP.\
2.  Open **`index.html`** in any modern browser.\
3.  Click on dock or desktop icons to load apps inside the OS window.\
4.  Explore the static interface---no dependencies or servers needed!

------------------------------------------------------------------------

## 👥 Team

This project was created by:

-   **Daniela Quinto Rios**\
-   **Branner Andres Ramirez Zapata**\
-   **Samuel Monsalve Vanegas**\
-   **Anderson Fabian Guzman Ochoa** *(Project Lead)*

------------------------------------------------------------------------

## 📦 Activity Context

These instructions correspond to a university/team assignment in which
this repository (*the provided ZIP file*) represents the final submitted
implementation of the task.\
The README serves as a polished documentation artifact describing:

-   The project purpose\
-   Technologies used\
-   Folder structure\
-   Team roles\
-   Usage instructions

------------------------------------------------------------------------

If you'd like, I can also:\
- Add screenshots to the README\
- Auto-generate a more professional layout with badges & sections\
- Rewrite it in a more formal, academic, or technical tone\
- Turn it into a full GitHub‑ready README with tables & preview images
