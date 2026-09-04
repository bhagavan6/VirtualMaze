class Employee{
    constructor(empId,empName,salary,hraPer,daPer){
        this.empId=empId;
        this.empName=empName;
        this.salary=salary;
        this.hraPer=hraPer;
        this.daPer=daPer;
    }
    calculateHRA(){
        return this.salary*(this.hraPer/100);
    }
    calculateDA(){
        return this.salary*(this.daPer/100);
    }
    grossSalary(){
        let hra=this.calculateHRA();
        let da=this.calculateDA();
        return this.salary+hra+da;
    }
    netSalary(deduction){
        let netsalary=this.grossSalary();
        console.log(`Net Salary: ${netsalary-deduction}`);

    }
}
const employee1=new Employee(101,"Dhruv",30000,20,10);
console.log('Gross Salary:',employee1.grossSalary());
employee1.netSalary(2000)
