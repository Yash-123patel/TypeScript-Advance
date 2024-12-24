/**
 * 
 * @param i 
 *  Generator functions are special functions in TypeScript  that allow us to pause their execution at specific points using the yield keyword and later resume from where they were paused.
 *  A generator function is defined using the function* syntax and returns an iterator when called.
*   The returned iterator can be controlled using the next() method to retrieve values, pass new values, or signal the completion of the sequence.
 */

function* generator(i:number){

    yield i+1;
    yield i+2;
    yield i+3;
}

function* anotherGenerator(i:number){
    yield i;
    yield* generator(i);
    yield i+20;
}

const iterator=anotherGenerator(10);
let result=iterator.next();
while(!result.done){
    console.log(result);
    result=iterator.next();
}

console.log(iterator.next());