
//--ANY

//defining any type variable it will accept any datatype
let a:any=10;

console.log("Original Value of a is: ",a);

a+="Moin";

console.log("After concating moin with a: ",a);

//any type is used when we dont know what type of value user is going to assign .
//it will not check type.






//--UNKNOWN

//created unknown type variable it is also accept all types values but if we will perform any operation it is 
//force use to check type first then perform operation.
let b:unknown=20;

console.log("Original value of b is: ",b);

//b+=10;  //in this line we will get error because we canot directlly perform operation in unknown type variable.


if(typeof b==='number'){
    b+=10;
}

console.log("fter changing unknown value: ",b);



//main diffrence between any and unknown is any does not check type and allows us to perform any operation
//but unknown force us to check first type then perform operation.


//unknown comes with type safety.