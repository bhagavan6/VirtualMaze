class Student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }
    total(){
        let sum=0;
        for(let i=0;i<this.marks.length;i++){
            sum+=this.marks[i];
        }
        return sum;
    }
    percentage(){
        let tot=this.total();
        return (tot/(this.marks.length*100))*100;
    }
    grade(){
        let percent=this.percentage();
        if(percent>=90){
            return 'A';
        }
        else if(percent>=75){
            return 'B';
        }
        else if(percent>=50){
            return 'C';
        }
        else{
            return 'D';
        }
    }
    result(){
        let res=this.percentage();
        if(res>50){
            return 'Pass';
        }
        else{
            return 'Fail';
        }
    }
}
let student1=new Student("Bhagavan",[78,81,87,93,79]);
console.log(`Total marks: ${student1.total()}`);
console.log(`Percentage: ${student1.percentage().toFixed(2)}%`);
console.log(`Grade: ${student1.grade()}`);
console.log(`Result: ${student1.result()}`);