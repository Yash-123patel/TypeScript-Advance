
// function add():any{

//     console.log(this);
// }
// add();

// const add2=(x:number):number=>console.log(this);

// add2(10);



/**
-> Global Context: this refers to the global object (window or global).
-> Object Method: this refers to the object the method belongs to.
-> Arrow Function: this is lexically bound and inherits from the surrounding context.
-> Constructor Function: this refers to the newly created object.
-> call, apply, bind: You can explicitly set the value of this.
 */