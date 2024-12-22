
function printValue<T extends string|number>(a:T):T{
    return a;
}

const value1=printValue<string>("Yash");
console.log("String allowed : ",value1);

const value2=printValue<number>(22);
console.log("Number allowed: ",value2);

//const value3=printValue<boolean>(true);//error only string and number allowed