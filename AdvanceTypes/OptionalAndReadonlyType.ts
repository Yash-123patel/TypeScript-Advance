
//defining Color interface with optional property colorPrice. and readonly property colorName.
interface Color{
    readonly colorName:string;
    colorCode:bigint;
    colorPrice?:number;
}

//creating object which is type of Color
//while creating object because colorPrice is Optional so not required to pass.
const obj:Color={
    colorName:"Blue",
    colorCode:66234566n
}
//obj.colorName="ajsdhf";//error because colorName is readonly parameters.we cannot re assigned it.
obj.colorCode=741258n;

//pasing price also
const obj2:Color={
    colorName:"Green",
    colorCode:2333233n,
    colorPrice:40000
}


console.log("Object 1 values are: ",obj);
console.log("Object 2 values are: ",obj2);

