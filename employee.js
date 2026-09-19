class Employee{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    maxSalary(employees){
        let maxi=employees.filter((a)=> a.salary>50000)
        .map((a)=>a.salary);
        return maxi;
    }
    totalSalary(employees){
        let total=employees.reduce((tot,a)=>{
            return tot+a.salary;
        },0);
        return total;
    }
    sortSalary(employees){
        return [...employees].sort((a,b)=>b.salary-a.salary);
    }

}
let emp1=new Employee("Bhagavan",21,65000);
let emp2=new Employee("Deva",27,75000);
let emp3=new Employee("Arun",26,35000);
let emp4=new Employee("Apar",29,40000);
let emp5=new Employee("Kavin",19,80000);
let employees=[emp1,emp2,emp3,emp4,emp5];
console.log(`The salaries above 50,000 are ${emp1.maxSalary(employees)}`);
console.log(`The total salary is: ${emp1.totalSalary(employees)}`);
console.log(`The sorted salaries are: ${emp1.sortSalary(employees).map(e=>e.salary)}`);