import { elements as el } from "./elements"
class Login {
    visitPageLogin() {
        cy.visit('/')
    }
    validateHomePage() {
        cy.get(el.validateHome).should('be.visible')
    }
    openLoginForm() {
        cy.get(el.validateHome).click()
    }
    validateFormLogin() {
        cy.get(el.formLogin).should('be.visible')
    }

    LoginSuccessful() {
        cy.fixture('user.json').then((user) => {
            cy.get(el.inputEmail).type(user.email)
            cy.get(el.inputPassword).type(user.password)
            cy.get(el.btnLogin).click()
        })
    }
    validateLogin() {
        cy.get(el.btnSair).should('be.visible')
        cy.get(el.btnSair).click()
    }

    LoginErrorPassword() {
        cy.fixture('user.json').then((user) => {
            this.openLoginForm()
            cy.get(el.inputEmail).type(user.email)
            cy.get(el.inputPassword).type(user.passwordInvalid)
            cy.get(el.btnLogin).click()
        })

    }
    validateLoginErrorPassword() {
        cy.get(el.validateErrorLoginPassword).should('be.visible')
    }

    LoginErrorEmail() {
        cy.fixture('user.json').then((user) => {
            cy.get(el.validateHome).click()
            this.openLoginForm()
            cy.get(el.inputEmail).type(user.emailInvalid)
            cy.get(el.inputPassword).type(user.password)
            cy.get(el.btnLogin).click()
        })

    }
    validateLoginErrorEmail() {
        cy.get(el.validateErrorLoginEmail).should('be.visible')
    }

    LoginInvalidCPF() {
        cy.fixture('user.json').then((user) => {
            cy.get(el.validateHome).click()
            this.openLoginForm()
            cy.get(el.inputEmail).type(user.invalidCpf)
            cy.get(el.inputPassword).type(user.password)
            cy.get(el.btnLogin).click()
        })
    }

}
export default new Login()