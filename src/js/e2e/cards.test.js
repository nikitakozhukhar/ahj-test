import puppeteer from 'puppeteer';
jest.setTimeout(30000);

describe('cards and form', () => {
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

  test('cards image should render on page start', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('img')
  });

  test('form input should add .valid class if card number is valid', async () => {
    
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.form-container');

    const form = await page.$('.form-container');
    const input = await form.$('.input-field');
    const submit = await form.$('.validate-button');

    await input.type('4716667526454668');
    await submit.click();

    await page.waitForSelector('.valid');
  });

  test('cards image should render on page start', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('img')
  });

  afterEach(async () => {
    await browser.close();
  })
});