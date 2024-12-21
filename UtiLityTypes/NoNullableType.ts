
type name=string|null;

const val:name=null;

console.log(val);


//non nullable is used to ensure that our value is never going to null.

const name:NonNullable<name>="YAsh";

console.log(name);



