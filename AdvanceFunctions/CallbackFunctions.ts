
function hello(callback:any){
    setTimeout(() => {
        console.log("Hello Moin");
         callback();
    }, 3000);
   
}

function leave(){
    console.log("leave Moin");
}

hello(leave);

