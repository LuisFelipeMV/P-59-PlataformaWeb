console.log( 1 == 1 )
console.log( 1 == '1' )

console.log( 1 === 1 )
console.log( 1 === '1' )

console.log( 1 == true )
console.log( 0 == false )

console.log( 1 === true )

console.log( 0 == null )
console.log( 0 == undefined )

console.log( null == undefined )
console.log( null === undefined )

console.log( false == null )
console.log( null )
console.log( !null )
console.log( !undefined )

console.log( 0 == !!undefined )

var obj1 = { nombre: 'Guillermo' }
var obj2 = { nombre: 'Guillermo' }

console.log( obj1 == obj2 )

var str1 = 'Omar'
var str2 = 'Omar'

console.log( str1 == str2 )

var str3 = new String('Hola')
var str4 = new String('Hola')
var str5 = str4

console.log( typeof str2 )
console.log( typeof str3 )

console.log( str3 == str4 )
console.log( str5 == str4 )

var a = new Date()
var b = a.toString()

console.log( a )
console.log( typeof a )
console.log( b )
console.log( typeof b )

console.log( a == b )
console.log( a === b )
