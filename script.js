const preguntas = {
    hardware: [
        { pregunta: "¿Cuál es el cerebro del computador?", opciones: ["Memoria RAM", "CPU", "Disco Duro", "BIOS"], correcta: "CPU" },
        
    ],
    redes: [
        { pregunta: "¿Qué significa IP?", opciones: ["Internet Protocol", "Internal Point", "Instant Page", "Information Path"], correcta: "Internet Protocol" },
        
    ],
    python: [
        { pregunta: "¿Cómo se define una función en Python?", opciones: ["func nombre():", "define nombre():", "def nombre():", "function nombre():"], correcta: "def nombre():" },
        ],
        
    sistemas: [
        { pregunta: "¿Cuál de estos es un sistema operativo de código abierto?", opciones: ["Windows", "macOS", "Linux", "iOS"], correcta: "Linux" },
        
    ],
    seguridad: [
        { pregunta: "¿Qué es el 'Phishing'?", opciones: ["Un deporte", "Estafa para robar datos", "Un tipo de monitor", "Un cable de red"], correcta: "Estafa para robar datos" },
        
    ],
    software: [
        { pregunta: "¿Qué programa se usa principalmente para hojas de cálculo?", opciones: ["Word", "PowerPoint", "Excel", "Photoshop"], correcta: "Excel" },
        
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