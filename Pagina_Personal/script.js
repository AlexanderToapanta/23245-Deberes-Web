function mostrarAlerta(id) {
    document.getElementById(id).classList.remove('d-none');
  }

 document.addEventListener("DOMContentLoaded", function () {
  const btnGuardar = document.getElementById("btnGuardar");

  btnGuardar.addEventListener("click", function () {
    alert("Funciona correctamente.");
  });
});

  