var offset = [0,0]
var divCajita = document.getElementById('cajita')
var esPresionada = false

divCajita.addEventListener('mousedown', function(e) {
    esPresionada = true
    console.log('[mousedown]')
    console.log('offsetLeft: ' + divCajita.offsetLeft + ' - CoordX: ' + e.clientX)
    console.log('offsetTop: ' + divCajita.offsetTop + ' - CoordY: ' + e.clientY)

    offset = [
        divCajita.offsetLeft - e.clientX,
        divCajita.offsetTop - e.clientY
    ]
}, true)

divCajita.addEventListener('mouseup', function() {
    esPresionada = false
}, true)

divCajita.addEventListener('mousemove', function(e) {
    console.log('[mousemove]')

    if (esPresionada) {
        divCajita.style.left = (e.clientX + offset[0]) + 'px'
        divCajita.style.top = (e.clientY + offset[1]) + 'px'
    }
}, true)