//Security Lab 5 - End-to-end Testing With Cypress

//


var feedBack = [];

var item0=["FEEDBACK", "Great job!", "And the extra challenge too!!", "Good job."];
var item1=["TEST TO PASS", "Following the principles of Behaviour Driven Development, create text for your report that reads like a sentence in English, preferably, use the Requirements text that you were given.", "Make sure your hidden output div is visible after submit in your Test to Pass with .should(&quot;be.visible&quot;);.", "Have Cypress check that the typed text shows up in the input boxes and, on submit, shows up where it is supposed to in the output.", "Your Cypress element selectors do not match the attribute values in your HTML elements.", "Use .submit() not .click() when submitting a form."];
var item2=["TEST TO FAIL", "Use describe blocks to group your Test to Pass and Test to Fail testing.", "Break up your specs into logical it() blocks. Use the Requirements/Specification as your guideline.", "(#5) Check for background colour of red with .should(&quot;have.css&quot;, &quot;background-color&quot;, &quot;rgb(255, 0, 0)&quot;)", "(#6) Your Test to Fail should check that focus has been set on the input box when there is invalid input.", "focus() puts the focus there, but your test shouldn’t set the focus, it should see if focus has been set there. To check this use... .should(&quot;have.focus&quot;);", "Use the Cypress error messages to help you debug the issues.", "You need to click submit before checking if the textbox background is red.", "Do one test at a time until it works, then move on. If you get stuck, email me."];


feedBack.push(item0, item1, item2);
