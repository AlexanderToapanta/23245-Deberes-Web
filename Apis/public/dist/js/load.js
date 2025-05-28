// cargar el archivo header.html

fetch('header.html')
.then(res=>res.text())
.then(data=>document.getElementById('header').innerHTML=data)

fetch('footer.html')
.then(res=>res.text())
.then(data=>document.getElementById('footer').innerHTML=data)

function cargarPaginas(url_pagina){
    fetch(`paginas/${url_pagina}.html`)
    .then(res=>res.text())
    .then(data=>document.getElementById('main').innerHTML=data) 
}

window.onload=()=>cargarPaginas('index')