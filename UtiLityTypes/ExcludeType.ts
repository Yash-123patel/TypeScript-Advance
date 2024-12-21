//exclude is used to remove defined type from union

//here we declared one union type
type value=string|number|boolean;

//here we are excludig boolean from type means we can not assign boolean in val 
let val:Exclude<value,boolean>=10;

val="Hello"
//val=true;

