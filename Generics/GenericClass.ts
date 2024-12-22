
//Generics can be used to create generalized classes, like Map.
class Employee<T>{
    private value!:T;

    public setValue(value:T):void{
        this.value=value;
    }

    public getValue():T{
        return this.value;
    }
}

//creating number type variable;
const emp=new Employee<number>();
emp.setValue(20);
const value:number=emp.getValue();
console.log(value);


//creating number type variable;
const emp2=new Employee<string>();
emp2.setValue("Yash");
const value2:string=emp2.getValue();
console.log(value2);