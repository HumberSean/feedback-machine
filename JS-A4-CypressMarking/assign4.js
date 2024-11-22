window.onload = function () {
    // Select form elements

    var form = document.forms.ixdForm;
    var header = document.getElementById("welcome");
    var resultSection = document.getElementById("result");
   
    // onload function
    form.onsubmit = function () {

        // Get form values
        var fName = document.getElementById("in_fName");
        var lName = document.getElementById("in_lName");
        var id = document.getElementById("in_id");
        var programSelect = document.getElementById("in_program");
        var program = programSelect.options[programSelect.selectedIndex].text;

        var proj1 = document.getElementById("in_health");
        var proj2 = document.getElementById("in_esport");
        var proj3 = document.getElementById("in_tutorial");
        var captionProject = document.getElementById("caption_project");
       

        // Validation
        var validID = /^[Nn]\d{8}$/; // regex

        if (fName.value === "") {
            fName.style.backgroundColor = "red";
            fName.focus();
            return false;

        } else {
            fName.style.backgroundColor = "";
        }

        if (lName.value === "") {
            lName.style.backgroundColor = "red";
            lName.focus();
            return false;
        } else {
           lName.style.backgroundColor = "";
        }

        if(!validID.test(id.value)){
            id.style.backgroundColor = "red";
            id.focus();
            return false;
        } else {
           id.style.backgroundColor = "";
        }

        if (programSelect.value === "X") {
            programSelect.style.backgroundColor = "red";
            programSelect.focus();
            return false;
        } else {
            programSelect.style.backgroundColor = "";
        }

        if (!proj1.checked && !proj2.checked && !proj3.checked) {
            captionProject.style.backgroundColor = "red";
            return false;
        } 
        else {
            captionProject.style.backgroundColor = "";
        }

        // Dynamic message span selection of block
        var resultFname = document.getElementById("result__Fname");
        var resultLname = document.getElementById("result__Lname");
        var resultId = document.getElementById("result__id");
        var resultProgram = document.getElementById("result__program");
        var resultProject = document.getElementById("result__project");

        // Populate confirmation message to the block
        resultFname.innerHTML = fName.value;
        resultLname.innerHTML = lName.value;
        resultId.innerHTML = id.value;
        resultProgram.innerHTML = program;

        if (proj1.checked) {
            resultProject.innerHTML = proj1.value;
        } else if (proj2.checked) {
            resultProject.innerHTML = proj2.value;
        } else if (proj3.checked) {
            resultProject.innerHTML = proj3.value;
        }

        // Hide form and show confirmation block
        header.style.display = "none";
        form.style.display = "none";
        resultSection.style.display = "block";

        return false;
    }
}
