import { BasePage } from "./page_objects/BasePage";

const name = "Ģirts";
const lastName = "Jencis";
const email = "girtaPiemers@gmail.com";
const userNumber = "22334455";
const dateOfBirth = "28 Feb 1930";
const subject = "Economics";
const currentAddress = "Boulevard of broken dreams"
const state = "NCR";
const city = "Delhi";

describe('final_task', () => {
     beforeEach(() => {
         BasePage.launchApplication();
         })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
       it('displays two todo items by default', () => {

// filling out fields with information
        BasePage.inputField('firstName').type(name);
        BasePage.inputField("lastName").type(lastName);
        BasePage.inputField('userEmail').type(email);
        BasePage.inputField('userNumber').type(userNumber);
        BasePage.inputField('gender-radio-1').click({force: true});
        BasePage.inputField('dateOfBirthInput').type('{selectAll}' + dateOfBirth + '{enter}');
        BasePage.inputField('subjectsInput').type(subject + '{enter}');
        BasePage.inputField('hobbies-checkbox-3').click({force: true});
        BasePage.inputField('uploadPicture').selectFile('Cypress/files/smile.jpg');
        cy.get('textarea#currentAddress').type(currentAddress + '{enter}');
        cy.get('div#state').type(state + '{enter}');
        cy.get('div#city').type(city + '{enter}');
        cy.get('button#submit').click();
// validation
        BasePage.tableRowCheck(0, name + " " + lastName);
        BasePage.tableRowCheck(1, email);
        BasePage.tableRowCheck(2, "Male");
        BasePage.tableRowCheck(3, userNumber);
        BasePage.tableRowCheck(4, "28 February,1930");
        BasePage.tableRowCheck(5, subject);
        BasePage.tableRowCheck(6, "Music");
        BasePage.tableRowCheck(7, "smile.jpg");
        BasePage.tableRowCheck(8, currentAddress);
        BasePage.tableRowCheck(9, state + " " + city);
          })
})