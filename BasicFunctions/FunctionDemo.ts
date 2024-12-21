
function printArmStrong(){
    for(let i=1;i<=1000;i++){

        const sum:number=checkArmStrong(i);
        if(i==sum)
             console.log("Armstrong Number: ",i);
    }
}

function checkArmStrong(num:number):number{

    let temp:number=num;
    let count=0;
    while(temp!=0){
        count++;
        temp=Math.floor(temp/10);
    }

    let sum=0;

    while(num!=0){
        sum+=Math.pow(num%10,count);
        num=Math.floor(num/10);
    }
    return sum;
}

printArmStrong();