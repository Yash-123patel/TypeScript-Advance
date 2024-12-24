
//Generics can be used to create generalized classes, like Map.


interface Emp{
    id:number;
    name:string;
    dept:string;
}

class Employee<T>{
    obj:T;
    private value!:T;
    constructor(data:T){
        this.obj=data;
    }

    public setValue(value:T):void{
        this.value=value;
    }

    public getValue():T{
        return this.value;
    }
}

const obj:Emp={
    id:10,
    name:"Yash",
    dept:"HR"
}

const emp:Employee<Emp>=new Employee(obj);
console.log(emp.obj);