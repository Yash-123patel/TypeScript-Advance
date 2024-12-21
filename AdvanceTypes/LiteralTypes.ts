//Literal type means we can create custom type using literals, string ,number or boolean.

type colorsLiteral="red"|"blue"|"green";

//here we are using colorsLiteral as type so only "red","blue" and "green" can assign to color variable;
let color:colorsLiteral;
color="red";//allow
color="blue";//allow

console.log("color value is: ",color);
//color="balck";//not allowed