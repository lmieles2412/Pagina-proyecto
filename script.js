const preguntas = {
    hardware: [
        { pregunta: "¿Cuál es el cerebro del computador?", opciones: ["Memoria RAM", "CPU", "Disco Duro", "BIOS"], correcta: "CPU" },
        
    ],
    redes: [
        { pregunta: "¿Qué significa IP?", opciones: ["Internet Protocol", "Internal Point", "Instant Page", "Information Path"], correcta: "Internet Protocol" },
        
    ],
    python: [
    { pregunta: "¿Cómo se define una función en Python?", opciones: ["func nombre():", "define nombre():", "def nombre():", "function nombre():"], correcta: "def nombre():" },

    { pregunta: "¿Qué tipo de dato es el resultado de 3 / 2 en Python 3?", opciones: ["int", "float", "str", "bool"], correcta: "float" },

    { pregunta: "¿Cuál es la forma correcta de crear una lista vacía?", opciones: ["{}", "()", "[]", "<>"], correcta: "[]" },

    { pregunta: "¿Qué imprime len('Python')?", opciones: ["5", "6", "7", "Error"], correcta: "6" },

    { pregunta: "¿Cuál de estas palabras es reservada en Python?", opciones: ["loop", "define", "class", "function"], correcta: "class" },

    { pregunta: "¿Qué operador se usa para potencia?", opciones: ["^", "**", "%", "//"], correcta: "**" },

    { pregunta: "¿Qué imprime type(10)?", opciones: ["float", "number", "int", "integer"], correcta: "int" },

    { pregunta: "¿Cuál es el resultado de 5 % 2?", opciones: ["2", "2.5", "1", "0"], correcta: "1" },

    { pregunta: "¿Qué estructura se usa para repetir un bloque de código?", opciones: ["if", "def", "for", "import"], correcta: "for" },

    { pregunta: "¿Qué devuelve int('5') + 2?", opciones: ["52", "7", "5", "Error"], correcta: "7" },

    { pregunta: "¿Cuál es el resultado de True and False?", opciones: ["True", "False", "None", "Error"], correcta: "False" },

    { pregunta: "¿Qué función se usa para pedir datos al usuario?", opciones: ["scan()", "read()", "input()", "get()"], correcta: "input()" },

    { pregunta: "¿Qué imprime 'Hola' * 3?", opciones: ["HolaHolaHola", "Hola3", "Error", "Hola Hola Hola"], correcta: "HolaHolaHola" },

    { pregunta: "¿Qué símbolo se usa para comentarios de una línea?", opciones: ["//", "#", "--", "/* */"], correcta: "#" },

    { pregunta: "¿Cuál de estos NO es un tipo de dato básico?", opciones: ["list", "tuple", "arraylist", "dict"], correcta: "arraylist" },

    { pregunta: "¿Qué imprime x = [1,2,3]; x[0]?", opciones: ["0", "1", "2", "3"], correcta: "1" },

    { pregunta: "¿Qué hace append() en una lista?", opciones: ["Borra elementos", "Ordena la lista", "Agrega un elemento", "Duplica la lista"], correcta: "Agrega un elemento" },

    { pregunta: "¿Cuál es el resultado de 4 == 4?", opciones: ["True", "False", "4", "Error"], correcta: "True" },

    { pregunta: "¿Qué imprime este código? for i in range(3): print(i)", opciones: ["1 2 3", "0 1 2", "0 1 2 3", "3 2 1"], correcta: "0 1 2" },

    { pregunta: "¿Qué tipo de dato es {'nombre':'Ana','edad':20}?", opciones: ["Lista", "Tupla", "Diccionario", "Conjunto"], correcta: "Diccionario" }
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