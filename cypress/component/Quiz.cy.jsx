import React from "react";
import Quiz from "../../client/src/components/Quiz"

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept({
        method: 'GET',
        url: '/api/questions/random'
      },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
      ).as('getRandomQuestion')
    });

    it('renders', () => {
      // checks to ensure the component renders on the page
      cy.mount(<Quiz />)
    });
  
    it('mounts and displays the "start quiz" button', () => {
      // mount the component, then check to make sure the button to start the quiz is visible
      cy.mount(<Quiz />);
  
      cy.get('button').contains('Start Quiz').should("be.visible");
    });

    it('should display the first question when the "Start Quiz button" is pressed', () => {
      cy.mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();

      cy.get('h2').contains("What is the correct answer?").should("be.visible");
    });

    it('should answer the appropriate questions when completing the quiz', () => {
      cy.mount(<Quiz />);
      cy.get('button').contains('Start Quiz').click();

      //Answer a question
      cy.get('button').contains('2').click();

      // Verify the quiz question has been answered and recorded
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
    });
  
});
