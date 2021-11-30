// Tipado dinamico
var a = 42
console.log( a )

a = 'Hola mundo'
console.log( a )

a = true
console.log( a )

// Tipos de datos primitivos
var a = 2
var b = 3.2
console.log( typeof a )
console.log( typeof b )

var c = true
console.log( typeof c )

var d = 'Hola mundo'
console.log( typeof d )

var e
console.log( typeof e )
console.log( e )

var d = null
console.log( typeof d )
console.log( d )

var x = 2n ** 53n
console.log( typeof x )

console.log( x )

// objetos
var persona = {
    nombre: 'Guillermo',
    apellido: 'Pizarro',
    ciudad: 'Guayaquil'
}

console.log( persona )
console.log( typeof persona )

persona.nombre = 'Guillermo Omar'
console.log( persona )
