// Función para encriptar el texto
function encriptar(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para manejar el clic en los botones
function manejarClic(opcion) {
    const textoInput = document.getElementById("textInput").value;

    // Validar que el texto esté en minúsculas y sin acentos
    if (!/^[a-z\s]*$/.test(textoInput)) {
        alert("El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let resultado = "";
    if (opcion === "encriptar") {
        resultado = encriptar(textoInput);
    } else if (opcion === "desencriptar") {
        resultado = desencriptar(textoInput);
    }

    mostrarResultado(resultado);
}

function copiarTexto() {
    const outputMessage = document.getElementById("output-message");
    const texto = outputMessage.textContent;

    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    }, () => {
        alert("Hubo un problema al copiar el texto");
    });
}

function mostrarResultado(resultado) {
    const outputMessage = document.getElementById("output-message");
    const outputInstructions = document.getElementById("output-instructions");
    const outputSection = document.querySelector('.output-section');
    const imagenNiño = document.querySelector('.niño');  // Selecciona la imagen del niño

    outputMessage.textContent = resultado;
    outputInstructions.style.display = 'none';  // Ocultar el texto de instrucciones
    outputSection.classList.add('texto-presente');  // Agregar clase para manejar el estado con texto
    
    if (imagenNiño) {
        imagenNiño.style.display = 'none';  // Ocultar la imagen del niño
    }
}
