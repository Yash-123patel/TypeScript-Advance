//never is used to refer a value that never occurs.
//mainlly it is used to throw error or infinite loop.

function getError():never{

    throw new Error("Someting wrong");
}

function isOdd(num:number){
    if(num%2===0){
        getError();
    }

    console.log("Number is odd");


}
isOdd(10);