const puppeteer = require('puppeteer');



async function start(){
const browser = await puppeteer.launch({ headless: false, slowMo: 10, });//{headless: false}
const page = await browser.newPage();
await page.setViewport({
    width: 1280,
    height: 1024,
    deviceScaleFactor: 1,
});
await page.goto('https://www.gtleagues.com/');

await page.waitForSelector('#kt_aside_menu > ul > li:nth-child(2) > a > span.menu-text', { timeout: 30000 });

await page.click('#kt_aside_menu > ul > li:nth-child(2) > a > span.menu-text');

// await page.type('#email', 'rco.automacao@gmail.com');
// await page.type('#senha', '2022061128Gi$');
//await page.mouse.click(450, 450);


await page.waitForSelector('.MuiTableBody-root', { timeout: 30000 });

getData(page, '.MuiTableBody-root');

//  await page.waitForSelector('.MuiTableBody-root', { timeout: 30000 });

//  const html = await page.$$('.MuiTableBody-root');

//  console.log(html);
// await page.click('.icon-notification-project');


// await page.click('body > div.page-simple-wrapper > header > div > div.header-logged-right > div.box-notificacoes-container > div.float-boxes > div.float-box-notificacao-projeto.float-box-container.show > div.float-box > a');
// await page.click('[checkbox]');

}


async function getData(page, selector){
   const data = await page.$$eval(selector, dados => dados.map(dado => dado.innerText)); 
   const myString = data[0];
   const myString2 = myString.split(' ');
   let myarray = myString2.split("\\");

   console.log(myarray);
//   const options = await page.$$eval(selector, (options) =>
//   options.map((option) => option.textContent)
// );
// console.log(options);
}
start();