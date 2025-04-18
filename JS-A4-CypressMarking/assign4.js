window.onload = function() {

  var form = document.forms["ixdForm"];

  form.onsubmit = function(event) {
    event.preventDefault();

    var fname = document.getElementById("in_fName").value;
    var lname = document.getElementById("in_lName").value;
    var id = document.getElementById("in_id").value;
    var program = document.getElementById("in_program").value;
    var projectOptions = document.getElementsByName("f__project");

    document.getElementById("in_fName").style.backgroundColor = "";
    document.getElementById("in_lName").style.backgroundColor = "";
    document.getElementById("in_id").style.backgroundColor = "";
    document.getElementById("in_program").style.backgroundColor = "";
    document.getElementById("caption_project").style.backgroundColor = "";

    var valid = true;

    // First Name
    if (fname === "") {
      document.getElementById("in_fName").style.backgroundColor = "red";
      document.getElementById("in_fName").focus();
      valid = false;
    }

    // Last Name
    else if (lname === "") {
      document.getElementById("in_lName").style.backgroundColor = "red";
      document.getElementById("in_lName").focus();
      valid = false;
    }

    // Humber ID (empty + regex)
    else if (id === "") {
      document.getElementById("in_id").style.backgroundColor = "red";
      document.getElementById("in_id").focus();
      valid = false;
    } else {
      var idPattern = /^([nN])\d{8}$/;
      if (!idPattern.test(id)) {
        document.getElementById("in_id").style.backgroundColor = "red";
        document.getElementById("in_id").focus();
        alert("Invalid Humber ID.\nIt should start with 'N' or 'n' followed by 8 digits.");
        valid = false;
      }
    }

    // Program
    if (valid && program === "X") {
      document.getElementById("in_program").style.backgroundColor = "red";
      document.getElementById("in_program").focus();
      valid = false;
    }

    // Project selection
    var projectChosen = false;
    var projectValue = "";
    for (var i = 0; i < projectOptions.length; i++) {
      if (projectOptions[i].checked) {
        projectChosen = true;
        projectValue = projectOptions[i].value;
      }
    }
    if (valid && !projectChosen) {
      document.getElementById("caption_project").style.backgroundColor = "red";
      valid = false;
    }

    // Show result if all inputs are valid
    if (valid) {
      var fullProgram = "";
      if (program === "CS") {
        fullProgram = "Content Strategy";
      } else if (program === "CT") {
        fullProgram = "Creative Technologies";
      } else if (program === "UX") {
        fullProgram = "User Experience Design";
      } else if (program === "WD") {
        fullProgram = "Web Development";
      }

      document.getElementById("welcome").style.display = "none";
      document.getElementById("form").style.display = "none";
      document.getElementById("result").style.display = "block";

      document.getElementById("result__Fname").innerText = fname;
      document.getElementById("result__Lname").innerText = lname;
      document.getElementById("result__id").innerText = id;
      document.getElementById("result__program").innerText = fullProgram;
      document.getElementById("result__project").innerText = projectValue;
    }
  };
};
