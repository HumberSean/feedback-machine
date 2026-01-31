/* Feedback Machine by Sean Doyle
Create feedback items with categories to paste into student feedback.

v 3.1 January 2026
-Add file creation and download functionality. Bring back copy-to-clipboard functionality as an option.

v 3.0 January 2026
-Add file creation and download functionality.

v 2.7 October 2025
-Fix HTML entity bug by switching to innerText not innerHTML.
v 2.6 November 2024
-Keep main feedback heading checked when resetting.
v 2.5 April 2024
-Make h1 call reset function
-Add autocheck heading when feedback checked or added

v 2 Features
-Save to JS file
-Upload from file
-Convert dbl quotes to entity
-Add space before headings when pasting feedback
-Move input boxes to bottom left or right.

Future Features
-Numbers as headings doesn't make a space between the previous heading.
-Add variable to HTML to generate version #
-escape characters (< >)
-delete/edit heading	
-edit feedback
-delete feedback
-order/sort feedback items
-download file instead of copy paste
*/

//Set heading and comment counters
var headId = 0;
var comntId = 0;

window.onload = ()=>{
let contain = document.getElementById("container");
let headerText = document.getElementById("blurb");
let feedbackBlock = document.getElementById("feedback");
let copyBtn = document.getElementById("btn__copy");
let resetBtn = document.getElementById("btn__reset");
let goodText = document.getElementById("good");
let rubricText = document.getElementById("seeRubric");
let commentForm = document.forms.newFb;
let dropdown = document.getElementById("textHead");
let blurbContainer = document.getElementById("blurbBox");
let txt_heading = document.getElementById("newHead");
let btn_heading = document.getElementById("btn_newHead");
let btn_load = document.getElementById("filebox_load");
let btn_copy = document.getElementById("filebox_copy");
let btn_save = document.getElementById("filebox_save");
let fileText = document.getElementById("filebox_label");
let scriptTag = document.getElementById("ext_script");
let inputBox = document.getElementById("controls");

let newText = commentForm.newFb_txt;
var loadedFileName = "";

/** GET CHECKED ITEMS AND COPY TO CLIPBOARD
*/
function getSelected(){
    var allChecked = document.querySelectorAll('input[type="checkbox"]:checked');
    
    var fullString = "";
	var headingRX = /^[A-Z]{4}/;
    for(let i = 0; i < allChecked.length; i++){
        let labelText = allChecked[i].nextElementSibling.innerText;
		
		if (headingRX.test(labelText) && i !== 0){
			labelText = "\n" + labelText;
		}		
		//fullString += allChecked[i].nextElementSibling.innerHTML + "\n";
		fullString += labelText + "\n";
    }
	
  //Copy to clipboard
    navigator.clipboard.writeText(fullString);
}//end getSelected


/** GET ALL FEEDBACK BLOCKS AND CREATE JS FILE TEXT
*/
function saveFile(ev) {
	var jsText = "//" + fileText.value + "\n\n\nvar feedBack = [];\n\n"
	var pushText = "\n\nfeedBack.push(";
	
	let allBlocks = document.getElementsByClassName("heading");

	//Append text as array elements string
	for (let i = 0; i < allBlocks.length; i++) {
		//Get label elements from comment blocks
		let allLabels = allBlocks[i].getElementsByTagName("label");
		let arrayText = "var item" + i + "=[";
		
		//Inner loop to create string from <label> text
		for (let j = 0; j < allLabels.length; j++) {
			//Convert double-quotes to HTML entity
			let dequotedText = allLabels[j].innerText.replaceAll('"', "&quot;");
			
			//arrayText += '"' + allLabels[j].innerText;
			arrayText += '"' + dequotedText;
			
			//Add quotes (and commas) to array items
			if(j !== allLabels.length - 1){
					arrayText += '", '
				} else {
					arrayText += '"';
				}
				
		}//end loop through labels
		
		arrayText += "];\n"//Finish array string

		//Create array push string text
		jsText += arrayText;
		if(i !== allBlocks.length - 1){
			pushText+= "item" + i + ", ";
		} else {
			pushText+= "item" + i + ");";
		}
	}//end loop through blocks
	
	jsText += pushText;//Append array push text
	
	//Copy or download based on button clicked: copy to clipboard, or save to new file.
	if(ev.target.id === "filebox_copy"){
		//Copy to clipboard.
		navigator.clipboard.writeText(jsText);
		alert("Your file has been copied.\nPaste into your previously saved file.");
	} else if (ev.target.id === "filebox_save"){
		//Create a new file and download it.
		const textBlob = new Blob([jsText], {type: 'text/javascript'});
		var dwnlodLink = document.createElement('a');
		dwnlodLink.href = URL.createObjectURL(textBlob);
		dwnlodLink.download = loadedFileName;
		dwnlodLink.click();
	}

}//end saveFile


/** CREATE NEW HEADING FROM INPUT ID & TEXT, RETURN ELEMENTS
*/
function makeHeading(id, txt){
	let newId = "hd_" + id;
	let newHead = document.createElement('p');
	newHead.setAttribute("class", "heading");
	newHead.setAttribute("id", "block" + id);
	newHead.innerHTML = `<input type="checkbox" id="${newId}">
		<label for="${newId}" class="headText">${txt.toUpperCase()}</label>`;
	return newHead;	
}


/** ADD NEW HEADING FROM INPUT TO PAGE AND DROPDOWN
*/
function addHeading(){
  //Hide blurb text
    blurbContainer.style.display = "none";
  //Add to page
	headId++;//Increment heading counter for ID
	newId = "hd_" + headId;
	
	let newHead = document.createElement('p');
	newHead.setAttribute("class", "heading");
	newHead.setAttribute("id", "block" + headId);
	newHead.innerHTML = `<input type="checkbox" checked id="${newId}">
		<label for="${newId}" class="headText">${txt_heading.value.toUpperCase()}</label>`;
	contain.appendChild(newHead);
	
  //Add to dropdown
	setOptions();
	
  //Reset headings input
	txt_heading.value = "";
	txt_heading.focus();
}


/** CHECK HEADING WHEN COMMENT CHECKED
*/
function checkHeading(){
	if(this.parentElement.firstChild.checked !== true){
		this.parentElement.firstChild.checked = true;	
	}
}
	
	
/** ATTACH CHANGE LISTENERS TO CHECKBOXES
*/
function addCheckListen(){
	const feedbackChkBxs = document.querySelectorAll(".cb__feedback");
	feedbackChkBxs.forEach(cb => {
		cb.onclick = checkHeading;
	});
}

/** SET <options> FOR HEADINGS DROPDOWN
*/
function setOptions(){
	var allHeadings = document.querySelectorAll('.heading');
	dropdown.innerHTML = "<option value='x'>==SELECT HEADING==</option>";
	for (let i = 0; i < allHeadings.length; i++){
		let dropdownText = allHeadings[i].getElementsByClassName('headText')[0].innerText;
		dropdown.innerHTML += `<option value="${allHeadings[i].firstElementChild.id}">
			${dropdownText}
		</option>`;
	}	
}//end setOptions


/** ADD A FEEDBACK COMMENT UNDER A HEADING ON THE WEB PAGE
*/
function addComment(){
  //Create new feedback item
	let newbr= document.createElement('br');
	let newChkbox = document.createElement('input');
	newChkbox.setAttribute('type', 'checkbox');
	newChkbox.setAttribute('checked', 'checked');
	newChkbox.setAttribute('id', 'ch_' + comntId);
	newChkbox.setAttribute('class', 'cb__feedback');
	let newComment = document.createElement('label');
	newComment.innerHTML = newText.value;
	newComment.setAttribute('for', 'ch_' + comntId);
		
	//Get heading to append item to
	let selectedHeading = dropdown.options[dropdown.selectedIndex].value;
//ADD IF LOGIC TO CHECK FOR 'x'
	if(selectedHeading !== 'x' && newText.value !== "") {
	  //Create block ID 
		let blockId = "block" + selectedHeading.substring(3);
		
		//Append new comment
		let outputP = document.getElementById(blockId);
		outputP.appendChild(newbr);
		outputP.appendChild(newChkbox);
		outputP.appendChild(newComment);
		outputP.firstChild.checked = true;//CHECK HEADING
		
		//Reset input form
		commentForm.newFb_txt.value = "";
		commentForm.newFb_txt.focus();
		comntId++;	
	}
	addCheckListen();
	return false;
}//end addComment


/** REMOVE CHECKS FROM ALL FEEDBACK ITEMS AND HEADINGS

*/
function resetSelections(){
    var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 1; i < allCheckboxes.length; i++){
        allCheckboxes[i].checked = false;
    }
    //re-Check the default checkboxes
//    goodText.checked = true;
//    rubricText.checked = true;
}//end resetSelections


/** CREATE FEEDBACK ITEMS ON WEB PAGE FROM PREVIOUSLY SAVED .js FILE
*/
function loadFile(){
	let feedbackArray = feedBack;//variable for imported feedback array	

	//Clear main content and counting values
	feedbackBlock.innerHTML = "";
	headId = 0;
	comntId = 0;
	
	//Loop through array of feedback block arrays
	for(var i = 0; i < feedbackArray.length; i++) {
		//Outer loop to create the heading

		let newHeading = makeHeading(headId, feedbackArray[i][0]);
		feedbackBlock.appendChild(newHeading);
		
		//Inner loop for the feedback items
 		for(let j = 1; j < feedbackArray[i].length; j++){

			let newbr= document.createElement('br');
			let newChkbox = document.createElement('input');
			newChkbox.setAttribute('type', 'checkbox');
			newChkbox.setAttribute('class', 'cb__feedback');			
			newChkbox.setAttribute('id', 'ch_' + comntId);
			let newComment = document.createElement('label');
			newComment.innerHTML = feedbackArray[i][j];
			newComment.setAttribute('for', 'ch_' + comntId);
			newHeading.appendChild
			newHeading.appendChild(newbr);
			newHeading.appendChild(newChkbox);
			newHeading.appendChild(newComment);
			
			comntId++
		}
		headId++;		
	}
	setOptions();//populate Headings dropdown
	addCheckListen();//Add check listeners to checkboxes
}//end loadFile


/** Function to get a saved feedback file and attach to the HTML page.
*/
function getFile(){
	let fullPath = btn_load.value;
	//Get filename
	loadedFileName = fullPath.substring(12);
	//Get foldername from first 2 chars of filename
	let folder = fullPath.substring(12,14);	

	let newScript = document.createElement('script');
	newScript.onload = loadFile;
	newScript.src = folder + "/" + loadedFileName;
	document.head.appendChild(newScript);
	headerText.style.display = "none";
}//end getFile


function setForText(){
	newText.focus();
}

/** Function to move the input box to one side or the other.
*/
function switchSides(e){
	if(e.target.value === "L"){
		inputBox.className = "setControlsLeft";
	} else {
		inputBox.className = "setControlsRight";
	}
}



//On Load function call to populate Headings dropdown
setOptions();

//== Listeners ========================================
btn_heading.onclick = addHeading;
dropdown.onchange = setForText;
commentForm.onsubmit = addComment;
copyBtn.onclick = getSelected;
resetBtn.onclick = resetSelections;
document.getElementById("mainHeading").onclick = resetSelections;
btn_load.onchange = getFile;
btn_copy.onclick = saveFile;
btn_save.onclick = saveFile;
document.getElementById("left").onfocus = switchSides;
document.getElementById("right").onfocus = switchSides;

};