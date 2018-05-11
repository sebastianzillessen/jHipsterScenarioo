import {by, element, ElementFinder} from 'protractor';

let scenarioo = require('scenarioo-js');
function stepAnnotation() {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            let stepDescription = `${target.constructor.name}: ${propertyKey}`;

            scenarioo.saveStep(stepDescription);

            const result = originalMethod.apply(this, args);

            return result;
        };

        return descriptor;
    }
}

export class NavBarPage {
    entityMenu = element(by.id('entity-menu'));
    accountMenu = element(by.id('account-menu'));
    adminMenu: ElementFinder;
    signIn = element(by.id('login'));
    register = element(by.css('[routerLink="register"]'));
    signOut = element(by.id('logout'));
    passwordMenu = element(by.css('[routerLink="password"]'));
    settingsMenu = element(by.css('[routerLink="settings"]'));

    constructor(asAdmin?: Boolean) {
        if (asAdmin) {
            this.adminMenu = element(by.id('admin-menu'));
        }
    }

    @stepAnnotation()
    clickOnEntityMenu() {
        return this.entityMenu.click();
    }

    @stepAnnotation()
    clickOnAccountMenu() {
        return this.accountMenu.click();
    }

    @stepAnnotation()
    clickOnAdminMenu() {
        return this.adminMenu.click();
    }

    @stepAnnotation()
    clickOnSignIn() {
        return this.signIn.click();
    }

    @stepAnnotation()
    clickOnRegister() {
        return this.signIn.click();
    }

    @stepAnnotation()
    clickOnSignOut() {
        return this.signOut.click();
    }

    @stepAnnotation()
    clickOnPasswordMenu() {
        return this.passwordMenu.click();
    }

    @stepAnnotation()
    clickOnSettingsMenu() {
        return this.settingsMenu.click();
    }

    @stepAnnotation()
    clickOnEntity(entityName: string) {
        return element(by.css('[routerLink="' + entityName + '"]')).click();
    }

    @stepAnnotation()
    clickOnAdmin(entityName: string) {
        return element(by.css('[routerLink="' + entityName + '"]')).click();
    }

    @stepAnnotation()
    getSignInPage() {
        this.clickOnAccountMenu();
        this.clickOnSignIn();
        return new SignInPage();
    }

    @stepAnnotation()
    getPasswordPage() {
        this.clickOnAccountMenu();
        this.clickOnPasswordMenu();
        return new PasswordPage();
    }

    @stepAnnotation()
    getSettingsPage() {
        this.clickOnAccountMenu();
        this.clickOnSettingsMenu();
        return new SettingsPage();
    }

    @stepAnnotation()
    goToEntity(entityName: string) {
        this.clickOnEntityMenu();
        return this.clickOnEntity(entityName);
    }

    @stepAnnotation()
    goToSignInPage() {
        this.clickOnAccountMenu();
        this.clickOnSignIn();
    }

    @stepAnnotation()
    goToPasswordMenu() {
        this.clickOnAccountMenu();
        this.clickOnPasswordMenu();
    }

    @stepAnnotation()
    autoSignOut() {
        this.clickOnAccountMenu();
        this.clickOnSignOut();
    }
}

export class SignInPage {
    username = element(by.id('username'));
    password = element(by.id('password'));
    loginButton = element(by.css('button[type=submit]'));

    setUserName(username) {
        this.username.sendKeys(username);
    }

    getUserName() {
        return this.username.getAttribute('value');
    }

    clearUserName() {
        this.username.clear();
    }

    setPassword(password) {
        this.password.sendKeys(password);
    }

    getPassword() {
        return this.password.getAttribute('value');
    }

    clearPassword() {
        this.password.clear();
    }

    @stepAnnotation()
    autoSignInUsing(username: string, password: string) {
        this.setUserName(username);
        this.setPassword(password);
        return this.login();
    }

    @stepAnnotation()
    login() {
        return this.loginButton.click();
    }
}
export class PasswordPage {
    password = element(by.id('password'));
    confirmPassword = element(by.id('confirmPassword'));
    saveButton = element(by.css('button[type=submit]'));
    title = element.all(by.css('h2')).first();

    setPassword(password) {
        this.password.sendKeys(password);
    }

    getPassword() {
        return this.password.getAttribute('value');
    }

    clearPassword() {
        this.password.clear();
    }

    setConfirmPassword(confirmPassword) {
        this.confirmPassword.sendKeys(confirmPassword);
    }

    getConfirmPassword() {
        return this.confirmPassword.getAttribute('value');
    }

    clearConfirmPassword() {
        this.confirmPassword.clear();
    }

    getTitle() {
        return this.title.getText();
    }

    @stepAnnotation()
    save() {
        return this.saveButton.click();
    }
}

export class SettingsPage {
    firstName = element(by.id('firstName'));
    lastName = element(by.id('lastName'));
    email = element(by.id('email'));
    saveButton = element(by.css('button[type=submit]'));
    title = element.all(by.css('h2')).first();

    @stepAnnotation()
    setFirstName(firstName) {
        this.firstName.sendKeys(firstName);
    }

    getFirstName() {
        return this.firstName.getAttribute('value');
    }

    @stepAnnotation()
    clearFirstName() {
        this.firstName.clear();
    }

    @stepAnnotation()
    setLastName(lastName) {
        this.lastName.sendKeys(lastName);
    }

    getLastName() {
        return this.lastName.getAttribute('value');
    }

    @stepAnnotation()
    clearLastName() {
        this.lastName.clear();
    }

    @stepAnnotation()
    setEmail(email) {
        this.email.sendKeys(email);
    }

    getEmail() {
        return this.email.getAttribute('value');
    }

    @stepAnnotation()
    clearEmail() {
        this.email.clear();
    }

    getTitle() {
        return this.title.getText();
    }

    @stepAnnotation()
    save() {
        return this.saveButton.click();
    }
}
