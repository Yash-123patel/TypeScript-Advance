
interface Person{
    name:string;
    age:number;

    getName():string;
}


class People{
    totalWorkHours:number

    constructor(totalWork:number){
        this.totalWorkHours=totalWork;
    }

    
}

//multiple inheritence Employee extends people and also implementing Person.
 class Employee extends People implements Person{

    constructor(public name:string,public age:number,totalWorkHours:number){
        super(totalWorkHours);
        this.name=name;
        this.age=age;
    }

     getName(): string{
        return this.name;
     };


    public override toString(){
        return `Employee [Name]:  ${this.name}, [Age]:  ${this.age}  [totalWorkHours]:  ${this.totalWorkHours}`;

    }
}


const people=new People(6);
//it is internally calling toString() when we pass class instance in console statment.
console.log(people);


const employee=new Employee("Yash",22,9);
console.log(employee);


