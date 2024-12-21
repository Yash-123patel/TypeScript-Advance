
//arrow function with optional parameters all parameter are optional.
const add=(x?:number,y?:number):number=> x&&y?x+y:0;

console.log(add());// 0
console.log(10); // 10
console.log(10,20); //


function getNumber(num?:number):number{
    if(num)
        return num;
    return 0;
}


console.log("num value is: ",getNumber());//0
console.log("num value is: ",getNumber(10));//10