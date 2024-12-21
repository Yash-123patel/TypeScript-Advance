

//while and for are entry controll loop.
//do_while is exit controll loop.


//when we don't know number of iteration then we go for while loop.

//here we want total digit count in our number and we dont knnow how many time our loop iterate so we go for while loop.
const num:number=1123;
let temp:number=num;
let count:number=0;
while(temp>0){
    count+=1;
    temp= Math.floor(temp/10);
    
   
}
console.log("Number of digit: ",count);



//if we know how many times our loop will iterate then we go for for loop.
//for is a range loop.

for(let i=1;i<=10;i++){
    console.log("Value is :" , i);
}



//if we want that our loop body must iterate at least one time then we go for do-while loop


let value:number=0;

let count2=0;
do{
    count2++;
    temp=Math.floor(temp/10);
}while(value!=0)

    console.log("value digit is: ",count2);