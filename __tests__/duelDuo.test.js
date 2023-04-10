const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get("http://localhost:8000");

});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.wait(until.titleIs("Duel Duo"));
  })

  test("Clicking the Draw button displays the div with the id of choices", async () => {
    await driver.findElement(By.id("draw")).click()
    await driver.findElement(By.id('choices'))
  })

  test("Clicking the Play Again button displays the button with id draw", async () => {
    await driver.findElement(By.id("draw")).click() 
    await driver.findElement(By.id("div#choices>div:nth-of-type(2)>button")).click()
    await driver.findElement(By.id("player-duo"))
  })
});