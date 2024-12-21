//Multi level inheritence.

//one class act as a sub class and same time act as a super class.

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

//multi level inheritence.
class SmallApple extends Apple{

}

//creating APPle class Object.
const apple:Fruits=new Apple("Apple",200,true);
console.log(apple);

//createing Fruits class Object
const fruit:Fruits =new Fruits("Mango",180);
console.log(fruit);

//creating SmallApple class Object.
const sApple:Apple=new SmallApple("SApple",120,true);
console.log(sApple);