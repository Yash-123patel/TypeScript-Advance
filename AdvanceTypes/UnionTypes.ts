//union type is use to define multiple type for variable 
//when we want to stroe more than one type value to vriable then we can us union(|).

type property=number|string|boolean;

let pro:property;

pro=10;//allow
pro="Yash";//allow
pro=true;//allow

console.log("Pro value is: ",pro);//true
