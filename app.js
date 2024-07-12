
function encriptarLetra(letra) {
    switch (letra) {
        case 'e':
            return "enter";
        case 'i':
            return "imes";
        case 'a':
            return "ai";
        case 'o':
            return "ober";
        case 'u':
            return "ufat";
        default:
            return letra;
    }
}

function encriptarTexto() {
    let texto = document.getElementById("inputTexto").value;
    let textoEncriptado = "";
    for (let letra of texto) {
        textoEncriptado += encriptarLetra(letra);
    }
    mostrarResultado(textoEncriptado);
}

function desencriptarTexto() {
    let texto = document.getElementById("inputTexto").value;
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");
    mostrarResultado(texto);
}

function mostrarResultado(texto) {
    let outputTexto = document.getElementById("outputTexto");
    let lupa = document.querySelector(".lupa");
    if (texto.trim() === "") {
        outputTexto.textContent = "no se ha insertado ningún texto...";
        lupa.style.display = "block"; // Mostrar la imagen de la lupa
    } else {
        outputTexto.textContent = texto;
        lupa.style.display = "none"; // Ocultar la imagen de la lupa
    }
}

function Copiar() {
    let texto = document.getElementById("outputTexto").textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
