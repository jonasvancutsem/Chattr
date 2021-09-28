
// it('mock message post', function() {
//     cy.server({delay:1000});
//     cy.route({
//         method: 'POST',
//         url: '/api/Message',
//         status: 200,
// response: 'fixture:messages.json'
//       });
//       cy.visit('/chat');
//       cy.get('[data-cy=messageCard]').should('have.length', 4);
//   });
//   it('on error should show error message', function() {
//     cy.server();
//     cy.route({
//       method: 'GET',
//       url: '/api/Message',
//       status: 500,
//       response: 'ERROR'
//     });
//     cy.visit('/chat');
   
//   });