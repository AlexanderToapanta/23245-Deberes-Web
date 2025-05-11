let sesionActiva = false;
function agregarAlCarrito(boton) {
    const card = boton.closest(".card");
    const nombre = card.querySelector(".card-title, .fw-bolder").textContent.trim();
    let precioTexto = card.querySelector(".card-text")?.textContent.trim() || "";
    let precio = precioTexto.replace("$", " ").trim();
    const imagen = card.querySelector("img").src;
    const producto = { nombre, precio, imagen };
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContadorCarrito();

    
    actualizarStock(card);
}



function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contador = document.querySelector(".badge");
    if (contador) contador.textContent = carrito.length;
}


document.addEventListener("DOMContentLoaded", actualizarContadorCarrito);

function actualizarStock(card) {
    const cantidadElemento = card.querySelector("#cantidad");
    let cantidad = parseInt(cantidadElemento.textContent.trim());

    if (cantidad > 0) {
        cantidad -= 1;
        cantidadElemento.textContent = cantidad.toString();

        if (cantidad === 0) {
            const boton = card.querySelector("a");
            if (boton) {
                boton.classList.add("disabled");
                boton.onclick = null;
            }
        }
        return true;
    } else {
        alert("No hay más stock disponible para este producto.");
        return false;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    console.log("Cargando carrito...");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contenedor = document.getElementById("carrito");

    if (contenedor && carrito.length > 0) {
        carrito.forEach(producto => {
            const card = document.createElement("div");
            card.className = "col";
            card.innerHTML = `
                <div class="card h-100">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.precio}</p>
                    </div>
                </div>
            `;
            contenedor.appendChild(card);
        });
    } else {
        console.log("Carrito vacío o contenedor no encontrado");
    }
});

function cargarCarrito() {
    console.log("Cargando carrito...");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contenedor = document.getElementById("carrito");
    const totalElement = document.getElementById("total");
    let total = 0;

    if (contenedor) {
        contenedor.innerHTML = ''; 

        carrito.forEach((producto, index) => {
            total += parseFloat(producto.precio); 
            const card = document.createElement("div");
            card.className = "col";
            card.innerHTML = `
                <div class="card h-100">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$${producto.precio}</p>
                        <!-- Botón para eliminar producto del carrito -->
                        <button class="btn btn-danger" onclick="eliminarDelCarrito(${index})">Eliminar</button>
                    </div>
                </div>
            `;
            contenedor.appendChild(card);
        });

        totalElement.textContent = total.toFixed(2); 
    }
}


function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito)); 
    cargarCarrito(); 
    actualizarContadorCarrito(); 
}


function realizarPago() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const total = carrito.reduce((acc, producto) => acc + parseFloat(producto.precio), 0);

    if (carrito.length > 0) {
        if (!sesionActiva) {
            alert('Debe iniciar sesion para completar la compra');
            cargarPaginas('Login');
        } else {
            if (confirm(`El total a pagar es $${total.toFixed(2)}. ¿Deseas finalizar el pago?`)) {
                localStorage.removeItem("carrito");
                alert("¡Gracias por tu compra!");
                cargarCarrito();
                actualizarContadorCarrito();
            }
        }
    } else {
        alert("El carrito está vacío. No puedes realizar el pago.");
    }
}

function Login() {
    let emailInput = document.getElementById('txt_email_login');
    let passwordInput = document.getElementById('txt_password_login');
    let email = emailInput.value;
    let password = passwordInput.value;

    if (email === "ajtoapanta6@espe.edu.ec" && password === "12346") {
        sesionActiva = true;
        document.getElementById('btn_Login').style.display = 'none';
        document.getElementById('btn_usuario').style.display = 'inline-block';
        alert('Inicio de sesión correcto');
        cargarPaginas('index');
    } else {
        alert('Correo o contraseña erróneos');
        emailInput.value = '';
        passwordInput.value = '';
        emailInput.focus();
    }
}

function CerrarSesion(){
    document.getElementById('btn_usuario').style.display='none';
    document.getElementById('btn_Login').style.display='inline-block';
    alert('Sesion cerrada correctamente');
    cargarPaginas('index');
}
