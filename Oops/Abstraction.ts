interface Vehicle{
    categoery:string;
    name:string;
    milege:number;
    price:number;

    getVehicelDetails():string;
}

abstract class Engine{
    protected engineStock:number;

    constructor(engineStock:number){
        this.engineStock=engineStock;
    }
    public setEngineStock(stock:number):void{
        this.engineStock=stock;
    }

     abstract getEngineStock():number;

}

class Bike extends Engine implements Vehicle{
       

       constructor(public categoery: string,public name: string,public milege:number,public price:number,engineStock:number){
        super(engineStock);
        this.categoery=categoery;
        this.name=name;
        this.milege=milege;
        this.price=price;
       }

  public getVehicelDetails(): string {
    return `Vehical [Categoery]  ${this.categoery} , [Name]:  ${this.name} , [Milege]:  ${this.milege} , [Price]:  ${this.price},  [EngineStock]:  ${this.engineStock}`;
  }
    


  public override getEngineStock(): number {
     return this.engineStock;
  }
    
}

const bike = new Bike("Two-Wheeler", "Honda Shine", 60, 75000, 20);
console.log(bike.getVehicelDetails);
bike.setEngineStock(25);
console.log(`Updated Engine Stock: ${bike.getEngineStock()}`);