<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- Intro -->

# Puppeteer Amazon Basics Scrapper

This Puppeteer project is designed to scrape product information from Amazon Basics store page. 
This project was created as a test run of Puppeteer.js and demonstrates how Puppeteer can be used to automate web scraping tasks.

<p align="center">
  <a href="#demo">>> skip down to demo and results</a>
</p>

<br/>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installing-and-usage">Installing and Usage</a></li>
        <li><a href="#configuration">Configuration</a></li>
      </ul>
    </li>
    <li>
      <a href="#preventing-endless-execution-with-the-timeout-option">Preventing Endless Execution with the Timeout Option</a>
      <ul>
        <li><a href="#timeout">Timeout</a></li>
      </ul>
    </li>
    <li>
      <a href="#scrolling-behavior">Scrolling Behavior</a>
      <ul>
        <li><a href="#viewport">viewport</a></li>
        <li><a href="#while-loop">While Loop</a></li>
      </ul>
    </li>
    <li>
      <a href="#demo">Demo</a>
      <ul>
        <li><a href="#movie">Movie</a></li>
        <li><a href="#results">Results</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<br />

<!-- ABOUT THE PROJECT -->
## Getting Started

Instructions to get the copy of the project up and running on your local machine for development and testing purposes.

### Built With

* Puppeteer.js


### Prerequisites

Project requires Node.js and npm installed.

<br />

### Installing and Usage

To install dependencies, run the following command:

``` 
 npm install 
 ```

To run the script, use the following command:

``` 
 npm start 
 ```


### Configuration

The script was configured with the following options:

- `headless: false` - to display the browser's user interface. Determines whether to run the browser in headless mode.
- `userDataDir: './tmp'` - a temporary directory created to store user data for the browser instance.

To modify these options, edit the `puppeteer.launch()` method in `index.js`.

<br />

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Timeout Option -->
## Preventing Endless Execution with the Timeout Option

### Timeout

The script includes a timeout option that determines how long puppeteer will wait for the product items to load. If the scrapper does not find 100 items within the specified time, it will stop and output the number of items it found. By default, the timeout is set to 30 seconds.

To modify the timeout, edit the `timeout` variable in `script2.js`.

Note that increasing the timeout can increase the time it takes for the script to complete, while decreasing the timeout can increase the risk of the scrapper not finding all 100 items. The timeout value should be set based on the performance of the website being scraped and the speed of your internet connection.

<br />

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Scrolling Behavior

### Viewport

The Amazon Basics store page loads more items as you scroll down the page, rather than requiring a click to go to the next page. This <strong>webpage format</strong> may depend on the viewport size, which we set to a consistent value using the following code:
```
 await page.setViewport({ width: 1280, height: 720 });
```
By setting the viewport size to a fixed width and height, we can ensure that the <strong> webpage format </strong> stays consist throughout other machines and we can follow the  <strong> same method of scraping </strong> regardless of machine, by <em> scrolling down</em>.

<br />

### While Loop

To ensure that the script finds all 100 product items on the Amazon Basics store page, we use the following while loop. The loop scrolls down the page until 100 items have been loaded, or until the specified timeout has been reached.

```
 while(itemsLoaded < 100 && Date.now() - start < timeout) {
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
        });
        await page.waitForTimeout(1000); // wait 1 seconds for new items to load

        itemsLoaded = await page.$$eval(".ProductGridItem__image__ih70n", (items) => items.length);
 };
```

<br />

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- DEMO -->
## Demo

### Movie
Insert Movie File here

### Results
Insert photo of results here

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Michael Kim - [@LinkedIn](https://www.linkedin.com/in/michaelkim3/) - michael.dev.kim@gmail.com


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Michael Kitas](https://www.youtube.com/@MichaelKitas)
* [ChatGPT](https://chat.openai.com/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/michaelkim3/
