function cargarElemento() {
    var container = document.getElementById('container')

    var h1 = document.createElement('h1')
    var contenido = document.createTextNode('DOM - Document Obbject Model')
    h1.appendChild( contenido )

    container.appendChild( h1 )
}