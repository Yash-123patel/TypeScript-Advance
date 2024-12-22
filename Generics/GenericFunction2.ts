
//generic function
function pairValues<S,T>(a:S,b:T):[S,T]{
    return [a,b];
}

const stringAndNumberPairs=pairValues<string,number>("Yash",22);
console.log("StringNumberPair:  ",stringAndNumberPairs);

