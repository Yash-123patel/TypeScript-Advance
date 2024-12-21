
type value=string|number|boolean;

//Extract is used to get particular type from union types.

let val:Extract<value,boolean>=true;

console.log(val);

