
//We created one function
function getName(name:string):string{
    return name;
}


//We are assning function return type to userName Variable data type.
const userName:ReturnType<typeof getName>=getName("yash");


console.log(userName);


//The main use of ReturnType<typeof function> is when we have only function name but don't
//know the what type of value that function is going to return then we can assign same function return type to our var.