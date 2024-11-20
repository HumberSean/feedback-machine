window.onload = pageLoaded;

function pageLoaded(){

var formHandle = document.forms.ixdForm;
formHandle.onsubmit = processForm;
var outputMessage = document.getElementById("result");
var header = document.getElementById("welcome");
var firstNameOutput = document.getElementById("result__Fname");
var lastNameOutput = document.getElementById("result__Lname");
var userIdOutput = document.getElementById("result__id");
var chosenProject = document.getElementById("result__project");
var chosenProgram = document.getElementById("result__program");

var fnameInput=formHandle.f__fName;
var lnameInput=formHandle.f__lName;
var userIdInput=formHandle.f__id;
var projectInput= formHandle.f__project;
var programInput=formHandle.f__program;


function processForm(){
    var check = false;

for (var i =0; i<projectInput.length; i++){
    if (projectInput[i].checked===true){
        check=true;
    }
}
    if (fnameInput.value===""){
        document.getElementById("in_fName").focus();
		document.getElementById("in_fName").style.background="red";
        return false;
    }
    if (lnameInput.value===""){
        document.getElementById("in_lName").focus();
		document.getElementById("in_lName").style.background="red";
        return false;
    }   if (userIdInput.value===""){
        document.getElementById("in_id").focus();
		document.getElementById("in_id").style.background="red";
        return false;
    }   if (programInput.options[programInput.selectedIndex].text==="CHOOSE ONE"){
        document.getElementById("in_program").focus();
		document.getElementById("in_program").style.background="red";
        return false;
    }   if (check=== false){
        document.getElementById("caption_project").style.background="red";
        return false;
    }

    firstNameOutput.innerHTML= fnameInput.value;
    lastNameOutput.innerHTML=lnameInput.value;
    userIdOutput.innerHTML=userIdInput.value;
    chosenProgram.innerHTML=programInput.options[programInput.selectedIndex].text;
    chosenProject.innerHTML = projectInput.value;
    formHandle.style.display="none";
    header.style.display="none";
    outputMessage.style.display="block";
    return false;}
}

/*var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var humberId = document.getElementById('humberId').value;
var programName = document.getElementById('programName').value;
var project = document.getElementById('project').value;*/