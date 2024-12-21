
//defining interface
interface User{
    userName:string;
    userAge:number;
    userAddress:string;
    userPhone:bigint;
}



//If We use ReadOnly Then we cannot reassing variable
const user:Readonly<User>={
    userName:"Yash Patel",
    userAge:22,
    userAddress:"Vijayawada",
    userPhone:9301498676n
}

console.log("User object value is: ",user);

