
function getDetails(name:string,age:number):void{
    console.log("name is: ",name);
    console.log("age is: ",age);
}


type paramType=Parameters<typeof getDetails>;


//parameter type is used to extract type of all paramaeters of function it will return type as tupple.
const details:paramType=["yash",10];


console.log(details);