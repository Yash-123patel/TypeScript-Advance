
//Generic function which Can recieve any Type value we need to define a type while calling
function printValue<Type>(value:Type):Type{
    return value;
}

//passing string type
const result1:string=printValue<string>("YashPatel");
console.log("Name is: ",result1);

//passing number type
const result2:number=printValue<number>(400);
console.log("Number is: ",result2);


//passing boolean type
const result3:boolean=printValue<boolean>(true);
console.log("Boolean is: ",result3);


//passing type alias
type colors="red"|"blue";
const color:colors=printValue<colors>("red");
console.log("Color value is: ",color);

//passing union value more than one type
const unionValue:string|number=printValue<string|number>(800);
console.log("UnionValue is: ",unionValue);


interface Person{
    name:string;
    age:number;
}

const obj:Person={
    name:"Munna",
    age:22
}

//passing interface object
const obj2:Person=printValue<Person>(obj);
console.log("Interface Object: ",obj2)