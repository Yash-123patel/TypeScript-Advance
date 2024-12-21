
//Intersection type is used to combine more than one type and creating one obj or type that have all properties of all
//intestion type.

//excampl:- 


//custom type Person
type Person={
    name:string,
    age:number
}

//custom type Employee
type Employee={

    salary:number,
    workLocation:string
}

//here we are combining both type Person and Employee and creating new obj which have all properties of both types.
const obj:Person & Employee={
    name:"Yash Patel",
    age:22,
    salary:0.00,
    workLocation:"Vijayawada"
}

console.log(obj);