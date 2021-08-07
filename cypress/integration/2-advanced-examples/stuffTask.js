Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('purchase device test cases', () => {
    it('negative test', () => {   
      // Add device and checkout as a guest    
      cy.guestCheckout()

      // Show validation error message
      cy.get('.col-justify > .form-control').click()
      cy.get('.col-justify-c').click()
      
      // Verify that the error message is shown
      cy.get('.col-justify > .input-error-msg').should('contain', 'This is a required field.')
    })
    it('positive test', () => {      
        // Fill pincode field
        cy.get('.col-justify > .form-control').click()
        cy.get('.col-justify > .form-control').type('942038')
                
        // Verify that the error message is not shown
        cy.get('.col-justify > .input-error-msg').should('not.be.visible')
      })
  })