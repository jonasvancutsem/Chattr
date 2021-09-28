
describe('checks if all pages are loading', function() {
    it('Homepage successfully loads', () => {
        cy.visit('/home')
     })
     it('chat successfully loads', () => {
        cy.visit('/chat')
     })
     it('login page successfully loads', () => {
        cy.visit('/login')
     })
     it('register page successfully loads', () => {
        cy.visit('/register')
     })
   
  });