
//defining interface
interface User{
    userName:string;
    userAge:number;
    userAddress:string;
    userPhone:bigint;
}

//Omit is used to remove all  Defined variables


//Omit type is used to remove  defined variable from object.
const user:Omit< User ,'userName'|'userAge'>={
   userAddress:"Vijayawada",
   userPhone:8309017307n
}

console.log("User  object value is: ",user);

