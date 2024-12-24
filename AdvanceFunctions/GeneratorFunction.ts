/**
 * 
 * @param i 
 *  Generator functions are special functions in TypeScript  that allow us to pause their execution at specific points using the yield keyword and later resume from where they were paused.
 *  A generator function is defined using the function* syntax and returns an iterator when called.
*   The returned iterator can be controlled using the next() method to retrieve values, pass new values, or signal the completion of the sequence.
 */

function* generator(){
    yield 2;
    yield "Yash";
    yield true;
    return "Finally!";
}

const iterator=generator();

// const arrayV=iterator.toArray();

// for(let i=0;i<arrayV.length;i++){
//     console.log(arrayV[i]);
// }


//if iterator is not completed then next() return value otherwise it will return undefine .


let result=iterator.next();
while(!result.done){
    console.log(result);
    result=iterator.next();
}