//we can create nullable type using union or(|) opertor which allow to store either original type or null. 


//name is either string or null
const name:string|null=null;

/**
 * 
 * --Non-null assertion operator (!)
 * 
 * -> it is used to tell typescript that some point of code that variable will initialise 
 * -> It is more useful in class beacuse typescript follow strict type checking if we not want to initialise variable in
 * -> constructor then we must use non-null-assertion operator for variable
 */
class Color{
    //here we are not creating constructor and initilaising using setter method so wee need to define non-null-assertion
    colorName!:string|null;
    colorPrice!:number;

    public setColorName(colorName:string):void{

        this.colorName=colorName;
    }
    public setColorPrice(colorPrice:number):void{

        this.colorPrice=colorPrice;
    }
}

const color=new Color();
console.log(color.colorName);
color.setColorName("Red");
color.setColorPrice(4400);
console.log(color.colorName);
console.log("Color object value is : ",color);