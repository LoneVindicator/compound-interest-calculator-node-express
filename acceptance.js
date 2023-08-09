//Ensure Node index.js is running first

const { remote } = require('webdriverio');
const assert = require('assert');
var port = process.env.PORT || 3000;


let browser;

(async () => {
    browser = await remote({
        capabilities: {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['--headless'] // Use args to enable headless mode
            }
        },
 
    });

    await browser.navigateTo(`http://localhost:${port}/`)

    //Fill out Inputs
    const intialInvestmentInput = await browser.$('#initial-investment-input')
    await intialInvestmentInput.setValue(100)

    const interestRateInput = await browser.$('#initial-interest-rate-input')
    await interestRateInput.setValue(10)

    // const compoundFrequencyInput = await browser.$('#initial-compound-frequency-input')
    // await compoundFrequencyInput.setValue(1)

    const timeInput = await browser.$('#initial-time-input')
    await timeInput.setValue(10)

    //Click submit button

    const calculateBtn = await browser.$(".calculate-btn")
    await calculateBtn.click();

    const compoundInterest = await browser.$('.final-balance-content').getText();

    assert(compoundInterest === '$ 259.37');

    await browser.deleteSession();

})().catch((err) => {
    console.error(err);
    return browser.deleteSession();
})