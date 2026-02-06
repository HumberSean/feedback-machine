//Lab 4 Testing With Jasmine
describe("Number Guess Test (guessNum function)", function(){

    describe("guessNum Test to Pass", function(){
        it("should return ‘You guessed it!’ when the correct number is entered.(4)", function() {
           var guess = 4;//The known selected value
           expect(guessNum(guess)).toEqual("You guessed it!"); 
        });

        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer.(6)", function() {
           var guess = 6;//A known incorrect value within the correct range.
           expect(guessNum(guess)).toEqual("Guess again."); 
        });
    });//END t2p

    describe("guessNum Test to Fail", function(){
        it("should return 'A number was not input.' if the value entered is not a number.(x)", function() {
           var guess = "x";//INVALID: string, not a number.
           expect(guessNum(guess)).toEqual("A number was not input."); 
        });

        it("should return 'A value was not entered.' if it receives an empty string.", function() {
           var guess = "";//INVALID: Empty string.
           expect(guessNum(guess)).toEqual("A value was not entered."); 
        });
    });//END t2f

    describe("guessNum Boundary testing", function() {
        it("should return 'Way off!!!! Pick between 1 and 10.' if the value entered is a number outside of the allowed range of guessing values.(0)", function() {
           var guess = 0;
           expect(guessNum(guess)).toEqual("Way off!!!! Pick between 1 and 10.");
        });

        it("should return 'Guess again.' for any whole number between 1 and 10 (inclusive), except the correct answer.(1)", function() {
           var guess = 1;
           expect(guessNum(guess)).toEqual("Guess again."); 
        });

        it("should return 'Guess again.' for any whole number between 1 and 10 (inclusive), except the correct answer.(2)", function() {
           var guess = 2;
           expect(guessNum(guess)).toEqual("Guess again.");
        });

        it("should return 'Guess again.' for any whole number between 1 and 10 (inclusive), except the correct answer.(9)", function() {
           var guess = 9;
           expect(guessNum(guess)).toEqual("Guess again."); 
        });
		it("should return 'Guess again.' for any whole number between 1 and 10 (inclusive), except the correct answer.(10)", function() {
           var guess = 10;
           expect(guessNum(guess)).toEqual("Guess again.");
        });

        it("should return 'Way off!!!! Pick between 1 and 10.' if the value entered is a number outside of the allowed range of guessing values.(11)", function() {
           var guess = 11;
           expect(guessNum(guess)).toEqual("Way off!!!! Pick between 1 and 10."); 
        });
    });//END boundary testing 
});//end main suite