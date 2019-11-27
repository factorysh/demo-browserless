const {By, Builder, Capabilities} = require('selenium-webdriver');
const fs = require('fs');
const {expect} = require('chai');

const chromeCapabilities = Capabilities.chrome();
chromeCapabilities.set(
    'chromeOptions', {
        args: [
            '--headless',
            '--no-sandbox',
        ],
    }
);

const driver = new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .usingServer('http://browserless:3000/webdriver') // <-- Apply usingServer and that's it
    .build();

describe('title', function() {
    it('should be hello', async function() {
        await driver.get('http://web:8000');
        const title = await driver.findElement(By.css('h1.title'))
        expect(await title.getText()).to.include("Hello");
    })
});

