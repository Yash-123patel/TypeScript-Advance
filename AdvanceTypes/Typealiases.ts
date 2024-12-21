//type alias is used to define type so it can reusable or we can also create custom type.

//defining type alias
type stType=string;

//using type alias
const name:stType="Yash";
const address:stType="Vijayawada"

console.log(name);
console.log(address);



type Employee={
   id:number;
   name:string;
   salary:number
}


const employee:Employee={
    id:2,
    name:"Moin",
    salary:0.0

}

console.log(employee);

