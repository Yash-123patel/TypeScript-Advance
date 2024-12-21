// Hoisting is a feature in JavaScript/TypeScript.
// With hoisting, variables and functions are moved to the top of their scope during compilation,
// which is why you can access them before their declaration.

// Only `var` type variables support hoisting.
// Function declarations also support hoisting, as shown below:


add(10);
//console.log("Vaue of A is: ",a);//undefined
var a:number=10;


function add(num:number){
    console.log("Value of num is: ",num)
}