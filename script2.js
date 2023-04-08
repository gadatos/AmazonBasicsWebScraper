const puppeteer = require("puppeteer");

async function puppet(url) {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    await page.goto(url);

    await page.setViewport({ width: 1280, height: 720 });
    // await browser.close();
};

puppet("https://www.amazon.com/stores/page/3057D85A-05B6-4C31-9541-BAA49DF37652?ingress=0&visitId=95aacdd7-2339-44bf-a3e7-54d80bf56901&channel=discovbar%3Ffield-lbr_brands_browse-bin%3DAmazonBasics&ref_=nav_cs_amazonbasics");