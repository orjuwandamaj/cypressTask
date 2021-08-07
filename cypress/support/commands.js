// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('guestCheckout', () =>{
      //Hit the site URL
      cy.visit('https://www.samsung.com/in');
      
      // Click a random Buy now
      cy.scrollTo(0, 1500);
      cy.get(':nth-child(3) > .key-feature-tab > .key-feature-tab__contents > .key-feature-tab__container > .key-feature-tab__wrapper > .swiper-slide-active > .key-feature-tab__slide-inner > .key-feature-tab__inner-wrap > .key-feature-tab__cta-wrap > .cta--contained').click();
      
      // Checkout as a guest
      cy.get('.hubble-price-bar__price-cta > .cta').click();
      cy.get('.hubble-addon-page__product-cta > .s-cta-wrap > .cta').click();
      cy.get('.sticky-content > .order-p6-summary-price-details > .os-btn-holder > .btn-primary').click();
      cy.get('#b2C_Continue_Guest').click();
    })
