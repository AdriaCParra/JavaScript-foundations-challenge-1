//  1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
//  Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)

function getTypeOf(value) {
    return typeof value;
}   
 
//  2. Log the result of any function call.

console.log(getTypeOf("Hello World!")); // string
console.log(getTypeOf(42)); // number
console.log(getTypeOf(true)); // boolean
console.log(getTypeOf(null)); // null object
console.log(getTypeOf(undefined)); // undefined