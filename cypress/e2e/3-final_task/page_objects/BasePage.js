/// <reference types="cypress" />

export class BasePage {
   static launchApplication(){
        cy.visit("https://demoqa.com/automation-practice-form");
    }

    static inputField(name){
        return cy.get('input#' + name)
    }

    // static tableRowCheck(number){
    //     return cy.get('tbody>tr').eq(number)
    // }
    static tableRowCheck(number, text){
        return cy.get('tbody>tr').eq(number).should('contain.text', text)
    }
}

export default BasePage