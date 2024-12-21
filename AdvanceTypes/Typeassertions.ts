/**Type assertion is used to assert a type of variable its certain type.
* -> it is a essential way to override typescript default type.
* -> Type assertion does not change actual type of variable it just tell to compiler.
* -> We have 2 syntax to perform type assertion in typescript.
* 
*     1. using as operator or keyword.
*     2. using <> 
* */

//example 1:

 const a:any="yash";//here we decalared type of a as any.

 //performing assertion using as
 const b:number= a as number;//it is not changing original type it just telling compiler about the type.
 console.log(b);
 console.log(typeof b)


 //performing assertion using <>
 const name:string=<string>a;//it is not changing original type it just telling compiler about the type.
 console.log(name);
 console.log(typeof b)