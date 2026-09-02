const puppeteer = require('puppeteer-core');
const path = require('path');

const dir = __dirname;
const items = [
  { html: 'poster-a-shanhui.html', png: 'poster-a-shanhui.png', width: 1080, height: 1350 },
  { html: 'poster-b-zhuhong.html', png: 'poster-b-zhuhong.png', width: 1080, height: 1350 },
  { html: 'poster-c-liubai.html',  png: 'poster-c-liubai.png', width: 1080, height: 1350 },
  { html: '../og-default.html',    png: '../og-default.png', width: 1200, height: 630 },
];

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
  for (const it of items) {
    const page = await browser.newPage();
    await page.setViewport({ width: it.width, height: it.height, deviceScaleFactor: 2 });
    await page.goto('file://' + path.join(dir, it.html), { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(dir, it.png), clip: { x: 0, y: 0, width: it.width, height: it.height } });
    console.log('已渲染:', it.png);
    await page.close();
  }
  await browser.close();
  console.log('全部完成');
})().catch(e => { console.error('渲染失败:', e); process.exit(1); });
