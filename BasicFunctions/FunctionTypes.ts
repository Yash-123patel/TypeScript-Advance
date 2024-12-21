/**
 * 
 * -> Their are mainly 3 type of function in typescript.
 *         1. Normal Function.
 *         2. Anonymous Function.
 *         3. Arrow Function.
 * 
 */

//Normal Function.With name 
function add1(x:number,y:number){
    return x+y;
}

//anonymous function.Function without name.
const add2=function(x:number,y:number):number{
    return x+y;
}

//arrow function. It is a more consise way to define anonymous function
const add3=(x:number,y:number):number=> x+y;



console.log("Sum is: ",add1(10,20));
console.log("Sum is: ",add2(10,20));
console.log("Sum is: ",add3(10,20));