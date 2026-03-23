import Login from "../../pages/Login";

describe("Login", () =>{

    beforeEach(() =>{
        cy.visit('https://www.saucedemo.com/')
        cy.title('eq','Swag Labs')
        cy.wait(1000)
        cy.fixture('user').as('userData')
    })

    it('Introducir Login OK', function() {
        Login.introducirUsername(this.userData.validUser.username)
        cy.wait(1000)
        Login.introducirPassword(this.userData.validUser.password)
        cy.wait(1000)
        Login.loginClick()
    } )
}) 