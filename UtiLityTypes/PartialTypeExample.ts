
//defining interface
interface User{
    userName:string;
    userAge:number;
    userAddress:string;
    userPhone:bigint;
}

//if we use Partial then all ther fields are optional we can pass 0 to all number of fields.
const user:Partial<User>={

}

console.log("User object is: ",user);


//in this object we are providing only 2 values.
const user2:Partial<User>={
    userName:"Yash Patel",
    userPhone:9301498676n
}

console.log("User 2 object value is: ",user2);

