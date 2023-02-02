import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";

const pages = {
  login: LoginPage,
};

Given(/^this is me$/, () => {
  expect(true).toBe(true);
});

Given(/^this is the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
