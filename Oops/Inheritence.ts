//single level inheritence.

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

//single level inheritence
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

const apple:Fruits=new Apple("Apple",200,true);
console.log(apple);

const fruit:Fruits =new Fruits("Mango",180);
console.log(fruit);
