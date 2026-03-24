class Login {
  elements = {
      usernameInput: () => cy.get('#user-name'),
      passwordInput: () => cy.get('#password'),
      loginButton: () => cy.get('#login-button'),
      errorMessage: () => cy.get('h3[data-test="error"]')
  }

  introducirUsername(username){
    this.elements.usernameInput().should('be.visible').type(username)
  }

  introducirPassword(password){
    this.elements.passwordInput().should('be.visible').type(password)
  }

  loginClick(){
    this.elements.loginButton().should('be.visible').click({force:true})
  }

}

module.exports = new Login()