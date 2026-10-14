//WEBD100 Assignment 1 HTML Basics

//
//
//


var feedBack = [];

var item0=["FEEDBACK", "Great job! See rubric for more feedback.", "Good job. See rubric for more feedback.", "Please put your name in your filename when you submit. Thank you!", "Please put all submission files in one folder to zip and submit.", "I appreciate", "Review the rubric before submitting to see exactly what I'm looking for. Email me if you have any questions.", "For your next assignment, I want you to focus on technical accuracy."];

var item1=["HTML MARKUP", "Document elements are not properly nested. Head and body go inside the html element, head goes above body.", "There are duplicate tags for head body html.", "All content that will show on the webpage (except the tab text) goes between the opening and closing body tags.", "Use the title element to set text on the browser tab. It should be unique for each page, based on the page content.", "Don't jump h elements, use the steps. We shouldn't see h4 without h3 first.",  "Make sure each element that needs a closing tag is closed properly.", "The a tag should go inside the li tags and around the text because the a element is an inline element.", "A q element would be more appropriate for a single line quote."];


var item2=["DOCUMENT AND FILE FORMAT", "Home page file must be index.html",  "Avoid spaces in your file names.", "Avoid spaces or special characters in your file names.", "HTML files should have lowercase names with no spaces or special characters.", "Use tabs and spaces to make your html documents more readable.", "Use tabs to visually show which elements are inside which elements."];


var item3=["EFFECTIVE CONTENT", "The header section and navigation should be identical on every page of the website.", "Needs more content.", "I appreciate the full content that you provided!"];

var item4=["FORM", "Missing a properly structured form element.", "Form element is missing action and method attributes.", "Form is required to redirect to the home page on submit.", "Form element should have a method=&quot;post&quot; attribute.", "Best secure practice is to make the form method=&quot;post&quot;", "All form elements that require user input should have a name attribute.", "name attributes should be unique for each input (except radio buttons) and not have spaces in them.", "All form elements - including fieldset - need to be inside the opening and closing form element tags."];

var item5=["EXTERNAL LINKS", "Use the target=&quot;_blank&quot; attribute to open an external page in a new tab. This keeps your site open in a separate tab - the user doesn't leave your site."];

var item6=["LOGO LINK", "The logo should be the same from page to page.", "Logo alt text should indicate that it's a logo: &quot;Humber Logo&quot;"];

var item7=["IMAGES", "All images need an alt attribute.", "alt text should describe the image to someone that can't see it.", "Images are not properly linked.", "If you put your images in a folder, you need to add the folder name to your src attribute <img src=&quot;images/mypic.png&quot;", "A separate folder - nice!!"];

var item8=["NAVIGATION", "Full navigation needs to be on every page of your website.", "Navigation should be a ul with li elements for each item.", "Navigation needs to be at the top of the web page.", "Needs home option in the menu besides linked logo."];


feedBack.push(item0, item1, item2, item3, item4, item5, item6, item7, item8);