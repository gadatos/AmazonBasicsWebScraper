# Puppeteer Amazon Basics Scrapper

This Puppeteer project is designed to scrape product information from Amazon Basics store page. This project was created as a test run of puppeteer.js.

<Skip down to Demo and results>

## Getting Started

Requires Node.js and npm installed.

### Installing and Usage

To install dependencies, run

``` npm install ```

To run puppeteer scrip, use 

``` npm start ```

The script will luanch a new browser instance, navigate to the Amazon Basics store page, and extract the names of the first 100 products it finds. The product names will be output to console.

### Configuration 

The script was configured with the following options:

headless: false - to display browser's user interfaceWhether to run the browser in headless mode.

userDataDir: Created a temp directory to store user data for the browser instance. Route is "./tmp".


To modify these options, edit the puppeteer.launch() method in index.js.

## Preventing Endless Execution with the Timeout Option

### Timeout
The scrapper includes a timeout option that determines how long the scrapper will wait for the product items to load. If the scrapper does not find 100 items within the specified time, it will stop and output the number of items it found. By default, the timeout is set to 30 seconds.

To modify the timeout, edit the timeout variable in script2.js.

Note that increasing the timeout can increase the time it takes for the scrapper to complete, while decreasing the timeout can increase the risk of the scrapper not finding all 100 items. The timeout value should be set based on the performance of the website being scraped and the speed of your internet 



## Demo and results

<hr />

starting off with this <br />
tutorial: https://www.youtube.com/@MichaelKitas


https://www.youtube.com/watch?v=URGkzNC-Nwo&list=PLuJJZ-W1NwdqgvE0D-1SMS7EpWIC5cKqu&index=1
