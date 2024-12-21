
//defining interface
interface User{
    userName:string;
    userAge:number;
    userAddress:string;
    userPhone:bigint;
}




//if we use Required then all the values are mandatory in object to pass.
const user:Required<User>={
    userName:"Yash Patel",
    userAge:22,
    userAddress:"Vijayawada",
    userPhone:9301498676n
}

console.log("User  object value is: ",user);

