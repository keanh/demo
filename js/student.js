function Student(studentID, fullname, DOB, sex, studentClass) {
    this.studentID=studentID;
    this.fullname=fullname;
    this.DOB=DOB;
    this.sex=sex;
    this.studentClass=studentClass;
    this.showInList = function () {
        let str="";
        str+="<td>"+this.studentID+"</td>";
        str+="<td>"+this.fullname+"</td>";
        str+="<td>"+this.DOB+"</td>";
        str+="<td>"+this.sex+"</td>";
        str+="<td>"+this.studentClass+"</td>";
        str+="<td>Sửa | Xóa</td>";

        str= "<tr>" + str + "</tr>";

        let tbody=document.getElementById("content").getElementsByTagName("tbody")[0];
        let newRow=tbody.insertRow();
        newRow.innerHTML=str;
    }
}
        let studentList="";
function openDialog() {
    document.getElementById("dialog").style.display="block";
}

function closeDialog() {
    document.getElementById("dialog").style.display="none";
}

function addStudent() {
    let id=document.getElementById("id").value;
    let fullname=document.getElementById("fullname").value;
    let DOB=document.getElementById("DOB").value;

    let studentSex="";
    let sex=document.getElementsByName("sex");
    for (let i=0;i<sex.length;i++){
        if (sex[i].checked){
            studentSex = sex[i].value;
        }
    }
    let studentClass=document.getElementById("class").value;

    let s=new Student(id, fullname, DOB, studentSex, studentClass);
    s.showInList();
    studentList.push(s);
    closeDialog();

}