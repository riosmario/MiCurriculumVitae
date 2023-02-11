function alertaimagen() {
  alert ("REDES SOCIALES. Presiona ACEPTAR")
}

function mail() {
  alert ("Ese es el mail. Presiona ACEPTAR")
}

document.getElementById('si').onclick = function () {
  document.getElementById('gracias').innerText = "Gracias! Tu opinion me ayuda a seguir mejorando!!"
}

document.getElementById('no').onclick = function () {
  document.getElementById('gracias').innerText = "Gracias por tu opinion! La próxima vez intentaremos hacerlo mejor!"
}

setInterval(function() {
  var elem = document.getElementById("blinking");
  if (elem.style.visibility === "hidden") {
    elem.style.visibility = "visible";
  } else {
    elem.style.visibility = "hidden";
  }
}, 500);