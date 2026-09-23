let students=[];
function saveStudents(){
    localStorage.setItem("students",JSON.stringify(students));
}
function loadStudents(){
    let data=localStorage.getItem("students");
    if(data){
        students=JSON.parse(data);
    }
}

function calculateGrade(mark){
    if(mark>=90&&mark<=100) return 'A+';
    else if(mark>=80&&mark<90) return 'A';
    else if(mark>=70&&mark<80) return 'B';
    else if(mark>=60&&mark<70) return 'C';
    else if(mark>=50&&mark<60) return 'D';
    else if(mark<50) return 'F';
    else return 'Invalid mark';
}

function renderTable(list){
    const tbody=document.getElementById("studentTableBody");
    tbody.innerHTML="";
    list.forEach((student)=>{
        const grade=calculateGrade(student.mark);
        tbody.innerHTML+=`<tr> <td>${student.name}</td>
                                 <td>${student.email}</td> 
                                 <td>${student.age}</td>
                                 <td>${student.department}</td>
                                 <td>${student.mark}</td>
                                 <td>${grade}</td>
                                 <td><button onclick="deleteStudent(${student.id})">Delete</button></td></tr>`
        
    });
}

function addStudent(){
    if (!validateForm()) return;
    const name=document.getElementById("studentName").value.trim();
    const email=document.getElementById("studentEmail").value.trim();
    const age=Number(document.getElementById("studentAge").value);
    let department=document.getElementById("studentDepartment").value;
    const mark=Number(document.getElementById("studentMark").value);
    if(department==='Others'){
        department=document.getElementById("otherDepartment").value.trim();
    }
    const newStudent={
        id:Date.now(),
        name:name,
        email:email,
        age:age,
        department:department,
        mark:mark
    };
    students.push(newStudent);
    saveStudents();
    renderTable(students);
    updateDashboard();
    document.getElementById("studentName").value="";
    document.getElementById("studentEmail").value="";
    document.getElementById("studentAge").value="";
    document.getElementById("studentDepartment").value="";
    document.getElementById("otherDepartment").value="";
    document.getElementById("otherDepartment").style.display="none";
    document.getElementById("studentMark").value="";
}
document.getElementById("addStudent").addEventListener("click",addStudent);
document.getElementById("studentDepartment").addEventListener("change",function(){
    const otherInput=document.getElementById("otherDepartment");
    if(this.value==="Others"){
        otherInput.style.display="block";
    }
    else{
        otherInput.style.display="none";
    }
});

function validateForm(){
    let isValid=true;
    const name = document.getElementById('studentName').value.trim();
    const email = document.getElementById('studentEmail').value.trim();
    const age = document.getElementById('studentAge').value;
    const department = document.getElementById('studentDepartment').value;
    const mark = document.getElementById('studentMark').value;

    document.getElementById('nameError').textContent = "";
    document.getElementById('mailError').textContent = "";
    document.getElementById('ageError').textContent = "";
    document.getElementById('departmentError').textContent = "";
    document.getElementById('markError').textContent = "";

    if(name===""||name.length<2){
        document.getElementById('nameError').textContent ="Name must be at least 2 characters.";
        isValid=false;
    }
    const emailInput=document.getElementById("studentEmail");
    if(emailInput.value.trim()===""||!emailInput.checkValidity()){
        document.getElementById('mailError').textContent = "Enter a valid email address.";
        isValid=false;
    }
    if(age===""||isNaN(age)||Number(age)>=100||Number(age)<5){
        document.getElementById('ageError').textContent = "Enter a valid age.";
        isValid=false;
    }
    if(department===""){
        document.getElementById('departmentError').textContent = "Please select a department.";
        isValid=false;
    }
    if(mark===""||isNaN(mark)||Number(mark)<0||Number(mark)>100){
        document.getElementById('markError').textContent = "Mark must be between 0 to 100.";
        isValid=false;
    }
    return isValid;

}

function deleteStudent(id){
    students=students.filter(s=>s.id!==id);
    saveStudents();
    renderTable(students);
    updateDashboard();

}

function searchStudents(){
    const search=document.getElementById("searchInput").value.trim().toLowerCase();
    if(search===""){
        renderTable(students);
        return;
    }
    const filtered=students.filter((s)=>s.name.toLowerCase().includes(search)||
                                        s.email.toLowerCase().includes(search)||
                                        String(s.age).includes(search)||
                                        s.department.toLowerCase().includes(search));
    renderTable(filtered);
}
document.getElementById("searchInput").addEventListener("input",searchStudents);

function updateDashboard(){
    const total=students.length;
    let average=0;
    let highest=0;
    let lowest=0;
    if(total>0){
        const marks=students.map(s=>s.mark);
        const sum=marks.reduce((acc,m)=>acc+m,0);
        average=(sum/total).toFixed(2);
        highest=Math.max(...marks);
        lowest=Math.min(...marks);
    }
    document.getElementById("totalStudents").textContent=total;
    document.getElementById("averageMark").textContent=average;
    document.getElementById("highestMark").textContent=highest;
    document.getElementById("lowestMark").textContent=lowest;
}
loadStudents();
renderTable(students);
updateDashboard();