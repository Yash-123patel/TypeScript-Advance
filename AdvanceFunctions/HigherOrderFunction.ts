


// function add(fn: (a: number, b: number) => number): (a: number, b: number) => number {
    
//     return function multiply(a: number, b: number): number {
//         const sumResult = fn(a, b);
//         return sumResult * 2; 
//     }
// }

// function sum(a: number, b: number): number {
//     return a + b;
// }

// const multiplyFn=add(sum);

// console.log();

// const result=multiplyFn(10,20);

// console.log(result);

function add(fn:(message:string)=>string):(message:string)=>string{
    return function printM(message:string){
        return fn(message);
    }
}

function message(message:string):string{
    return message;
}

const fn=add(message);

console.log(fn("Yash"));