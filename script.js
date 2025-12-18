// --- DATOS Y SEGURIDAD DEL LOGIN ---
const usersDB = {
    "JOHNNY": { 
        password: "123", 
        attempts: 0, 
        lockedUntil: 0, 
        avatar: "./assets/Johnny.png",
        wallpaper: "./assets/Amber.jpg" 
    },
    "SHAKIRA": { 
        password: "456", 
        attempts: 0, 
        lockedUntil: 0, 
        avatar: "./assets/shakira.png",
        wallpaper: "./assets/pique.jpg" 
    }
};

let currentUser = null;
const MAX_ATTEMPTS = 3;
const LOCK_TIME = 30000; 

// --- LÓGICA DE INTERFAZ DE SESIÓN ---

// 1. Selección de usuario para mostrar caja de contraseña
function selectUser(name) {
    currentUser = name;
    const loginContainer = document.querySelector('.glass-container');
    const userPills = document.querySelector('.users-container');
    
    if(userPills) userPills.style.display = 'none';

    loginContainer.innerHTML = `
        <img src="./assets/logo-apple.png" class="apple-logo" alt="Apple" style="width:30px; filter: brightness(0) invert(1); margin-bottom: 5px;">
        <p style="color:white; font-size: 10px; margin: 0; opacity: 0.8;">macOS</p>
        <img src="${usersDB[name].avatar}" style="width:85px; height:85px; border-radius:50%; margin: 15px 0; object-fit: cover; border: 2px solid white; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <p style="color:white; margin: 0 0 15px 0; font-weight: 500; font-size: 18px;">${name}</p>
        <div class="password-box" style="display: flex; background: rgba(255,255,255,0.25); border: 1px solid rgba(255,255,255,0.3); border-radius: 25px; padding: 6px 10px; align-items: center; width: 200px; margin: 0 auto;">
            <input type="password" id="pass-input" placeholder="Contraseña" autofocus 
                style="background: transparent; border: none; color: white; outline: none; width: 100%; padding: 5px 10px; font-size: 14px;">
            <button onclick="validateLogin()" style="background: rgba(255,255,255,0.3); border: none; color: white; border-radius: 50%; width: 28px; height: 28px; display: flex; justify-content: center; align-items: center; cursor: pointer;">
                <span style="font-size: 18px;">➔</span>
            </button>
        </div>
        <p id="error-msg" style="color:#ff6b6b; font-size:11px; margin-top:12px; height: 15px; font-weight: 400;"></p>
        <button onclick="location.reload()" style="background:none; border:none; color:white; cursor:pointer; font-size:11px; margin-top:15px; opacity: 0.6; text-decoration: underline;">Cancelar</button>
    `;

    setTimeout(() => {
        const input = document.getElementById('pass-input');
        if(input) {
            input.focus();
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') validateLogin();
            });
        }
    }, 100);
}

// 2. Validación de credenciales y entrada al escritorio
function validateLogin() {
    const input = document.getElementById('pass-input');
    const errorMsg = document.getElementById('error-msg');
    const container = document.querySelector('.glass-container');
    const user = usersDB[currentUser];
    const now = Date.now();

    if (user.lockedUntil > now) {
        const remaining = Math.ceil((user.lockedUntil - now) / 1000);
        errorMsg.innerText = `Demasiados intentos. Intenta en ${remaining}s.`;
        return;
    }

    if (input.value === user.password) {
        user.attempts = 0;
        
        // --- EFECTO DE CARGA AL ENTRAR (Mismo fondo para todos configurado en CSS) ---
        const loader = document.getElementById('mac-loader');
        const loaderText = document.getElementById('loader-text');
        
        if(loader) {
            loader.style.display = 'flex';
            if(loaderText) loaderText.innerText = `Iniciando sesión como ${currentUser}...`;
        }

        setTimeout(() => {
            const desktop = document.getElementById('screen'); 
            if(desktop) {
                // Aplicamos el wallpaper específico del usuario
                desktop.style.backgroundImage = `url('${user.wallpaper}')`;
            }
            showSection('desktop-screen');
            if(loader) loader.style.display = 'none';
        }, 1500); // Simulación de carga de macOS

    } else {
        user.attempts++;
        input.value = "";
        container.classList.add('shake');
        setTimeout(() => container.classList.remove('shake'), 400);

        if (user.attempts >= MAX_ATTEMPTS) {
            user.lockedUntil = Date.now() + LOCK_TIME;
            errorMsg.innerText = "Cuenta bloqueada temporalmente.";
        } else {
            errorMsg.innerText = `Contraseña incorrecta (${user.attempts}/${MAX_ATTEMPTS})`;
        }
    }
}

// --- FUNCIÓN DE LOGOUT CON ESPERA (Mismo fondo del loader que al iniciar) ---
function logOut() {
    const loader = document.getElementById('mac-loader');
    const loaderText = document.getElementById('loader-text');
    
    if(loader) {
        loader.style.display = 'flex';
        if(loaderText) loaderText.innerText = "Cerrando sesión...";
    }

    setTimeout(() => {
        location.reload(); // Reinicia el sistema al estado inicial
    }, 1200);
}

// --- LÓGICA DE CONTROL DE PANTALLAS ---

function showSection(sectionId) {
    document.getElementById('login-screen').style.display = 'none';
    if(document.getElementById('selection-screen')) document.getElementById('selection-screen').style.display = 'none';
    document.getElementById('desktop-screen').style.display = 'none';
    
    const target = document.getElementById(sectionId);
    if (sectionId === 'desktop-screen') {
        target.style.display = 'block';
    } else {
        target.style.display = 'flex'; 
    }
}

// --- MANEJO DE APLICACIONES Y VENTANAS ---

const iframe = document.getElementById("app-frame");
const desktopWindow = document.getElementById("desktop-window");
const appTitle = document.getElementById("app-title");

document.querySelectorAll(".open-app").forEach(button => {
    button.addEventListener("click", () => {
        const appUrl = button.getAttribute("data-app");
        const appName = button.querySelector("span") ? button.querySelector("span").innerText : "Aplicación";
        const width = button.getAttribute("data-w") || "600px";
        const height = button.getAttribute("data-h") || "400px";

        desktopWindow.style.width = width;
        desktopWindow.style.height = height;
        iframe.src = appUrl;
        appTitle.innerText = appName;
        desktopWindow.style.display = "flex"; 
        desktopWindow.classList.remove("hidden");
    });
});

function closeApp() {
    desktopWindow.style.display = "none";
    iframe.src = ""; 
}

// --- RELOJ Y FECHA (Sincronizado para Login y Desktop) ---

function updateClock() {
    const now = new Date();
    const clockEl = document.getElementById("clock");
    const dateEl = document.getElementById("date");
    
    // Reloj barra de tareas
    if(clockEl) clockEl.textContent = now.toLocaleTimeString("es-ES", { hour: '2-digit', minute: '2-digit' });
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    if(dateEl) dateEl.textContent = now.toLocaleDateString("es-ES", options);

    // Reloj pantalla de login
    const loginTime = document.getElementById("login-time");
    const loginDate = document.getElementById("login-date");
    if(loginTime) loginTime.textContent = now.toLocaleTimeString("es-ES", { hour: '2-digit', minute: '2-digit' });
    if(loginDate) loginDate.textContent = now.toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase();
}

setInterval(updateClock, 1000);
updateClock();

// --- CONTROL DE BRILLO ---

const brightnessSlider = document.getElementById("brightness");
if(brightnessSlider) {
    brightnessSlider.addEventListener("input", () => {
        const overlay = document.getElementById("brightness-overlay");
        if(overlay) overlay.style.opacity = (100 - brightnessSlider.value) / 100;
    });
}