//Security Assignment 1 - Jasmine Testing for Login App


var feedBack = [];

var item0=["FEEDBACK", "Great job!", "Good job.", "See rubric for more feedback."];
var item1=["MAIN APPLICATION", "Should say “No username” first if both fields are empty.", "Should say “No password” if username entered but no password.", "The error messages should come from the function, not be hard-coded into the main logic.", "The error messages are required to display in the output box (#3).", "We should not see the output div until submit is clicked.", "What happened to the styling?"];
var item2=["CHECKLOGIN FUNCTION", "Comment: Missing comment.", "Comment: What does it return if input is invalid?", "Comment: It does not return 'Welcome back'", "Comment: It does not return false, it will return an error message string.", "Comment: Which Boolean values does it return? We need to know to test it.", "Put all the variables that your function needs inside the function.", "Empty pass logic is incorrect. Look only for empty password, regardless of username.", "I don't like your function defaulting to return true for a login. The input should have to ‘earn’ the true... if (u === user && p === pass){return true;}", "This function is required to return true for matching user/pass (see functional specifications).", "md5Encrypt should be called inside checkLogin(see functional specifications)."];
var item3=["JASMINE TESTING", "md5Encrypt does not check for a 32 character hexadecimal string pattern. Use a regex with .toMatch() Use ^ and $, otherwise it allows for more than 32.", "Test valid pass with empty string. Test valid user with empty string.", "Check both: invalid user with valid pass, and valid user with invalid pass.", "Missing Test to Fail", "Use describe() blocks to group your testing (e.g. Test to Pass; Test to Fail)", "Show test values in your output.", "Put all test to fail in the Test to Fail block.", "Tests should be enforcing the specification. This would have caught the errors in your function.", "This function does not return 'Welcome back'", "Because your headings are mostly the same, I can't tell what is being tested in each spec.", "Your checkLogin function being tested by Jasmine is not identical to the checkLogin function used by your main logic. This is a critical fail (and a fireable offence in the work place) resulting in a 0 for this assignment. You have hacked the test and not tested your code."];


feedBack.push(item0, item1, item2, item3);