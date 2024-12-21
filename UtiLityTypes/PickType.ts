
//defining interface
interface User{
    userName:string;
    userAge:number;
    userAddress:string;
    userPhone:bigint;
}

//Pick is used to pick only Defined variables


//Pick type is used to pick only defined variable from object.
const user:Pick< User ,'userName'|'userAge'>={
    userName:"Yash Patel",
    userAge:22
}

console.log("User  object value is: ",user);

