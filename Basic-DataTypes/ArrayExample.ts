
//creating string array
const colors:string[]=["Red","White","Black","Blue","Green"];

console.log("Before Pushing Original array: ",colors);

//applying push operation.
colors.push("Voilet","Pink");//push value into last of array
console.log("After Pushing and Poping Original array: ",colors);
console.log("Psuh index,",colors.push("Light"));

//applying pop operation.
console.log("before Poping array is: ",colors);
console.log("Pop is ",colors.pop());
console.log("After Poping array is: ",colors);

//performing filter operation.
const dup:string[]=colors.filter((a)=>a.startsWith('B'));
console.log(dup);



