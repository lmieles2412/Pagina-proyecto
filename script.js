const preguntas = {
        
  sistemas: [
        { pregunta: "¿Cuál es el cerebro del computador?", opciones: ["Memoria RAM", "CPU", "Disco Duro", "BIOS"], correcta: "CPU" },
        { pregunta: "¿Qué tipo de memoria es volátil y pierde los datos al apagarse?", opciones: ["SSD", "ROM", "Memoria RAM", "Flash"], correcta: "Memoria RAM" },
        { pregunta: "¿Qué componente mantiene la configuración de la BIOS y la hora?", opciones: ["La pila CMOS", "El procesador", "La fuente de poder", "El disipador"], correcta: "La pila CMOS" },
        { pregunta: "¿Cuál es un dispositivo de almacenamiento de estado sólido?", opciones: ["HDD", "SSD", "RAM", "GPU"], correcta: "SSD" },
        { pregunta: "¿Qué puerto se usa para conectar pantallas de alta definición?", opciones: ["USB-C", "HDMI", "VGA", "RJ-45"], correcta: "HDMI" },
        { pregunta: "¿Cuál es la función principal de la Fuente de Poder?", opciones: ["Procesar datos", "Almacenar archivos", "Convertir corriente AC a DC", "Enfriar"], correcta: "Convertir corriente AC a DC" },
        { pregunta: "¿Qué componente disipa el calor directamente del procesador?", opciones: ["Extractor", "Ventilador", "Disipador", "Pasta térmica"], correcta: "Disipador" },
        { pregunta: "¿Dónde se instalan la CPU, la RAM y las tarjetas?", opciones: ["Gabinete", "Tarjeta Madre", "Disco Duro", "Fuente"], correcta: "Tarjeta Madre" },
        { pregunta: "¿Qué significa el término 'Overclocking'?", opciones: ["Formatear", "Aumentar velocidad del reloj", "Limpiar", "Actualizar"], correcta: "Aumentar velocidad del reloj" },
        { pregunta: "¿Qué bus de expansión se usa para tarjetas gráficas modernas?", opciones: ["PCIe", "PCI", "AGP", "SATA"], correcta: "PCIe" }
    ],
    seguridad: [
        { pregunta: "¿Qué es el 'Phishing'?", opciones: ["Deporte", "Estafa para robar datos", "Monitor", "Cable"], correcta: "Estafa para robar datos" },
        { pregunta: "¿Qué hace un Ransomware?", opciones: ["Espía la cámara", "Cifra archivos y pide rescate", "Borra el BIOS", "Acelera el PC"], correcta: "Cifra archivos y pide rescate" },
        { pregunta: "¿Qué significan las siglas 2FA?", opciones: ["Doble procesador", "Autenticación de dos factores", "Segunda red", "Clave larga"], correcta: "Autenticación de dos factores" },
        { pregunta: "¿Qué protocolo hace que una página web sea segura?", opciones: ["HTTP", "FTP", "HTTPS", "DNS"], correcta: "HTTPS" },
        { pregunta: "¿Qué es un 'Keylogger'?", opciones: ["Software que registra teclas", "Un antivirus", "Un tipo de teclado", "Un cable USB"], correcta: "Software que registra teclas" },
        { pregunta: "¿Qué herramienta bloquea el tráfico no deseado de internet?", opciones: ["Router", "Firewall", "Switch", "Hub"], correcta: "Firewall" },
        { pregunta: "¿Cuál es la función principal de una VPN?", opciones: ["Aumentar velocidad", "Cifrar la conexión", "Bajar virus", "Limpiar disco"], correcta: "Cifrar la conexión" },
        { pregunta: "¿Qué es un ataque DDoS?", opciones: ["Robo de fotos", "Saturar un servidor con tráfico falso", "Cambiar la clave", "Quemar el CPU"], correcta: "Saturar un servidor con tráfico falso" },
        { pregunta: "¿Cómo se llama el hacker que busca fallos para repararlos?", opciones: ["Ciberdelincuente", "Hacker Ético", "Script Kiddie", "Cracker"], correcta: "Hacker Ético" },
        { pregunta: "¿Qué es un Troyano?", opciones: ["Virus oculto en programa legítimo", "Un antivirus", "Un cable de red", "Un firewall"], correcta: "Virus oculto en programa legítimo" }
    ],
    software: [
        { pregunta: "¿Qué programa se usa principalmente para hojas de cálculo?", opciones: ["Word", "PowerPoint", "Excel", "Photoshop"], correcta: "Excel" },
        { pregunta: "¿Qué extensión define comúnmente a un instalador en Windows?", opciones: [".pdf", ".exe", ".zip", ".docx"], correcta: ".exe" },
        { pregunta: "¿Qué significa que un software sea 'Open Source'?", opciones: ["Es gratis siempre", "Código abierto para modificar", "Solo para Windows", "Sin soporte"], correcta: "Código abierto para modificar" },
        { pregunta: "¿Para qué se utiliza el software WinRAR?", opciones: ["Editar video", "Comprimir archivos", "Navegar", "Dibujar"], correcta: "Comprimir archivos" },
        { pregunta: "¿Qué programa es un editor de código muy popular?", opciones: ["Paint", "Visual Studio Code", "Wordpad", "Excel"], correcta: "Visual Studio Code" },
        { pregunta: "¿Qué significa que un programa esté en fase 'Beta'?", opciones: ["Terminado", "Versión de prueba para errores", "Es la mejor versión", "Es antiguo"], correcta: "Versión de prueba para errores" },
        { pregunta: "¿Cuál de estos es un navegador web?", opciones: ["Microsoft Edge", "Spotify", "Steam", "Zoom"], correcta: "Microsoft Edge" },
        { pregunta: "¿Qué suite de oficina incluye Word y PowerPoint?", opciones: ["Adobe", "Microsoft 365", "Google Drive", "Corel"], correcta: "Microsoft 365" },
        { pregunta: "¿Qué es un IDE?", opciones: ["Disco duro viejo", "Entorno de Desarrollo Integrado", "Un virus", "Una imagen"], correcta: "Entorno de Desarrollo Integrado" },
        { pregunta: "¿Qué tipo de software es una base de datos?", opciones: ["Software de Sistema", "Software de Aplicación", "Firmware", "Hardware"], correcta: "Software de Aplicación" }
    ],

    hardware: [
        { pregunta: "¿Cuál es el cerebro del computador?", opciones: ["Memoria RAM", "CPU", "Disco Duro", "BIOS"], correcta: "CPU" },
        { pregunta: "¿Qué tipo de memoria es volátil y pierde los datos al apagarse?", opciones: ["SSD", "ROM", "Memoria RAM", "Flash"], correcta: "Memoria RAM" },
        { pregunta: "¿Qué componente mantiene la configuración de la BIOS y la hora?", opciones: ["La pila CMOS", "El procesador", "La fuente de poder", "El disipador"], correcta: "La pila CMOS" },
        { pregunta: "¿Cuál es un dispositivo de almacenamiento de estado sólido?", opciones: ["HDD", "SSD", "RAM", "GPU"], correcta: "SSD" },
        { pregunta: "¿Qué puerto se usa para conectar pantallas de alta definición?", opciones: ["USB-C", "HDMI", "VGA", "RJ-45"], correcta: "HDMI" },
        { pregunta: "¿Cuál es la función principal de la Fuente de Poder?", opciones: ["Procesar datos", "Almacenar archivos", "Convertir corriente AC a DC", "Enfriar"], correcta: "Convertir corriente AC a DC" },
        { pregunta: "¿Qué componente disipa el calor directamente del procesador?", opciones: ["Extractor", "Ventilador", "Disipador", "Pasta térmica"], correcta: "Disipador" },
        { pregunta: "¿Dónde se instalan la CPU, la RAM y las tarjetas?", opciones: ["Gabinete", "Tarjeta Madre", "Disco Duro", "Fuente"], correcta: "Tarjeta Madre" },
        { pregunta: "¿Qué significa el término 'Overclocking'?", opciones: ["Formatear", "Aumentar velocidad del reloj", "Limpiar", "Actualizar"], correcta: "Aumentar velocidad del reloj" },
        { pregunta: "¿Qué bus de expansión se usa para tarjetas gráficas modernas?", opciones: ["PCIe", "PCI", "AGP", "SATA"], correcta: "PCIe" }
    ],
    redes: [
        { pregunta: "¿Qué significa IP?", opciones: ["Internet Protocol", "Internal Point", "Instant Page", "Information Path"], correcta: "Internet Protocol" },
        { pregunta: "¿Qué dispositivo se encarga de interconectar diferentes redes y guiar los paquetes?", opciones: ["Switch", "Router", "Hub", "Módem"], correcta: "Router" },
        { pregunta: "¿Cuál es la máscara de subred por defecto para una red de Clase C?", opciones: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"], correcta: "255.255.255.0" },
        { pregunta: "¿Qué protocolo se encarga de asignar direcciones IP de forma automática?", opciones: ["DNS", "DHCP", "FTP", "HTTP"], correcta: "DHCP" },
        { pregunta: "¿Cuál es el puerto por defecto utilizado por el protocolo HTTPS?", opciones: ["80", "21", "443", "22"], correcta: "443" },
        { pregunta: "¿Qué comando se usa para verificar la conectividad de red con un servidor?", opciones: ["ipconfig", "ping", "netstat", "traceroute"], correcta: "ping" },
        { pregunta: "¿Qué topología de red conecta todos los dispositivos a un punto central?", opciones: ["Bus", "Anillo", "Estrella", "Malla"], correcta: "Estrella" },
        { pregunta: "¿Qué nivel del modelo OSI se encarga del direccionamiento lógico e IP?", opciones: ["Capa Física", "Capa de Enlace", "Capa de Red", "Capa de Transporte"], correcta: "Capa de Red" },
        { pregunta: "¿Cuál es la función principal de un servidor DNS?", opciones: ["Traducir nombres a IP", "Asignar claves", "Bloquear virus", "Descargar archivos"], correcta: "Traducir nombres a IP" },
        { pregunta: "¿Qué tipo de cable se utiliza comúnmente en redes LAN cableadas?", opciones: ["Coaxial", "Fibra óptica", "UTP", "Cable paralelo"], correcta: "UTP" }
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


    { pregunta: "¿Qué imprime este código? for i in range(3): print(i)", opciones: ["1 2 3", "0 1 2", "0 1 2 3", "3 2 1"], correcta: "0 1 2" },

    { pregunta: "¿Qué tipo de dato es {'nombre':'Ana','edad':20}?", opciones: ["Lista", "Tupla", "Diccionario", "Conjunto"], correcta: "Diccionario" }
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