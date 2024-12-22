
//Generics can be used to create generalized classes, like Map.
class Employee<K,V>{
    private value!:{key:K,value:V};

    public setValue(key:K,value:V):void{
        this.value={key,value};
    }

    public getValue():{key:K,value:V}{
        return this.value;
    }
}

//creating string key and number value ;
const emp=new Employee<string, number>();
emp.setValue("Yash",22);
const value=emp.getValue();
console.log(value);


//creating number key and string value ;
const emp2=new Employee<number,string>();
emp2.setValue(10,"Yash");
const value2=emp2.getValue();
console.log(value2);