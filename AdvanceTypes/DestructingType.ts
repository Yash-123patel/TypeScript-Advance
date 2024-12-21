
//Destructing type is used to extract a value from an array or object and store into new variable

//definig Color interface
interface Color{
    readonly colorName:string;
    colorCode:bigint;
    colorPrice?:number;
}

//creating Color type object.
const colorObj:Color={
    colorName:"Blue",
    colorCode:66234566n
}


//destructing coloeName from obj
const{colorName}=colorObj;

console.log(colorName);


