const puppeteer = require("puppeteer");

(async () => {

    // Launch a new browser instance
    console.log("launching browser"); // console.log
    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: "./tmp",
    });
    
    // Create a new page instance
    console.log("creating page"); // console.log
    const page = await browser.newPage();

    // Navigate to the Amazon Basics URL
    console.log("amazon"); // console.log
    await page.goto("https://www.amazon.com/stores/page/3057D85A-05B6-4C31-9541-BAA49DF37652?ingress=0&visitId=95aacdd7-2339-44bf-a3e7-54d80bf56901&channel=discovbar%3Ffield-lbr_brands_browse-bin%3DAmazonBasics&ref_=nav_cs_amazonbasics");

    // Set Viewport of page
    console.log("viewport"); // console.log
    await page.setViewport({ width: 1280, height: 720 });

    // Wait for the product items to load
    console.log("waitFor 100 items"); // console.log
    const timeout = 30000; // 30 second timeout
    // const timeout = 2000; // 2 second timeout - test
    const start = Date.now(); // current millisecond
    let itemsLoaded = 0;

    while(itemsLoaded < 100 && Date.now() - start < timeout) {
        console.log("inside while() page.evalute()");
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
        });
        await page.waitForTimeout(1500); // wait 1.5 seconds for new items to load

        console.log("about to await page.$$eval");
        itemsLoaded = await page.$$eval(".ProductGridItem__image__ih70n", (items) => items.length);
        console.log(`Loaded ${itemsLoaded} items so far...`);
    };
    if(itemsLoaded < 100){
        console.log(`Only loaded ${itemsLoaded} before timeout of ${timeout / 1000} seconds`)
    };

    // Find all of the product items on the page
    console.log("find all products"); // console.log
    const products = await page.$$(".ProductGridItem__image__ih70n");
    console.log(products.length);
   

    console.log("start loop");
    for(const singleProduct of products){
        const nameElement = await singleProduct.$(".ProductGridItem__image__ih70n img");
        const name = await page.evaluate((nameElement) => nameElement.getAttribute("alt"), nameElement)

        console.log(name); // console.log
    };

    console.log("end loop");
    // await browser.close();
})();