# mini_OS

👨‍💻👩‍💻 Developers Cold Brew 👨‍💻👩‍💻

👩‍💻 Daniela Quinto Rios
👩‍💻 Branner Andres Ramirez Zapata
👩‍💻 Samuel Monsalve Vanegas
👩‍💻 Anderson Fabian Guzman Ochoa -LIDER

📌 ----------------------- **MINI MAC OS** ------------------------------📌

📌 Proyect Description 📌

This project consists of the creation of a mini web operating system, developed as part of an activity where our team simulates being a small software company. The goal is to build an interface that mimics the visual functioning of a computer desktop (in our case, the macOS operating system), but entirely within a single web page.

The user will be able to interact with an environment that includes:

A desktop with a wallpaper.

A taskbar, similar to that of the macOS operating system.

Several application icons (music player, gallery, calculator), visible on the desktop and on the taskbar.

Additionally, the project is developed in a collaborative GitHub repository, using branches to divide the work between different parts of the system, ensuring an organized and controlled development flow.


📌 **Desktop** 📌

The desktop is the main component of the CRUDScope – HTML MediaPanel project, responsible for simulating the initial interface of a real operating system within a single web page. Its goal is to recreate the visual experience of a desktop environment (similar to macOS, Windows, or Linux) using only HTML and CSS.

The desktop includes:

A fixed wallpaper that serves as the main background.

A bottom bar or dock styled like a modern operating system, where shortcuts to different applications are located.

Application icons that the user can select to open within the system.

A central area where the applications are loaded through an <iframe>, avoiding full-page reloads or navigation changes.

This desktop functions as the container of the “mini OS” and manages the internal navigation between the simulated applications, such as the calculator, the music player and the gallery.

Its development allowed practicing:

Layout design for full interfaces in HTML.

Use of semantic structure to organize content.

Implementation of a window system using <iframe> without leaving the main page.

Visual design inspired by real operating systems.

Although it does not function as a real operating system, it successfully simulates its appearance, navigation, and visual structure, achieving the project’s objective.

📄 HTML file 📄
index.hml

📄 CSS FILE 📄
styles.css

📌 **App calculator** 📌

The application is a static HTML and CSS web page that simulates the macOS calculator, designed as part of the CRUDScope – HTML MediaPanel project. Its purpose is to recreate the visual appearance of a real calculator within the web environment, maintaining the typical aesthetic and layout of Apple’s operating system.

The interface includes:

A Mac-style window with the classic close, minimize, and maximize buttons.

A top display.

A grid-organized button panel that replicates the real structure of a calculator (numbers, operators, and basic functions).

Visual animations when pressing the buttons, simulating the interaction of a physical calculator.

Although it does not perform real operations (it does not use JavaScript), this app fulfills the function of representing a calculator within the project’s “mini operating system.” With it, you can practice:

HTML layout structure.

Detailed styling using CSS.

Desktop interface simulation with a visual-first approach.

Component organization inside a window integrated into an OS-like environment.

The app is integrated into the main desktop through an <iframe>, providing the experience of opening the calculator within the same system without switching pages.

📄 HTML file 📄
calculator.hml

📄 CSS FILE 📄
calculator.css


📌 **app music player** 📌

The application is a static HTML web page that simulates the music player of a MacBook, designed as part of the CRUDScope – HTML MediaPanel project. Its purpose is to recreate the visual interface of a modern music player using only HTML, without JavaScript or real functionalities.

The app features a design that mimics a typical macOS application window, including elements such as:

A Mac-style top bar with close, minimize, and maximize buttons.

A main area dedicated to the album cover or representative image.

Classic player controls: play, pause, next, previous, and a progress bar.

This component is part of the project’s multimedia panel and allows practice in:

Proper use of HTML audio tags.

Visual organization through containers and HTML structure.

Simulating operating system interfaces within a single page.

Although it does not include advanced functionality, it correctly represents the appearance and basic behavior of a playback app within the “mini operating system” environment proposed in the activity.

📄 HTML file 📄
music_player.hml

📄 CSS FILE 📄
music_player.css


📌 **ap gallery** 📌

This project has several sections, but the part I developed was the image gallery.
My goal was to display multiple photos in an organized and visually appealing way using HTML and CSS.

What I did

I created the main container for the gallery.

I organized the photos using CSS Grid so they would automatically adjust.

I ensured the images wouldn’t get distorted by using object-fit: cover.

I added shadows, rounded borders, and a hover effect.

I gave the images a consistent size so the gallery would look uniform.


📄 HTML file 📄
image_gallery.hml

📄 CSS FILE 📄
image_gallery.css



