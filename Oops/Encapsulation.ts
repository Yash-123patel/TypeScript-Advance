
/**
 * 
 * {Encapsulation}:-> Process of wrapping the data members and member function together into single unit
 * -> It is used for Data hiding.
 */


//Encapsulated class 
class Employee{
    private name:string;
    private age:number;
    private salary:number;
    private noOfHoursWork:number;
    private address:string;

    constructor(name:string,age:number,salary:number,noOfHoursWork:number,address:string){

        this.name=name;
        this.age=age;
        this.salary=salary;
        this.noOfHoursWork=noOfHoursWork;
        this.address=address;
    }

    //setter methods
    public setName(name:string):void{
        this.name=name;
    }

    public setAge(age:number):void{
        if(age<0){
            age=18;
        }
        else if(age>60){
            age=60;
        }
        this.age=age;
    }

    public setSalary(salary:number):void{
        if(salary<0){
            salary=18000;
        }
        else if(salary>600000){
            salary=60000;
        }
        this.salary=salary;
    }

    public setNoOfHoursWork(noOfHoursWork:number):void{
        if(noOfHoursWork>8||noOfHoursWork<0){
            noOfHoursWork=5;
        }
        this.noOfHoursWork=noOfHoursWork;
    }

    public setAddress(address:string):void{
        this.address=address;
    }

    //getter methods

    public getName():string{
        return this.name;
    }

    public getAge():number{
        return this.age;
    }

    public getSalary():number{
        return this.salary;
    }

    public getNoOfHoursWork():number{
        return this.noOfHoursWork;
    }

    public getAddress():string{
        return this.address;
    }
}