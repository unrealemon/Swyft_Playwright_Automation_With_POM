exports.LoginPage =
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator("input[name='email']");
        this.passwordInput = page.locator("input[name='password']");
        this.loginButton = page.locator("button[type='submit']");
    }

    async goToLoginPage() {
        await this.page.goto('https://dev.myswyftapp.com/login');
        await this.page.waitForTimeout(2000);
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.page.waitForTimeout(2000);
        await this.passwordInput.fill(password);
        await this.page.waitForTimeout(2000);
        await this.loginButton.click();
        await this.page.waitForTimeout(2000);
    }
}