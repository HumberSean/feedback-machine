//Assignment 4 - Registration Form
window.onload = function(){
	//GET REQUIRED ELEMENTS
	var formHandle = document.forms.ixdForm;
	var headSection = document.getElementById("welcome");
	var resultSection = document.getElementById("result");
	var out_Fname = document.getElementById("result__Fname");
	var out_Lname = document.getElementById("result__Lname");
	var out_id = document.getElementById("result__id");
	var out_program = document.getElementById("result__program");
	// out_deliver = document.getElementById("result__delivery");
	var err_deliver = document.getElementById("caption_deliver");
	var out_project = document.getElementById("result__project");
	var err_project = document.getElementById("caption_project");


//FUNCTION TO VALIDATE FORM ONCE SUBMITTED
	function validateForm() {
		//Get form elements
		var f_Fname = formHandle.f__fName;
		var f_Lname = formHandle.f__lName;
		var f_id = formHandle.f__id;
		var f_program = formHandle.f__program;
		//var f_deliver = formHandle.f__deliver;
		var f_project = formHandle.f__project;
		
	//==== VALIDATION ====
		//First Name
		if (f_Fname.value === "") {
			f_Fname.style.background = "red";
			f_Fname.focus();
			return false;
		} else {f_Fname.style.background = "white";}
		
		//Last Name
		if (f_Lname.value === "") {
			f_Lname.style.background = "red";
			f_Lname.focus();
			return false;
		} else {f_Lname.style.background = "white";}

		//ID
		var HIDregex = /^N\d{8}$/i;
		if (!HIDregex.test(f_id.value)) {
			f_id.style.background = "red";
			f_id.focus();
			return false;
		} else {f_id.style.background = "white";}

		//Program
		var HIDregex = /N\d{8}$/i;
		if (f_program.value === "X") {
			f_program.style.background = "red";
			f_program.focus();
			return false;
		} else {f_program.style.background = "white";}


		//Delivery
		/* if (f_deliver.value === "") {
			err_deliver.style.background = "red";
			return false;
		} else {err_deliver.style.background = "white";
		} */
		
		//Project
		if (f_project.value === "") {
			err_project.style.background = "red";
			return false;
		} else {err_project.style.background = "white";}
		
		
		//SHOW/HIDE PANELS AND OUTPUT RESULTS
		headSection.style.display = "none";
		formHandle.style.display = "none";
		resultSection.style.display = "block";
		
		out_Fname.innerHTML = f_Fname.value;
		out_Lname.innerHTML = f_Lname.value;
		out_id.innerHTML = f_id.value;
		out_program.innerHTML = f_program.options[f_program.selectedIndex].text;
		//out_deliver.innerHTML = f_deliver.value;
		out_project.innerHTML = f_project.value;

		return false;
	}//END validateForm


	formHandle.onsubmit = validateForm;
};//end onload