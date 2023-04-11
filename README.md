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
      <a href="#getting-started">Getting Start</a>
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



<!-- ABOUT THE PROJECT -->
## Getting Started

Instructions to get the copy of the project up and running on your local machine for development and testing purposes.

#### Built With

* Puppeteer.js


#### Prerequisites

Project requires Node.js and npm installed.

<br />

#### Installing and Usage

To install dependencies, run the following command:

``` 
 npm install 
 ```

To run the script, use the following command:

``` 
 npm start 
 ```

<br />

#### Configuration

The script was configured with the following options:

- `headless: false` - to display the browser's user interface. Determines whether to run the browser in headless mode.
- `userDataDir: './tmp'` - a temporary directory created to store user data for the browser instance.

To modify these options, edit the `puppeteer.launch()` method in `index.js`.

<br />

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Timeout Option -->
## Preventing Endless Execution with the Timeout Option

#### Timeout

The scrapper includes a timeout option that determines how long the scrapper will wait for the product items to load. If the scrapper does not find 100 items within the specified time, it will stop and output the number of items it found. By default, the timeout is set to 30 seconds.

To modify the timeout, edit the `timeout` variable in `script2.js`.

Note that increasing the timeout can increase the time it takes for the scrapper to complete, while decreasing the timeout can increase the risk of the scrapper not finding all 100 items. The timeout value should be set based on the performance of the website being scraped and the speed of your internet connection.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- DEMO -->
## Demo

#### Movie
Insert Movie File here

#### Results
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