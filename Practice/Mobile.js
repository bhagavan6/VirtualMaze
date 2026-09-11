class MobilePhone{
    constructor(brand,model,price,RAM,storage){
        this.brand=brand;
        this.model=model;
        this.price=price;
        this.RAM=RAM;
        this.storage=storage;
    }
    specifications(){
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Price: ${this.price}`);
        console.log(`RAM: ${this.RAM}`);
        console.log(`Storage: ${this.storage}`);
        
    }

}
const mobile1=new MobilePhone("Samsung","Galaxy S24",50000,"8GB","128GB");
mobile1.specifications();