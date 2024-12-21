
class MoinBasha{
    private age!:number;
    private address!:string;
    private dob!:string;

    public setAge(age:number):void{
        this.age=age;
    }

    public setAddress(address:string):void{
        this.address=address;
    }

    public setDob(dob:string):void{
        this.dob=dob;
    }


    public toString():string{
        return `Moin Basha [Age]: ${this.age},  [Address]: ${this.address}, [DOB]: ${this.dob}`;
    }

}

const moin=new MoinBasha();
moin.setAge(23);
moin.setAddress("Guntur");
moin.setDob("20/12/2024");

console.log("Moin Basha Details: ",moin);