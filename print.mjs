import puppeteer from "puppeteer";
import fs from "fs/promises";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:5173/");

  const buf = await page.pdf({
    preferCSSPageSize: true,
  });

  await fs.writeFile("output.pdf", buf);

  await browser.close();
})();
