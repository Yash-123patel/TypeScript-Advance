
//rest parameters same is var args in java .
//menas it will accept 0 to n numbers.
function displayePasedNumbers(...num:number[]){

    for(let i=0;i<num.length;i++){
        console.log(num[i]);
    }
}

displayePasedNumbers(10,1,20,3,23,43,234,544,555,3);