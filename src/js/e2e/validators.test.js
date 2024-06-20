// import {isValid} from '../validators';

// test('should be false if inn less than 10', () => {
//   const result = isValid('adgba');

//   expect(result).toBe(false)
// });

// test('should be false if inn more than 12', () => {
//   const result = isValid('1234567891232');

//   expect(result).toBe(false)
// })

import puppeteer from 'puppeteer';

describe('start', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('form shoul render on page', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('body')
  });

  afterAll(async () => {
    await browser.close();
  })
});