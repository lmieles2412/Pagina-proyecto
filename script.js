const preguntas = {
    hardware: [
        { pregunta: "¿Cuál es el cerebro del computador?", opciones: ["Memoria RAM", "CPU", "Disco Duro", "BIOS"], correcta: "CPU" },
        { pregunta: "¿Qué significa RAM?", opciones: ["Read Access Memory", "Random Access Memory", "Rapid Action Module", "Real Audio Memory"], correcta: "Random Access Memory" },
        { pregunta: "¿Qué puerto se usa comúnmente para conectar periféricos?", opciones: ["SATA", "VGA", "USB", "HDMI"], correcta: "USB" }
    ],
    redes: [
        { pregunta: "¿Qué significa IP?", opciones: ["Internet Protocol", "Internal Point", "Instant Page", "Information Path"], correcta: "Internet Protocol" },
        { pregunta: "¿Cuál es la máscara de subred por defecto para Clase C?", opciones: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "192.168.1.1"], correcta: "255.255.255.0" },
        { pregunta: "¿Qué dispositivo conecta diferentes redes entre sí?", opciones: ["Switch", "Hub", "Router", "Repetidor"], correcta: "Router" }
    ],
    python: [
        { pregunta: "¿Cómo se define una función en Python?", opciones: ["func nombre():", "define nombre():", "def nombre():", "function nombre():"], correcta: "def nombre():" },
        { pregunta: "¿Cuál es el símbolo para comentarios de una línea?", opciones: ["//", "/*", "#", "<!--"], correcta: "#" },
        { pregunta: "¿Qué tipo de dato es '10'?", opciones: ["int", "float", "string", "bool"], correcta: "string" }
    ],
    sistemas: [
        { pregunta: "¿Cuál de estos es un sistema operativo de código abierto?", opciones: ["Windows", "macOS", "Linux", "iOS"], correcta: "Linux" },
        { pregunta: "¿Qué combinación de teclas cierra una ventana en Windows?", opciones: ["Alt + F4", "Ctrl + C", "Ctrl + V", "Alt + Tab"], correcta: "Alt + F4" },
        { pregunta: "¿Cuál es el componente que gestiona los recursos del hardware?", opciones: ["Navegador", "Kernel (Núcleo)", "Antivirus", "Calculadora"], correcta: "Kernel (Núcleo)" }
    ],
    seguridad: [
        { pregunta: "¿Qué es el 'Phishing'?", opciones: ["Un deporte", "Estafa para robar datos", "Un tipo de monitor", "Un cable de red"], correcta: "Estafa para robar datos" },
        { pregunta: "¿Cuál es la contraseña más segura de estas?", opciones: ["123456", "password", "Admin.2024!*", "qwerty"], correcta: "Admin.2024!*" },
        { pregunta: "¿Qué software protege tu PC de virus?", opciones: ["Firewall", "Antivirus", "WinZip", "Excel"], correcta: "Antivirus" }
    ],
    software: [
        { pregunta: "¿Qué programa se usa principalmente para hojas de cálculo?", opciones: ["Word", "PowerPoint", "Excel", "Photoshop"], correcta: "Excel" },
        { pregunta: "¿Qué extensión tiene un archivo de texto simple?", opciones: [".jpg", ".mp3", ".txt", ".exe"], correcta: ".txt" },
        { pregunta: "¿Cómo se llama el software que permite navegar por internet?", opciones: ["Buscador", "Navegador", "Sitio Web", "Router"], correcta: "Navegador" }
    ],
};

let puntaje = 0;
let indicePreguntaActual = 0;
let preguntasFiltradas = [];

function actualizarBarra() {
    const progreso = ((indicePreguntaActual) / preguntasFiltradas.length) * 100;
    document.getElementById("barra-progreso-relleno").style.width = `${progreso}%`;
}

function iniciarQuiz(categoria) {
    puntaje = 0;
    indicePreguntaActual = 0;
    preguntasFiltradas = preguntas[categoria];
    document.getElementById("puntaje").textContent = puntaje;
    document.getElementById("nombre-categoria").textContent = categoria.toUpperCase();
    document.getElementById("resultado-final").style.display = "none";
    document.getElementById("contenedor-preguntas").style.display = "block";
    actualizarBarra();
    cambiarVista(true);
    mostrarPregunta();
}

function mostrarPregunta() {
    actualizarBarra();
    const contenedor = document.getElementById("contenedor-preguntas");
    contenedor.innerHTML = "";
    const p = preguntasFiltradas[indicePreguntaActual];
    
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pregunta-card");
    tarjeta.innerHTML = `
        <h3>${p.pregunta}</h3>
        <div class="opciones">
            ${p.opciones.map(opt => `<button class="opcion">${opt}</button>`).join("")}
        </div>
    `;
    contenedor.appendChild(tarjeta);

    tarjeta.querySelectorAll(".opcion").forEach(btn => {
        btn.onclick = () => {
            if(btn.textContent === p.correcta) {
                btn.style.background = "#22c55e";
                btn.style.color = "white";
                puntaje++;
                document.getElementById("puntaje").textContent = puntaje;
            } else {
                btn.style.background = "#ef4444";
                btn.style.color = "white";
            }
            document.querySelectorAll(".opcion").forEach(b => b.disabled = true);
            
            setTimeout(() => {
                indicePreguntaActual++;
                if(indicePreguntaActual < preguntasFiltradas.length) {
                    mostrarPregunta();
                } else {
                    document.getElementById("barra-progreso-relleno").style.width = `100%`;
                    finalizarQuiz();
                }
            }, 1000);
        };
    });
}

function finalizarQuiz() {
    document.getElementById("contenedor-preguntas").style.display = "none";
    document.getElementById("resultado-final").style.display = "block";
    document.getElementById("mensaje-puntos").textContent = `Has completado el reto con ${puntaje} aciertos de ${preguntasFiltradas.length}.`;
}

// Funciones de navegación (Lobby)
function cambiarVista(mostrarJuego) {
    document.getElementById("vista-lobby").style.display = mostrarJuego ? "none" : "block";
    document.getElementById("vista-juego").style.display = mostrarJuego ? "block" : "none";
}

document.querySelectorAll(".card-categoria").forEach(card => {
    card.onclick = () => iniciarQuiz(card.dataset.categoria);
});

document.getElementById("btn-volver").onclick = () => cambiarVista(false);
document.getElementById("btn-final-volver").onclick = () => cambiarVista(false);