//Security Lab 6 Ad Hoc Testing




var feedBack = [];

var item0=["FEEDBACK", "Nice work!", "Very thoughtful investigations."];
var item1=["FUNCTIONALITY", "The error messages are difficult to read. It would be better to summarize the messages.", "Create one row for each link tested and provide the resulting URL in the RESULT column.", "Use W3C validators to check HTML/CSS.", "Use the console to look for JavaScript errors.", "What search terms did you use? How do you know it is working correctly - what did you observe?"];
var item2=["COMPATIBILITY", "What versions? Which browser on Android?", "How do you know it displayed correctly? Better: &quot;No visible errors seen&quot;."];
var item3=["PERFORMANCE", "That is a low score and worth drawing attention to in Follow Up", "Use Lighthouse in Google Dev tools for easy performance testing."];
var item4=["SECURITY", "&quot;Invalid URLs&quot; is not checking for broken links, it's checking for manually entering an invalid url and hoping to get a 404 page."];
var item5=["USER TESTING", "You can use the WebAIM WAVE tool to do a simple accessibility test.", "Did you do Usability testing? If so, who was your test participant?"];
var item6=["TEST COLUMN", "Specify the values you used."];
var item7=["RESULT COLUMN", "How do you know things are working properly? What did you see?", "If you're going to use colour, be consistent.", "Very clear prioritization, good job!"];
var item8=["FOLLOW UP? COLUMN", "White hat testing required goes in the Test column, not Follow Up.", "If no follow up is required, leave the cell blank. Someone needs to scan quickly through and determine priorities.", "I can't tell what the priorities should be."];



feedBack.push(item0, item1, item2, item3, item4, item5, item6, item7, item8);