
fetch('paginas/home.html')
.then(res=>res.text())
.then(data=>document.getElementById('contenido').innerHTML=data)

function cargarPaginas(url){
    fetch(url)
    .then(
        res=>res.text()
    )
    .then(
        data=>document.getElementById('contenido').innerHTML=data
    )

    
}
