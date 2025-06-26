function validarTexto(input) {
  const msg = document.getElementById("mensaje_texto");
  if (input.value.length < 3) {
    msg.textContent = "Muy corto";
    msg.className = "text-danger";
  } else {
    msg.textContent = "Texto válido";
    msg.className = "text-success";
  }
}

function desenfocarTexto(input) {
  input.style.backgroundColor = "#f8f9fa";
}

function enfocarTexto(input) {
  input.style.backgroundColor = "#fff3cd";
}

function teclaPresionada() {
  console.log("Tecla presionada");
}

function teclaLevantada() {
  console.log("Tecla soltada");
}

function teclaDigitada() {
  console.log("Caracter digitado");
}

function validarEmail(input) {
  const msg = document.getElementById("mensaje_email");
  if (!input.value.includes("@")) {
    msg.textContent = "Correo no válido";
    msg.className = "text-danger";
  } else {
    msg.textContent = "";
  }
}

function correoFinal(input) {
  console.log("Salió del campo de correo");
}

function correoCambiado(input) {
  console.log("Correo cambiado:", input.value);
}

function validarNumero(input) {
  const msg = document.getElementById("mensaje_num");
  if (input.value < 0) {
    msg.textContent = "No se permiten negativos";
    msg.className = "text-danger";
  } else {
    msg.textContent = "Número válido";
    msg.className = "text-success";
  }
}

function evaluarNumero(input) {
  console.log("Número actual:", input.value);
}

function numeroCambiado(input) {
  console.log("Cambio definitivo del número:", input.value);
}

function validarPassword(input) {
  const msg = document.getElementById("mensaje_pass");
  if (input.value.length < 6) {
    msg.textContent = "Contraseña débil";
    msg.className = "text-danger";
  } else {
    msg.textContent = "Contraseña segura";
    msg.className = "text-success";
  }
}

function claveLevantada(input) {
  console.log("Tecla en contraseña liberada");
}

function ocultarClave(input) {
  input.style.borderColor = "gray";
}

function cambiarFecha(input) {
  document.getElementById("mensaje_fecha").textContent = "Fecha seleccionada: " + input.value;
}

function fechaEnfocada(input) {
  console.log("Campo fecha enfocado");
}

function fechaFuera(input) {
  console.log("Campo fecha desenfocado");
}

function archivoCambiado(input) {
  document.getElementById("mensaje_archivo").innerHTML = "Archivo seleccionado: " + input.files[0].name;
}
function archivoClick() {
  console.log("Click en archivo");
}
function archivoFuera(input) {
  input.classList.add("border-secondary");
}

function mostrarRango(input) {
  document.getElementById("mensaje_rango").innerHTML = "Valor actual: " + input.value;
}
function rangoFinal(input) {
  alert("Valor final seleccionado: " + input.value);
}

function colorSeleccionado(input) {
  document.body.style.backgroundColor = input.value;
}
function colorCambiado(input) {
  document.getElementById("mensaje_color").innerHTML = "Color seleccionado: " + input.value;
}

function validarTelefono(input) {
  let mensaje = document.getElementById("mensaje_tel");
  if (input.value.length !== 10) {
    mensaje.innerHTML = "Número incompleto";
    mensaje.className = "text-danger";
  } else {
    mensaje.innerHTML = "Teléfono válido";
    mensaje.className = "text-success";
  }
}
function telefonoDigitado(input) {
  console.log("Teléfono escribiéndose:", input.value);
}

function validarUrl(input) {
  const mensaje = document.getElementById("mensaje_url");
  if (!input.value.startsWith("http")) {
    mensaje.innerHTML = "URL inválida";
    mensaje.className = "text-danger";
  } else {
    mensaje.innerHTML = "";
  }
}
function urlFinal(input) {
  console.log("Se salió del campo URL");
}

function checkboxCambiado() {
  let msg = document.getElementById("mensaje_check");
  let n = document.getElementById("chk_news").checked;
  let p = document.getElementById("chk_promos").checked;
  let salida = [];

  if (n) salida.push("Noticias");
  if (p) salida.push("Promos");

  msg.innerHTML = "Seleccionado: " + salida.join(", ");
}

function radioCambiado() {
  const radios = document.getElementsByName("sexo");
  let seleccionado = "";
  for (let r of radios) {
    if (r.checked) seleccionado = r.value;
  }
  document.getElementById("mensaje_radio").innerHTML = "Seleccionado: " + (seleccionado === "M" ? "Mujer" : "Hombre");
}

function paisCambiado(select) {
  document.getElementById("mensaje_select").innerHTML = "País elegido: " + select.value;
}
function selectClick() {
  console.log("Click en select");
}
function selectFoco(select) {
  select.style.backgroundColor = "#f0f0f0";
}
function selectFuera(select) {
  select.style.backgroundColor = "white";
}

function textoLargo(textarea) {
  const msg = document.getElementById("mensaje_textarea");
  if (textarea.value.length < 10) {
    msg.innerHTML = "Comentario muy corto";
    msg.className = "text-danger";
  } else {
    msg.innerHTML = "Comentario suficiente";
    msg.className = "text-success";
  }
}
function comentarioEscrito(input) {
  console.log("Escribiendo comentario...");
}
function comentarioFoco(input) {
  input.style.borderColor = "blue";
}
function comentarioFuera(input) {
  input.style.borderColor = "gray";
}

function botonClick() {
  document.getElementById("mensaje_boton").innerHTML = "¡Botón presionado!";
}
function botonOver(btn) {
  btn.style.backgroundColor = "#0dcaf0";
}
function botonDown(btn) {
  btn.style.transform = "scale(0.95)";
}
function botonUp(btn) {
  btn.style.transform = "scale(1)";
}
function botonFoco(btn) {
  btn.classList.add("border-dark");
}

function enviarClick() {
  console.log("Clic en Enviar");
}
function hoverSubmit() {
  console.log("Mouse sobre el botón Enviar");
}

function validar(event) {
  event.preventDefault(); 
  alert("Formulario enviado correctamente (simulado)");
  return true;
}

function formReseteado(event) {
  const mensajeReset = document.getElementById("mensaje_reset");

  mensajeReset.innerHTML = "¡Formulario restablecido!";
  mensajeReset.className = "alert alert-warning mt-3 fade-in";

  const mensajes = document.querySelectorAll("p[id^='mensaje_']");
  mensajes.forEach(p => {
    if (p.id !== "mensaje_reset") p.innerHTML = "";
  });

  const inputs = document.querySelectorAll("input, select, textarea");
  inputs.forEach(el => {
    el.classList.remove("text-success", "text-danger", "border-danger", "border-success");
  });

  setTimeout(() => {
    mensajeReset.innerHTML = "";
  }, 3000);
}

function inputGeneral(event) {
  console.log("Input en:", event.target.name || event.target.id);
}

function cambioGeneral(event) {
  console.log("Cambio en:", event.target.name || event.target.id);
}

function validar(event) {
  event.preventDefault();
  alert("Formulario validado correctamente");
  return true;
}