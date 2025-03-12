document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const languageOptions = document.querySelectorAll('.language-option');
    const helpButton = document.getElementById('helpButton');
    const helpDialog = document.getElementById('helpDialog');
    const closeHelpButton = document.getElementById('closeHelpButton');
    const markdownContent = document.getElementById('markdownContent');
    const privacyContent = document.getElementById('privacyContent');
    
    // Estado de la aplicación
    let currentLanguage = 'en'; // Cambiado a inglés como predeterminado
    
    // Contenido en formato Markdown
    const markdownText = `
### Básico

* Abecedario
* Colores
* Familia
* Hogar
* Meses
* Nacionalidad
* Números 0 - 100
* Países
    `;
    
    // Contenido de la política de privacidad
    const privacyPolicyText = `
# Política de Privacidad de LexiPlay

**Última actualización:** 15 de mayo de 2023
#

## Introducción

Gracias por elegir LexiPlay. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando utiliza nuestra aplicación móvil.

## Información que recopilamos

### Información proporcionada por el usuario
- Preferencias de configuración de la aplicación
- Progreso de aprendizaje y estadísticas de uso

### Información recopilada automáticamente
- Datos de uso de la aplicación
- Información del dispositivo (modelo, sistema operativo, identificadores únicos)
- Registros de errores y rendimiento

## Permisos de la aplicación

LexiPlay requiere los siguientes permisos:

- **Almacenamiento**: Para guardar y acceder a archivos de audio necesarios para la funcionalidad de la aplicación.
- **Internet**: Para descargar contenido educativo y actualizaciones.

## Uso de la información

Utilizamos la información recopilada para:

- Proporcionar y mantener nuestro servicio
- Mejorar y personalizar la experiencia del usuario
- Desarrollar nuevas características y funcionalidades
- Solucionar problemas técnicos

## Compartición de datos

No vendemos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:

- Con su consentimiento
- Para cumplir con requisitos legales
- Para proteger nuestros derechos, privacidad, seguridad o propiedad

## Seguridad de los datos

Implementamos medidas de seguridad diseñadas para proteger su información personal. Sin embargo, ningún sistema es completamente seguro, y no podemos garantizar la seguridad absoluta de su información.

## Derechos del usuario

Dependiendo de su ubicación, puede tener ciertos derechos relacionados con sus datos personales, incluyendo:

- Acceder a sus datos
- Corregir información inexacta
- Eliminar sus datos
- Oponerse al procesamiento de sus datos
- Retirar el consentimiento

## Cambios a esta política

Podemos actualizar nuestra Política de Privacidad periódicamente. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.

## Contacto

Si tiene preguntas sobre esta Política de Privacidad, contáctenos en:

- Correo electrónico: miraz.gmr51@gmail.com
- Sitio web: https://miraz51.github.io/Lexiplay/
    `;
    
    // Inicializar
    init();
    
    function init() {
        // Renderizar el Markdown
        if (markdownContent && typeof marked !== 'undefined') {
            markdownContent.innerHTML = marked.parse(markdownText);
        }
        
        // Renderizar la política de privacidad si estamos en esa página
        if (privacyContent && typeof marked !== 'undefined') {
            privacyContent.innerHTML = marked.parse(privacyPolicyText);
        }
        
        // Configurar eventos
        setupEventListeners();
    }
    
    function setupEventListeners() {
        // Selección de idioma
        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.dataset.lang;
                selectLanguage(lang);
            });
        });
        
        // Configuración del diálogo de ayuda flotante
        helpButton.addEventListener('click', () => {
            helpDialog.style.display = 'flex';
            setTimeout(() => {
                helpDialog.classList.add('active');
            }, 10);
        });
        
        closeHelpButton.addEventListener('click', () => {
            helpDialog.classList.remove('active');
            setTimeout(() => {
                helpDialog.style.display = 'none';
            }, 300);
        });
        
        // Cerrar al hacer clic fuera del diálogo
        helpDialog.addEventListener('click', (e) => {
            if (e.target === helpDialog) {
                closeHelpButton.click();
            }
        });
    }
    
    // Seleccionar idioma
    function selectLanguage(lang) {
        currentLanguage = lang;
        
        // Actualizar UI
        languageOptions.forEach(option => {
            if (option.dataset.lang === lang) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
    }
});