const puppeteer = require("puppeteer");

async function puppet(url) {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    await page.goto(url);
    await page.setViewport({ width: 1280, height: 720 });

    await page.screenshot({ path: "test2.png" });

    // await browser.close();
};

puppet("https://example.com");











// https://www.amazon.com/stores/page/3057D85A-05B6-4C31-9541-BAA49DF37652?ingress=0&visitId=9a0dbc6f-2c86-4ef9-af89-b245eb11fff2&channel=discovbar%3Ffield-lbr_brands_browse-bin%3DAmazonBasics&ref_=nav_cs_amazonbasics