
//Generics can be used to create generalized classes, like Map.
interface Employee<K,V>{
    key:K;
    value:V;
}


const obj1:Employee<string,string>={
    key:"Yash",
    value:"Patel"
}
console.log(obj1);

const obj2:Employee<number,string>={
    key:22,
    value:"Patel"
}
console.log(obj2);