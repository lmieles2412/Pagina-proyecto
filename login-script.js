// ============ MANEJO DEL TEMA OSCURO/CLARO ============
function inicializarTema() {
    const temaGuardado = localStorage.getItem('tema-quiz');
    const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let usarOscuro = temaGuardado ? temaGuardado === 'oscuro' : prefiereOscuro;
    
    aplicarTema(usarOscuro);
}

function aplicarTema(esOscuro) {
    const html = document.documentElement;
    const btnToggle = document.getElementById('btn-toggle-tema-login');
    const icono = btnToggle.querySelector('.icono-tema');
    
    if (esOscuro) {
        html.setAttribute('data-tema', 'oscuro');
        html.style.colorScheme = 'dark';
        icono.textContent = '☀️';
        localStorage.setItem('tema-quiz', 'oscuro');
    } else {
        html.setAttribute('data-tema', 'claro');
        html.style.colorScheme = 'light';
        icono.textContent = '🌙';
        localStorage.setItem('tema-quiz', 'claro');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    inicializarTema();
    
    const btnToggle = document.getElementById('btn-toggle-tema-login');
    const menuDesplegable = document.getElementById('menu-desplegable-login');
    
    // Alternar menú al hacer click en el botón
    btnToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuDesplegable.style.display = menuDesplegable.style.display === 'none' ? 'flex' : 'none';
    });
    
    // Cerrar menú al hacer click en cualquier lado
    document.addEventListener('click', () => {
        menuDesplegable.style.display = 'none';
    });
    
    // Opción de cambiar tema
    document.getElementById('opcion-tema-login').addEventListener('click', (e) => {
        e.stopPropagation();
        const html = document.documentElement;
        const esOscuroActual = html.getAttribute('data-tema') === 'oscuro';
        aplicarTema(!esOscuroActual);
        menuDesplegable.style.display = 'none';
    });
    
    // Opción de información
    document.getElementById('opcion-info-login').addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('modal-info-login').style.display = 'flex';
        menuDesplegable.style.display = 'none';
    });
    
    // Cerrar modal
    document.querySelector('.btn-cerrar-modal').addEventListener('click', () => {
        document.getElementById('modal-info-login').style.display = 'none';
    });
    
    document.getElementById('modal-info-login').addEventListener('click', (e) => {
        if (e.target.id === 'modal-info-login') {
            document.getElementById('modal-info-login').style.display = 'none';
        }
    });
});

// ============ MANEJO DEL FORMULARIO LOGIN ============
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-login');
    const inputNombre = document.getElementById('nombre');
    const inputCorreo = document.getElementById('correo');

    // NO cargar datos guardados - los campos siempre inician vacíos
    inputNombre.value = '';
    inputCorreo.value = '';

    // Validación en tiempo real
    inputNombre.addEventListener('input', () => {
        inputNombre.style.borderColor = '';
    });

    inputCorreo.addEventListener('input', () => {
        inputCorreo.style.borderColor = '';
    });

    // Manejo del envío del formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = inputNombre.value.trim();
        const correo = inputCorreo.value.trim();

        // Validaciones
        if (!nombre) {
            inputNombre.style.borderColor = '#ef4444';
            inputNombre.focus();
            mostrarNotificacion('Por favor ingresa tu nombre', 'error');
            return;
        }

        if (!validarCorreo(correo)) {
            inputCorreo.style.borderColor = '#ef4444';
            inputCorreo.focus();
            mostrarNotificacion('Por favor ingresa un correo válido', 'error');
            return;
        }

        // Guardar datos del usuario en sessionStorage (se limpian al cerrar la sesión)
        const usuario = { nombre, correo };
        sessionStorage.setItem('usuario-quiz', JSON.stringify(usuario));

        // Animación de carga
        const btnIngresar = formulario.querySelector('.btn-ingresar');
        const textoOriginal = btnIngresar.innerHTML;
        btnIngresar.disabled = true;
        btnIngresar.innerHTML = '<span class="spinner"></span> Ingresando...';

        // Simular verificación (puedes reemplazar con una llamada real al servidor)
        setTimeout(() => {
            mostrarNotificacion('¡Bienvenido ' + nombre + '!', 'exito');
            setTimeout(() => {
                redirigirAlQuiz();
            }, 800);
        }, 1500);
    });
});

// ============ FUNCIONES AUXILIARES ============

/**
 * Valida el formato del correo electrónico
 */
function validarCorreo(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}

/**
 * Muestra una notificación temporal
 */
function mostrarNotificacion(mensaje, tipo = 'info') {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 12px;
        font-weight: 600;
        font-size: 0.95rem;
        z-index: 10000;
        animation: deslizar-entrada 0.4s ease;
        backdrop-filter: blur(10px);
        max-width: 300px;
    `;

    // Estilos según tipo
    const estilos = {
        error: {
            background: 'rgba(239, 68, 68, 0.9)',
            color: '#fff',
            border: '1px solid rgba(239, 68, 68, 0.3)'
        },
        exito: {
            background: 'rgba(34, 197, 94, 0.9)',
            color: '#fff',
            border: '1px solid rgba(34, 197, 94, 0.3)'
        },
        info: {
            background: 'rgba(59, 130, 246, 0.9)',
            color: '#fff',
            border: '1px solid rgba(59, 130, 246, 0.3)'
        }
    };

    Object.assign(notificacion.style, estilos[tipo]);
    document.body.appendChild(notificacion);

    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'deslizar-salida 0.4s ease forwards';
        setTimeout(() => notificacion.remove(), 400);
    }, 3000);
}

/**
 * Redirige al usuario al quiz
 */
function redirigirAlQuiz() {
    window.location.href = 'index.html';
}

// ============ ANIMACIONES CSS ============
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes deslizar-entrada {
        from {
            opacity: 0;
            transform: translateX(400px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes deslizar-salida {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }

    .spinner {
        display: inline-block;
        width: 14px;
        height: 14px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid white;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
        margin-right: 8px;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    .btn-ingresar:disabled {
        opacity: 0.8;
        cursor: not-allowed;
    }
`;
document.head.appendChild(styleSheet);
