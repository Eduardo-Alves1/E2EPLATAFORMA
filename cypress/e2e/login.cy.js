/// <reference types="cypress" />
import Login from '../pages/login/index.js'

describe('Login', () => {
    beforeEach(() => {

        //cy.wait(4000);
    })
    it('CT000 - Opening The Home Page', () => {
        //Action
        // Visit the login page
        Login.visitPageLogin()

        // Assert
        // Validate that the home page is visible
        Login.validateHomePage()
    })

    it('CT001 - Opening The Login Form', () => {
        //Action
        // Visit the login page
        Login.openLoginForm()

        // Assert
        // Validate that the login form is visible
        Login.validateFormLogin()

    })

    it('CT002 - Login successful', () => {

        //Action
        // Input the user credentials
        Login.LoginSuccessful()

        // Assert
        // Validate that the user is logged in
        Login.validateLogin()
    })

    it('CT003 - Login with invalid Password', () => {
        //Action
        // Input the user Invalid credentials
        Login.LoginErrorPassword()

        // Assert
        // Validate that the error message is visible
        Login.validateLoginErrorPassword()
    })

    it('CT004 - Login with invalid email', () => {
        //Action
        // Input the user Invalid credentials
        Login.LoginErrorEmail()

        // Assert
        // Validate that the error message is visible
        Login.validateLoginErrorEmail()
    })

    it('CT005 - Login with invalid CPF', () => {
        //Action
        // Input the CPF invalid
        Login.LoginInvalidCPF()

        // Assert
        // Validate that the error message is visible
        Login.validateInvalidCPF()
    })
});