////Security Lab 4 Jasmine

var feedBack = [];

item1 = ["TESTING", "Your test and function do not fulfill the functional specifications. See requirement #5.", "Your test and function do not fulfill the functional specifications. See requirement #5.  For, 'Way off!', look at your assertion and compare it to your input value.", "Your test and function do not fulfill the functional specifications. See requirement #2 (1-10 inclusive), and #5.", "Excellent organization of testing results with headings.", "I love seeing your test values in your report!", "Output your test values to your report so that reviewers know what values you used."];

item2 = ["TESTING VALUES", "Good job with testing values. ", "For test to pass, for this application we should test 4 (as you did) and another valid number in the middle of the range that is not the secret number so that we get the 'Guess again' result.", "We should avoid redundancy by saving boundary test values for boundary testing, and not use them in test to pass or test to fail.", "Your test and function do not fulfill the functional specifications. See requirement #5.  You copied your test values from the function and not the specification. Our tests need to enforce the specification, not duplicate the function.", "Boundary testing for this context needs 0,1,2 and 9,10,11.  These are the numbers that are the boundary, just outside, and just inside."];

item3 = ["FIXING THE FUNCTION", "In your comments for the parts you fixed in the function, it is always a good idea to justify or explain your changes: '... to match the provided specification.'", "Don't forget to add comments to the file where you made changes (and why you made them)."];
 

feedBack.push(item1, item2, item3);

//ren *.js lab-4-guess-spec.js

//ren *.js lab-4-guess.js