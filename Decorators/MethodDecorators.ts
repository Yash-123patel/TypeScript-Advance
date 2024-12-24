
function MethodDecorator(target:any){
    console.log("Method Decorator Executed!!!!.........");

    console.log("Target is: ",target);
}


function CLassDecorator(target:any){
    console.log("Method Decorator Executed!!!!.........");

    console.log("Target is: ",target);
}

 @CLassDecorator
class Student{
   
    private name:string;

    constructor(name:string){
        this.name=name;
    }
   
    @MethodDecorator
    public setName(name:string):void{
        this.name=name;
    }

    @MethodDecorator
    public getName():string{
        return this.name;
    }
}

const student:Student=new Student("Yash");
console.log(student);
