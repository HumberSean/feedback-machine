//JavaScript Assignment 5 - Weather Data for Two Cities


//


var feedBack = [];

var item0=["FEEDBACK", "Great job!", "Good job. See rubric for more feedback."];
var item1=["PROFESSIONAL PRACTICE", "Add helpful comments to mark the sections of your code and significant logic pieces. I encourage you to do this first (&quot;pseudocode&quot;) before you start your work.", "Missing responses to professional practice questions."];
var item2=["CLICKING A CITY", "Does not output the required city name (#3.a).", "The second button is missing a city name (#1).", "When the page first loads, the output panel should be hidden (#2).", "No data is provided for a second city.", "Metric should be achieved through units=metric parameter of API.", "XMLHttpRequest object was required for this assignment (#3)", "Modify the current weather with capitalization and punctuation as we did in the lab."];
var item3=["WEATHER ICON", "Missing the weather icon (#3.d).", "Missing alt attribute.", "alt text from a data object property - nice!"];
var item4=["FIFTH DATA ITEM", "Missing contextual data (#3.e).", "Missing units of measure.", "Humidity should have %.", "Missing the required 5th data item (#3.e)."];
var item5=["ERROR HANDLING", "Error message should be on its own, not mixed with original text.", "Does not let the user know there was an xhr request error.", "Error message should be displayed in the dedicated error span.", "Be sure to test your error handling. You are not displaying an error message."];
var item6=["STRETCH GOAL", "Well done!", "Your click listeners are calling anonymous functions."];
var item7=["CRITICAL FAIL", "Unfortunately, you changed the HTML file in a way that hacked the need for the required JavaScript solution. This is the criteria for a Critical Fail for this assignment. Please pay careful attention to rubrics and coding requirements moving forward, and always clarify with your instructor or lead developer if you have any questions."];


feedBack.push(item0, item1, item2, item3, item4, item5, item6, item7);