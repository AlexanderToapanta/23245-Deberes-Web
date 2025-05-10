function agregarAlCarrito(boton) {
    const card = boton.closest(".card");
    const nombre = card.querySelector(".card-title, .fw-bolder").textContent.trim();
    let precioTexto = card.querySelector(".card-text")?.textContent.trim() ||"";
    let precio= precioTexto.replace("$"," ").trim();
    const imagen = card.querySelector("img").src;
    const producto = { nombre, precio, imagen };
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContadorCarrito();
}



function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contador = document.querySelector(".badge");
    if (contador) contador.textContent = carrito.length;
}


document.addEventListener("DOMContentLoaded", actualizarContadorCarrito);


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
        if (confirm(`El total a pagar es $${total.toFixed(2)}. ¿Deseas finalizar el pago?`)) {
            localStorage.removeItem("carrito"); 
            alert("¡Gracias por tu compra!");
            cargarCarrito(); 
            actualizarContadorCarrito(); 
        }
    } else {
        alert("El carrito está vacío. No puedes realizar el pago.");
    }
}
