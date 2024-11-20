<a id="readme-top"></a>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li >eCommerce Coffee</li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">RoadMap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
  <h2>Weather Today</h2>
</div>

[![Welcome to Weather Today][product-screenshot]](#)

Weather Today gives users concise weather information at a glance for a selected city. 

This application uses data from simplemaps.com for a population of us-cities and openweathermap.org for weather and forecast data.  

Weather Today was developed using the popular Vue.js (v3) frontend framework along with PrimeVue for the UI components and Vue-Router for the pages. Pinia was used for state management. The excellent maps and weather modules are from maptiler.com. And, the weather icons came from vectorportal.com. Thanks to all of these sources !

I built this app to improve my Vue.js version 3 skills (applying the Composition API style). Also, I wanted to gain some experience working with Pinia stores and incorporating maps with Vue.js. 

[![Figma Screenshot][figma-screenshot]](#)

Before coding, I used Figma to design the page layouts. This activity was later helpful when I added mobile responsive components to pages.    

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![Vue][Vue.js]][Vue-url]
* [![Vue-Router][Vue-router.js]][Vue-Router-url]
* [![Pinia][Pinia.js]][Pinia-url]
* [![PrimeVue][PrimeVue.js]][PrimeVue-url]
* [![Vite][Vite.js]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

The below software packages need to be installed on your local machine prior to starting the application. 
* Node.js <br />
  Open a terminal and verify the version of Node.js on your local machine.
  ```sh
    node -v
  ```
  This repo was created using Node.js version 20.16. <br />You may consider updating your version of Node.js if your version is old.
  <br /> <br />
  For more information about installing Node.js, please refer to this link [https://nodejs.org/en/learn/getting-started/how-to-install-nodejs](hhttps://nodejs.org/en/learn/getting-started/how-to-install-nodejs) 

* npm (Node Package Manager)<br />
  Also verify the version of NPM that is installed on your machine  
  ```sh
    npm -v
  ```
  You can update npm to the latest version by using the following command:
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Verify that your local machine has the necessary prerequisites installed.
2. Open a terminal on your local machine and clone the github repo.
   ```sh
   git clone https://github.com/jeffkarr/weather-app.git
   ```
3. Using the open terminal, cd into the /weather-app folder.
4. Install NPM packages for the application.
   ```sh
   npm install
   ```
5. Using a code editor (Visual Studio Code is a good one), navigate to the 
  /weather-app folder and create a .env file.
6. Visit the OpenWeather website, create a new free account, and obtain a
  APPID. For more information about this, please refer to this link <br>
  [https://openweathermap.org/appid](https://openweathermap.org/appid)  
7. Visit the maptiler website, create a free account, obtain an API Key. 
  You might want to read the documentation about the Maps Platform and also the Weather Visualization modules. 
  For more information about this, please refer to this link <br>
    [https://www.maptiler.com/](https://www.maptiler.com/) 
8. Paste the following env vars into the newly created .env file. Populate your
  unique values for each of the API variables.  
  NOTE: This application uses a .gitignore file that will exclude your .env file from being pushed to your GitHub repository. It is important to keep your API keys confidential. This application uses an npm package called dotenv that loads the contents of the .env file into the process.env javascript runtime environment (so your app can access the secret vars).
    ```sh
      VITE_OPENWEATHERMAP_API_URL="<your openweathermap API url>"

      VITE_WEATHER_API_APPID="<your openweathermap APPID>"

      VITE_MAPTILER_APIKEY="<your maptiler API Key here>"
    ```
9. In the open terminal, type "npm run dev". <br />
  This will start the development web server for the application. 
10. Open a web browser and type "http://localhost:5173" in the browser's
  address bar to view the running application. <br />
11. When you are done with development, go to the open terminal and type "npm run build". 
  This process will compile the html, javascript and css into files that run directly in the browser.  
  For more information about this, please refer to this link <br>
    [Vue Build Command](https://www.w3schools.com/vue/vue_build.php#:~:text=The%20build%20command%20compiles%20our,run%20directly%20in%20the%20browser.)  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Add weather map animations for radar, temperature and wind layers.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](/LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Jeff Karr @ LinkedIn.com - [https://www.linkedin.com/in/jeffrey-a-karr/](https://www.linkedin.com/in/jeffrey-a-karr/) 

Project Link: [https://github.com/jeffkarr/weather-app](https://github.com/jeffkarr/weather-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [Vue.js](https://vuejs.org/)
* [PrimeVue](https://primevue.org/)
* [OpenWeather](https://openweathermap.org/api)
* [maptiler](https://www.maptiler.com/)
* [Img Shields](https://shields.io)
* [simplemaps](https://simplemaps.com/)
* [VectorPortal](https://vectorportal.com/)
* [W3Schools](https://www.w3schools.com/default.asp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[forks-shield]: https://img.shields.io/github/forks/jeffkarr/weather-app.svg?style=for-the-badge
[forks-url]: https://github.com/jeffkarr/weather-app/forks
[stars-shield]: https://img.shields.io/github/stars/jeffkarr/weather-app.svg?style=for-the-badge
[stars-url]: https://github.com/jeffkarr/weather-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/jeffkarr/weather-app.svg?style=for-the-badge
[issues-url]: https://github.com/jeffkarr/weather-app/issues
[license-shield]: https://img.shields.io/github/license/jeffkarr/weather-app.svg?style=for-the-badge
[license-url]: https://github.com/jeffkarr/weather-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jeffrey-a-karr/
[product-screenshot]: /public/images/weather_today_575x400.png
[figma-screenshot]: /public/images/figma_screenshot.png

[mit-license]: /LICENSE

[Vue.js]: https://img.shields.io/badge/Vue.js-00B300?style=for-the-badge&logo=vuedotjs&logoColor=61DAFB
[Vue-url]: https://vuejs.org/

[Vue-Router.js]: https://img.shields.io/badge/vue--router.js-563D7C?style=for-the-badge&logo=vuedotjs&logoColor=#CA4245
[Vue-Router-url]: https://router.vuejs.org/

[PrimeVue.js]: https://img.shields.io/badge/PrimeVue.js-35495E?style=for-the-badge&logo=primevue&logoColor=4FC08D
[PrimeVue-url]: https://primevue.org/

[Vite.js]: https://img.shields.io/badge/Vite.js-A257FF?style=for-the-badge&logo=vite&logoColor=yellow
[Vite-url]: https://vitejs.dev/

[Pinia.js]: https://img.shields.io/badge/PINIA.JS-20B2AA?style=for-the-badge
[Pinia-url]: https://pinia.vuejs.org/