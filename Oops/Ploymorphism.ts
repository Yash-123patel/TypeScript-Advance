
//polymorphism
class People{
    public name:string
    public salary:number
    constructor( name:string,salary:number){
        this.name=name;
        this.salary=salary
    }

    //method overloading
    public getsalary():number
    public getsalary(salary:number):number

    public getsalary(salary?:number){
        if(salary!=undefined){
            return salary
        }else{
            return this.salary
        }
    }
    //overload functions declartion.
    public  getName():string
    public  getName(name:string):string;

    

    //common implementation for both

    public  getName(name?:string):string{
        if(name!==undefined){
            return name;
        }
        return this.name;
    }

}

// class Employee extends People{

//     //method overriding
//     public  override getName(name?: string): string {
//       if(name===undefined){
//         return "Yash Patel"
//       }
//       return name;
//     }
// }
const person: People = new People("shaik",2000);
//const employee: People = new Employee("Patel");
console.log(person.getsalary(65265)); 
console.log(person.getName()); 
console.log(person.getName("Moin"));

// console.log(employee.getName("Basha")); 
// console.log(employee.getName());