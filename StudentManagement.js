class Student{
    constructor(name,rollNo,department,marks){
        this.name=name
        this.rollNo=rollNo
        this.department=department
        this.marks=marks
    }
    displayDetails(){
    console.log('Name:',this.name);
    console.log('Roll No:',this.rollNo);
    console.log('Department:',this.department);
    console.log('Marks:',this.marks.join(","));
}
    calculatePercentage(){
        let total=0;
        for(let i=0;i<this.marks.length;i++){
            total+=this.marks[i];
        }
        return (total/(this.marks.length*100))*100;
    }
    diplayGrade(){
        let percentage=this.calculatePercentage();
        if(percentage>=90){
            console.log('Grade: A+');
        }
        else if(percentage>=80){
            console.log('Grade: A');
        }
        else if(percentage>=70){
            console.log('Grade: B');
        }
        else if(percentage>=60){
            console.log('Grade: C');
        }
        else{
            console.log('Grade: D');
        }
    }
}
const student1=new Student("Bhagavan",101,"AI&DS",[87,78,67,93,82]);
student1.displayDetails();
console.log("Percentage:",student1.calculatePercentage().toFixed(2)+' %');
student1.diplayGrade();