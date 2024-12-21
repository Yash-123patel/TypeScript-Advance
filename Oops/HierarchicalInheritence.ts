
//Hierarchical inheritence.

//more than one class inherit properties from single parent class.

class Fruits{
    protected fruitName:string;
    protected fruitPrice:number;

    constructor(fruitName:string,fruitPrice:number){
        this.fruitName=fruitName;
        this.fruitPrice=fruitPrice;
    }

    //method Overloadig.
    public printFruitNameAndPrice():void;
    public printFruitNameAndPrice(message:string):void;

    public printFruitNameAndPrice(message?:string):void{

        console.log("Fruit Name: ",this.fruitName);
        console.log("Fruit Price: ",this.fruitPrice);

        if(message){
            console.log("Message: ",message);
        }
    }

    public toString():string{
        return `[FruitName]: ${this.fruitName}, [FruitPrice]: ${this.fruitPrice}`;
    }
}


class Apple extends Fruits{
    private isGoodFruit:boolean;

    constructor(fruitName:string,fruitPrice:number,isGoodFruit:boolean){
       
        //calling super class constructor
        super(fruitName,fruitPrice);
        this.isGoodFruit=isGoodFruit;
    }

    //method overriding.
    public override toString():string{
        return `[FruitName]: ${this.fruitName}, [FruitPrice]: ${this.fruitPrice}, [isGoodFruit]: ${this.isGoodFruit}`;
    }

}

//Hierarchical inheritence.
class SmallApple extends Fruits{

}

//creating APPle class Object.
const apple:Fruits=new Apple("Apple",200,true);
console.log(apple);

//createing Fruits class Object
const fruit:Fruits =new Fruits("Mango",180);
console.log(fruit);

//creating SmallApple class Object.
const sApple:Fruits=new SmallApple("SApple",120);
console.log(sApple);