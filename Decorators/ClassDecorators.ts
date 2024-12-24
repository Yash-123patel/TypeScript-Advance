
//decorator function 
function Logger(target:Function){
    console.log("Logging");
    console.log(target);
}


//adding Logger decorator to User class using @ symbol
@Logger
class User{
    constructor(){

        console.log("Constructor Executed.");
    }
}

//creating User instance.
const obj=new User();