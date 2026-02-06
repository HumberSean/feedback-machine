////Security Lab 4 Jasmine

//


var feedBack = [];

var item0=["TEST REPORT", "Excellent organization of testing results with headings.", "I love seeing your test values in your report!", "Output your test values to your report so that reviewers know what values you used.", "Use describe blocks for the different sections of your specs: Test to Pass, Test to Fail, Boundary Tests. This will create subheadings and fulfill the principles of Behaviour Driven Development by making it easier for a non-coder to read."];
var item1=["TESTING VALUES", "Good job with testing values.", "For Test to Pass, for this application we should test 4 (as you did) and another valid number in the middle of the range that is not the secret number so that we get the 'Guess again' result.", "For Test to Fail, use values outside the expected range of the valid numbers (1-10). For example, 300 or -15.", "Other Test to Fail values could be: null, false, true, undefined...", "Boundary testing for this context needs 0,1,2 and 9,10,11. These are the numbers that are the boundary, just outside, and just inside.", "Organize your boundary test values in a logical order. Either sequential (0,1,2,9,10,11) or based on return value (0,11,1,2,9,10)", "We should avoid redundancy by saving boundary test values for boundary testing, and not use them in test to pass or test to fail.", "Your test and function do not fulfill the functional specifications. See requirement #2 (1-10 inclusive), and #5.", "Your test and function do not fulfill the functional specifications. See requirement #5. You copied your test values from the function and not the specification. Our tests need to enforce the specification, not duplicate the function, so copy from the specification."];
var item2=["FIXING THE FUNCTION", "In your comments for the parts you fixed in the function, it is always a good idea to justify or explain your changes: '... to match the provided specification.'", "Don't forget to add comments to the file where you made changes (and when and why you made them).", "Excellent commenting of your fixes!"];


feedBack.push(item0, item1, item2);