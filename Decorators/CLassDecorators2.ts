


function Logic(target:Function){
    console.log("Decorator Executed");
    console.log("Target is : ",target);

}

@Logic
class Employee{
    private name:string;
    private age:number;

    //constructor to initialise the variables.
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
        console.log("Varibale initialise using constructor parameters.")
    }


    //seeter methods to set name and age.
    public setName(name:string):void{
        this.name=name;
    }

    public setAge(age:number):void{
        this.age=age;
    }

    //getters method to get variables values.
    public getName():string{
        return this.name;
    }

    public getAge():number{
        return this.age;
    }
}

const employee:Employee=new Employee("Yash Patel",22);
console.log("Employee object is: ",employee);
