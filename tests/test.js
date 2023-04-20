const { Builder, By, until } = require("selenium-webdriver");
const assert = require("chai").assert;

describe("Login Tests", async function () {
  let driver;

// Antes de cada teste, o navegador será inicializado e a página do Airbnb será carregada
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://airbnb.com");
    await driver.manage().window().maximize();
    await driver.sleep(3000);
  });

// Após cada teste, o driver será encerrado
  afterEach(async function () {
    //await driver.quit();
  });

  it("Buscar Reserva", async function () {
// Encontrando o campo de ativar a busca
    const campoAtivarbusca = await driver.findElement(By.css(".ffc0w66:nth-child(2) > .f19g2zq0"));
    await campoAtivarbusca.click();
    await driver.sleep(3000);
  
// Encontrando o campo de localização e inserindo "Rio de Janeiro"
    const campoLugar = await driver.wait(until.elementLocated(By.className("ivycze5 dir dir-ltr")), 20000);
    await campoLugar.sendKeys("Rio de Janeiro");
    await driver.sleep(3000);
    
// Encontrando o campo de check-in e clicando nele
    const campoCheckin = await driver.wait(until.elementLocated(By.css(".chdozwg > .c2frgdd:nth-child(1) .c11if3v5")), 10000);
    await campoCheckin.click();
    await driver.sleep(3000);


  });


});

