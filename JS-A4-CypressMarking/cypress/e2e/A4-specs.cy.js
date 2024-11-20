//End to End Testing (E2E) with the Cypress Test Runner
//JavaScript Assignment 4: Form Validation
describe('JS Assignment 4 Test', () => {

//==== All valid values TEST TO PASS ====
describe('Test to PASS', () => {

//GO TO THE PAGE
	describe('Entering form values', () => {
		it('should load the page', () => {
			cy.visit('./Assign-4-Forms.html')
		})			
			
		it('should take and submit valid values', () => {
		//FIRST NAME
			cy.get('#in_fName')
			.type('FirstNameHERE').should('have.value', 'FirstNameHERE')
		//LAST NAME
			cy.get('#in_lName')
			.type('LasstNameHERE').should('have.value', 'LasstNameHERE')
		//ID
			cy.get('#in_id')
			.type('n12345678').should('have.value', 'n12345678')
			
		//PROGRAM
			cy.get('#in_program')
			.select('WD').should('have.value', 'WD')
			
		//DELIVERY -NOT USED IN F24
		//	cy.get('#in_online')
		//	.check().should('have.value', 'online')
			
		//PROJECT
			cy.get('#in_esport')
			.check().should('have.value', 'eSports')
			
		//SUBMIT FORM
			cy.get('form').submit()//.click();
		})
	})//END enter form values and submit test
	
//==== CHECK RESULTS SCREEN ====
	describe('Outputting the confirmation message', () => {
		//CHECK ELEMENTS ARE HIDDEN
		it('should hide the Header', () => {
			cy.get('#welcome').should('be.hidden')
		})		
		it('should hide the form', () => {
			cy.get('form').should('be.hidden')
		})		
		//CHECK OUTPUT DIV SHOWS
		it('should show the output div', () => {
			cy.get('#result').should('be.visible')
		})
		
		//CHECK OUTPUT VALUES
		it('should display a confirmation message with the correct form values', () => {
			cy.get('#result__Fname').should('have.text', 'FirstNameHERE')			
			cy.get('#result__Lname').should('have.text', 'LasstNameHERE')			
			cy.get('#result__id').should('have.text', 'n12345678')			
			cy.get('#result__program').should('have.text', 'Web Development')			
			//cy.get('#result__delivery').should('have.text', 'eSports')
			cy.get('#result__project').should('have.text', 'eSports')
		})
	})
})//End test to pass


//======== TEST TO FAIL ========
describe('Test to Fail', () => {
	it('should load the page', () => {
			cy.visit('./Assign-4-Forms.html')
		})
	
	//VALIDATE FIRST/LAST NAME
	it('should have red backgrounds and focus on empty strings', () => {
		cy.get('form').submit()
		
		//FIRST NAME
		cy.get('#in_fName')
		.should('have.css', 'background-color', 'rgb(255, 0, 0)').should('have.focus')		
		cy.get('#in_fName')
			.type('FirstNameFIXED').should('have.value', 'FirstNameFIXED')
		
		//LAST NAME
		cy.get('form').submit()		
		cy.get('#in_lName')
		.should('have.css', 'background-color', 'rgb(255, 0, 0)').should('have.focus')
		cy.get('#in_lName')
		.type('LasstNameFIXED').should('have.value', 'LasstNameFIXED')

	})

//HUMBER ID REGEX VALIDATION	
	it('should have red background and focus on RegEx fail', () => {		
		cy.get('form').submit()
		
		//HUMBER ID
		cy.get('#in_id')
		.should('have.css', 'background-color', 'rgb(255, 0, 0)').should('have.focus')
		
		//INCORRECT FIRST LETTER - CORRECT DIGITS
		cy.get('#in_id')
			.type('A12345678').should('have.value', 'A12345678')
		cy.get('form').submit()		
		cy.get('#in_id')
		.should('have.css', 'background-color', 'rgb(255, 0, 0)').should('have.focus')
		
		//CORRECT FIRST LETTER - 7 DIGITS (TOO FEW)
		cy.get('#in_id').clear()
			.type('N1234567').should('have.value', 'N1234567')
		cy.get('form').submit()		
		cy.get('#in_id')
		.should('have.css', 'background-color', 'rgb(255, 0, 0)').should('have.focus')
		
		//CORRECT FIRST LETTER - 9 DIGITS (TOO MANY)
		cy.get('#in_id').clear()
			.type('N123456789').should('have.value', 'N123456789')
		cy.get('form').submit()		
		cy.get('#in_id')
		.should('have.css', 'background-color', 'rgb(255, 0, 0)').should('have.focus')

	})

//PROGRAM VALIDATION	
	it('should validate a dropdown', () => {
		cy.get('#in_id').clear()
			.type('N12345678').should('have.value', 'N12345678')
		cy.get('form').submit()
		
		//PROGRAM
		cy.get('#in_program')
		.should('have.css', 'background-color', 'rgb(255, 0, 0)').should('have.focus')
		
		cy.get('#in_program')
		.select('UX').should('have.value', 'UX')
		
	})

//DELIVERY VALIDATION	
	it('should validate radio buttons', () => {
		cy.get('form').submit()
		
		//PROGRAM
		//cy.get('#caption_deliver')
		//.should('have.css', 'background-color', 'rgb(255, 0, 0)')
		
		//cy.get('#in_person')
		//.check().should('have.value', 'in-person')
		
		//PROJECT
		cy.get('form').submit()
		cy.get('#caption_project')
		.should('have.css', 'background-color', 'rgb(255, 0, 0)')
		
		cy.get('#in_health')
		.check().should('have.value', 'Health for All')
		
		//CHECK OUTPUT
		cy.get('form').submit()		
	})
	
//CORRECT SUBMISSION RE-CHECK
	
	//CHECK OUTPUT DIV SHOWS
		it('should show the output div', () => {
			cy.get('#result').should('be.visible')
		})
	
	//CHECK OUTPUT VALUES
		it('should display a confirmation message with the correct form values', () => {

			cy.get('#result__Fname').should('contain', 'FirstNameFIXED')
			
			cy.get('#result__Lname').should('have.text', 'LasstNameFIXED')
			
			cy.get('#result__id').should('have.text', 'N12345678')
			
			cy.get('#result__program').should('have.text', 'User Experience Design')
			
			//cy.get('#result__delivery').should('have.text', 'in-person')
			cy.get('#result__project').should('have.text', 'Health for All')
		})

})//end test to fail


})//end main suite

//RESOURCES
//cypress.io
//https://docs.cypress.io/guides/references/assertions.html#Chai
//https://codelikethis.com/lessons/javascript/cypress


