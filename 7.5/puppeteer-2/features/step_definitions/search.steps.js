const { When, Then, Before, After, Given } = require("cucumber");
const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { getText, clickElement } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given('пользователь на странице {string}', async function (string) {
  return await this.page.goto(string);
});

Given('пользователь нажимает кнопку неделя', async function () {
  return await clickElement(this.page, "a:nth-child(2) > span.page-nav__day-week");
});

Given('пользователь нажимает кнопку фильм', async function () {
  await clickElement(this.page, "a.movie-seances__time");
});

When(
  "пользователь выбирает следующий день, {int} ряд и {int} место и нажимает кнопку Забронировать",
  async function (row, chair) {
    await clickElement(
      this.page,
      `div:nth-child(${row}) > span:nth-child(${chair})`
    );
    return await clickElement(this.page, "button.acceptin-button");
  }
);

Then(
  "пользователь видит страницу выбранным рядом и местом: {int}",
  async function (string) {
    const actual = await getText(this.page, ".ticket__chairs");
    const expected = string;
    expect(actual).contains(expected);
  }
);

When(
  "пользователь выбирает следующий день, {int} ряд и {int} место затем {int} ряд и {int} место и нажимает кнопку Забронировать",
  async function (row1, chair1, row2, chair2) {
    await clickElement(
      this.page,
      `div:nth-child(${row1}) > span:nth-child(${chair1})`
    );
    await clickElement(
      this.page,
      `div:nth-child(${row2}) > span:nth-child(${chair2})`
    );
    return await clickElement(this.page, "button.acceptin-button");
  }
);

Then(
  "пользователь видит страницу выбранным рядом и местом: {string}",
  async function (string) {
    const actual = await getText(this.page, ".ticket__chairs");
    const expected = string;
    expect(actual).contains(expected);
  }
);

When(
  "пользователь выбирает следующий день, на {string} место и нажимает кнопку Забронировать",
  async function (chair) {
    await clickElement(this.page, `div > .buying-scheme__chair_${chair}`);
    return await clickElement(this.page, "button.acceptin-button");
  }
);

Then("кнопка Забронировать недоступна", async function () {
  const actual = await this.page.$eval(".acceptin-button", (link) =>
    link.getAttribute("disabled")
  );
  expect(actual).equal("true");
});