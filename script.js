function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let encrypting = document.getElementById("encrypting");

  let textoCifrado = texto
    .replace(/e/gi, "bxc")
    .replace(/i/gi, "flqm")
    .replace(/a/gi, "ñswy")
    .replace(/o/gi, "hzk")
    .replace(/u/gi, "ltcw");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    encrypting.src = "./img/encriptado.jpg.jpeg";
  } else {
    encrypting.src = "./img/encrypting.jpg.jpeg";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let encrypting = document.getElementById("encrypting");

  let textoCifrado = texto
    .replace(/bxc/gi, "e")
    .replace(/flqm/gi, "i")
    .replace(/ñswy/gi, "a")
    .replace(/hzk/gi, "o")
    .replace(/ltcw/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      encrypting.src = "./img/desencriptado.jpg.jpeg";
    } else {
      encrypting.src = "./img/encrypting.jpg.jpeg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}




