class Rectangle{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;
    }
    recArea(){
        return this.length*this.breadth;
    }
    recPerimeter(){
        return 2*(this.length+this.breadth);
    }
}
class Circle{
    constructor(radius){
        this.radius=radius;
    }
    cirArea(){
        return 3.14*this.radius*this.radius;
    }
    cirCircumference(){
        return 2*Math.PI*this.radius;
    }

}
const rect1=new Rectangle(12,8);
const cir1=new Circle(3.5);
console.log(rect1.recArea().toFixed(2));
console.log(rect1.recPerimeter().toFixed(2));
console.log(cir1.cirArea().toFixed(2));
console.log(cir1.cirCircumference().toFixed(2));
