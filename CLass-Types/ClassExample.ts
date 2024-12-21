/**
 * 
 * Class: 
 * - A class is a blueprint for creating objects, defining their properties and methods. 
 *   It gives us an idea of what type of object will be created.
 * 
 * Constructor:
 * - There are two types of constructors in TypeScript:
 *   1. Default Constructor (implicitly provided if no constructor is defined).
 *   2. User-defined (Parameterized) Constructor.
 * 
 * - TypeScript does not support constructor overloading directly. However, you can achieve 
 *   constructor overloading by using:
 *   - Optional parameters (using `?`).
 *   - Union types (e.g., `string | number`).
 *   - Method overloading (using different method signatures with the same method name).
 * 
 * Access Modifiers:
 * - There are three access modifiers in TypeScript:
 *   1. **public**: The member is accessible anywhere.
 *   2. **private**: The member is accessible only within the class.
 *   3. **protected**: The member is accessible within the class and subclasses, but not from outside.
 * 
 * Static Methods, Properties, and Readonly:
 * - **Static members** (methods and properties) are associated with the class itself, not instances.
 *   - Static members can only be accessed using the class name.
 *   - They cannot be accessed using `this` inside static methods.
 * - **Readonly** properties cannot be modified once they are initialized. They can be set only during initialization (in the constructor or at the point of declaration).
 */



class User{

    //non-static variable
     userName:string;

    //static variabel
     static userAge:number;

    //parameterized constructor.
    public constructor(userName:string){
        this.userName=userName;
    }

    //non static method
    public getUserName():string|number;
    //method overloading
    public getUserName(name:string):string;

    public getUserName(name?:string):string{
        if(name){
            this.userName=name;
        }
        return this.userName;
    }

    //static method
    public static getUserAge():number{
            return User.userAge;
    }

    public toString():string{
        return `User Name is : ${this.userName} and User Age is: ${User.userAge}`;
    }
}

class Person{

    //using ! we are telling to ts this is non nullable some where we will initilaise this but not in constructor
     private age!:number;

    //default constructor if we remove this then ts add internally
     constructor(){};


    //setter method for age
    public setAge(age:number):void{
        this.age=age;
    }

    //getter method for age
    public getAge():number{
        return this.age;
    }


}

class Student{

    //in this constructor we are decalring class member with constructor only it is accsessible outside class also..
    constructor(public age:number, public readonly name:string){
        this.age=age;
        this.name=name;
    }
}

//user object
const user=new User("Yash Patel");
User.userAge=22;
console.log(user.toString());

//person object
const person=new Person();
person.setAge(22);
console.log("Person age is: ",person.getAge());


//student object
const student=new Student(20,"Yash");
student.age=22
//student.name="Patel";//give error because name is readonly property we can not modify 
console.log(`Student Age is: ${student.age} And Student Name is : ${student.name}`);



