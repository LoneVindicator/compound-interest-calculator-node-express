// //Ensure Node index.js is running first

// const { remote } = require('webdriverio');
// const assert = require('assert');
// var port = process.env.PORT || 3000;


// let browser;

// (async () => {
//     browser = await remote({
//         capabilities: {
//             browserName: 'firefox',
//             'moz:firefoxOptions': {
//                 args: ['--headless'] // Use args to enable headless mode
//             }
//         },
 
//     });

//     await browser.navigateTo(`http://localhost:${port}/`)

//     const intialInvestmentInput = await browser.$('#initial-investment-input');
//     await intialInvestmentInput.setValue(100);

//     const interestRateInput = await browser.$('#initial-interest-rate-input');
//     await interestRateInput.setValue(10);

//     const timeInput = await browser.$('#initial-time-input');
//     await timeInput.setValue(10);


//     const calculateBtn = await browser.$(".calculate-btn");
//     await calculateBtn.click();

//     const compoundInterest = await browser.$('.final-balance-content').getText();

//     assert(compoundInterest === '$ 259.37');

//     await browser.deleteSession();

// })().catch((err) => {
//     console.error(err);
//     return browser.deleteSession();
// })

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const port = process.env.PORT || 3000; // Use the provided port or default to 3000

  await page.goto(`http://localhost:${port}/`);

  const intialInvestmentInput = await page.$('#initial-investment-input');
  await intialInvestmentInput.type('100');

  const interestRateInput = await page.$('#initial-interest-rate-input');
  await interestRateInput.type('10');

  const timeInput = await page.$('#initial-time-input');
  await timeInput.type('10');

  const calculateBtn = await page.$('.calculate-btn');
  await calculateBtn.click();

  await page.waitForSelector('.final-balance-content');

  const compoundInterest = await page.$eval('.final-balance-content', element => element.textContent);

  if (compoundInterest.trim() === '$ 259.37') {
    console.log('Test Passed: Compound interest is $ 259.37');
  } else {
    console.error(`Test Failed: Expected '$ 259.37', but got '${compoundInterest.trim()}'`);
  }

  await browser.close();
})();
