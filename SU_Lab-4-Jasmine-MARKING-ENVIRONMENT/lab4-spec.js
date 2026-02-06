//Test to pass
describe("guessNum test to pass", function() {

    it("The function should return ‘You guessed it!’ when the correct number is entered.", function(){
        let valueTested = 4;
        let valueExpected = "You guessed it!"

        expect(guessNum(valueTested)).toEqual(valueExpected);
    });

    it("The function should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer.", function() {
        let valueTested = 6;
        let valueExpected = "Guess again."
        expect(guessNum(valueTested)).toEqual(valueExpected);
    });
});//end test to pass

//Test to fail
describe("guessNum test to fail", function() {

    it("The function should return ‘A number was not input.’ if the value entered is not a number.", function() {
        let valueTested = "Divish";
        let valueExpected = "A number was not input.";
        expect(guessNum(valueTested)).toEqual(valueExpected);
    });

    it("The function should return ‘A value was not entered.’ if it receives an empty string.", function() {
        let valueTested = "";
        let valueExpected = "A value was not entered.";
        expect(guessNum(valueTested)).toEqual(valueExpected);
    });
});//end test to fail

//Boundary tests
describe("guessNum boundary tests", function() {

    it("The function should return ‘Way off!!!! Pick between 1 and 10.’ if the value entered is a number outside of the allowed range of guessing values.", function() {
        let valueTested = 20;
        let valueExpected = "Way off!!!! Pick between 1 and 10.";
        expect(guessNum(valueTested)).toEqual(valueExpected); 
    });

    it("The function should return 'Guess again.'", function() {
        let valueTested = 1;
        let valueExpected = "Guess again.";
        expect(guessNum(valueTested)).toEqual(valueExpected);
    });

    it("The function should return 'Guess again.'", function() {
        let valueTested = 10;
        let valueExpected = "Guess again.";
        expect(guessNum(valueTested)).toEqual(valueExpected);
    });

    it("The function should return 'Way off!!!! Pick between 1 and 10.'", function() {
        let valueTested = 0;
        let valueExpected = "Way off!!!! Pick between 1 and 10.";
        expect(guessNum(valueTested)).toEqual(valueExpected);
    });

    it("The function should return 'Way off!!!! Pick between 1 and 10..'", function() {
        let valueTested = 11;
        let valueExpected = "Way off!!!! Pick between 1 and 10.";
        expect(guessNum(valueTested)).toEqual(valueExpected);
    });

    it("The function should return 'Way off!!!! Pick between 1 and 10.'", function() {
        let valueTested = -20;
        let valueExpected = "Way off!!!! Pick between 1 and 10.";
        expect(guessNum(valueTested)).toEqual(valueExpected);
    });
});//end boundary tests