
//function overloading

function add(a:number):number
function add(a:number,b:number):number;

function add(a:number,b?:number){
    if(b!==undefined){
        return a+b;
    }

    return a+10;
}

console.log(add(10));

console.log(add(20,20));