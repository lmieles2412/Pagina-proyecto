# 📚 Quiz de Sistemas - Guía de Uso

## 📋 Descripción
Aplicación web interactiva de quiz sobre Sistemas con un hermoso diseño moderno, tema claro/oscuro y un sistema de login personalizado.

## 📁 Estructura de Archivos

```
Pagina-proyecto/
├── login.html              # Página de login
├── login-styles.css        # Estilos del login
├── login-script.js         # Lógica del login
├── index.html              # Página principal del quiz
├── Styles.css              # Estilos del quiz
├── script.js               # Lógica del quiz
└── README.md              # Este archivo
```

## 🚀 Cómo Usar

### Inicio de la Aplicación
1. **Primera vez**: Abre `login.html` en tu navegador
2. **Ingresa tu información**:
   - Nombre completo
   - Correo electrónico válido
3. **Haz clic en "Ingresar al Quiz"**
4. ¡Listo! Serás redirigido automáticamente al quiz

### Sistema de Persistencia
- Tu nombre y correo se guardan localmente en `localStorage`
- La próxima vez que abras el quiz, tu información se recordará
- Puedes cambiar de usuario limpiando los datos del navegador

## 🎨 Características

### Login
- ✨ Diseño moderno con glassmorphism
- 🎯 Fondo tecnológico con animaciones
- 🌓 Tema claro/oscuro automático
- 📱 Totalmente responsivo
- ✅ Validación de correo electrónico
- 💾 Persistencia de datos

### Quiz
- 6 categorías diferentes
- 10 preguntas por categoría
- 🎵 Animaciones suaves
- 📊 Barra de progreso
- 🏆 Contador de puntos
- 👤 Nombre del usuario visible
- 🌓 Tema claro/oscuro sincronizado

## 🎯 Categorías Disponibles

1. **💽 Sistemas Operativos** - Preguntas sobre SO, componentes de hardware
2. **🛡️ Ciberseguridad** - Seguridad, virus, protección
3. **📂 Software** - Aplicaciones, editores, herramientas
4. **🖥️ Hardware** - Componentes físicos del computador
5. **🌐 Redes** - Protocolos, topologías, IP
6. **🐍 Python** - Fundamentos de programación en Python

## 🔧 Personalización

### Cambiar Fondo del Login
En `login-styles.css`, modifica la sección `.fondo-tech` para cambiar colores y gradientes.

### Agregar Preguntas
En `script.js`, encuentra la sección `const preguntas = {` y agrega nuevas preguntas a las categorías.

### Cambiar Temas de Color
Las variables CSS se encuentran al inicio de `Styles.css` y `login-styles.css`. Busca la sección `:root` para modificar colores.

## 💾 Datos Almacenados

### LocalStorage
- `usuario-quiz`: Información del usuario (nombre y correo)
- `tema-quiz`: Preferencia de tema (claro/oscuro)

## 📱 Responsividad

La aplicación es completamente responsiva:
- 📱 Dispositivos móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🔐 Validación

El formulario de login valida:
- ✅ Nombre no vacío
- ✅ Correo con formato válido (usuario@dominio.extensión)

## 🌙 Tema Claro/Oscuro

- Detecta automáticamente la preferencia del sistema
- Puedes cambiar manualmente con el botón en la esquina superior derecha
- La preferencia se guarda y persiste entre sesiones

## 📝 Notas

- Los datos de usuario se guardan en el navegador (no en servidor)
- La barra de progreso avanza con cada pregunta contestada
- Al terminar el quiz, verás tu puntuación final
- Puedes volver al lobby para hacer otro quiz

## 🎓 Próximas Mejoras Sugeridas

- Integrar con backend para guardar resultados
- Agregar base de datos de usuarios
- Sistema de rankings
- Certificados descargables
- Más categorías y preguntas
- Sistema de dificultad (fácil, medio, difícil)

## 📞 Soporte

Para cualquier duda o error:
1. Verifica que todos los archivos estén en la misma carpeta
2. Abre la consola del navegador (F12) para ver errores
3. Limpia el cache del navegador si hay problemas

---

**¡Disfruta del Quiz! 🎉**
