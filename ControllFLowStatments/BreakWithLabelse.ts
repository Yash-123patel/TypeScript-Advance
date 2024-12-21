
//break with lables
A:for (let i = 0; i <= 5; i++) {
    B:for (let j = i; j <= 5; j++) {
        if(j>=5)
            break B;
       if(j==2)
        continue A;
     console.log(j)      
    } 
}


const op=10;
switch(op as number){
    case 9: break;
    
}