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

[Pinia.js]: https://img.shields.io/badge/PINIA.JS-blue.svg?logo=data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ3NyIgdmlld0JveD0iMCAwIDMxOSA0NzciIHdpZHRoPSIzMTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iYSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNTJjZTYzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTFhMjU2Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSI1NS4zNDIwNzUlIiB4Mj0iNDIuODE2OTMzJSIgeGxpbms6aHJlZj0iI2EiIHkxPSIwJSIgeTI9IjQyLjg2Mjg1NSUiLz48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSI1NS4zNDg2NDIlIiB4Mj0iNDIuODA4MTAzJSIgeGxpbms6aHJlZj0iI2EiIHkxPSIwJSIgeTI9IjQyLjg2Mjg1NSUiLz48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSIwJSIgeTI9IjU4LjgxMTI0MyUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhhZTk5YyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzUyY2U2MyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJlIiB4MT0iNTEuMzc3NjMlIiB4Mj0iNDQuNTg0NzE5JSIgeTE9IjE3LjQ3MjU1MSUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmU1NmMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmM2M2EiLz48L2xpbmVhckdyYWRpZW50PjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0IC0yNCkiPjxnIHRyYW5zZm9ybT0ibWF0cml4KC45OTI1NDYxNSAuMTIxODY5MzQgLS4xMjE4NjkzNCAuOTkyNTQ2MTUgMzMuOTIyMDczIC45NzY2OTEpIj48cGF0aCBkPSJtMTAzLjk1MDUzNSAyNTguMjc0MTQ5YzQ0LjM2MTU5OS00LjM2MDgyNSA2MC4wMTQ1MDMtNDAuMzkxMjgyIDY1LjM1MzA5NC05NC42OTk0NDRzLTMwLjkzMjE5LTEwMy40NTEwMDEtNDYuMDIwMzQ3LTEwMS45Njc4MDc5Yy0xNS4wODgxNTYgMS40ODMxOTMyLTYzLjAzODUzMTMgNTguOTA1MTIzOS02OC4zNzcxMjIyIDExMy4yMTMyODY5LTUuMzM4NTkwOCA1NC4zMDgxNjIgNC42ODI3NzU0IDg3LjgxNDc5MSA0OS4wNDQzNzUyIDgzLjQ1Mzk2NXoiIGZpbGw9InVybCgjYikiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcxMDY3OCAtLjcwNzEwNjc4IC43MDcxMDY3OCAuNzA3MTA2NzggLTgwLjQ5NjMzMiAxMjUuODkyOTQ0KSIvPjxwYXRoIGQ9Im0yNzUuODc2NzUyIDI1OC4yNzM5OTJjNDQuMzYxNiA0LjM2MDgyNiA1My4xNjcxMzMtMjkuMjY1MzIyIDQ3LjgyODU0Mi04My41NzM0ODUtNS4zMzg1OTEtNTQuMzA4MTYyLTUyLjA3MzEzMy0xMTEuNjEwNTc0NC02Ny4xNjEyOS0xMTMuMDkzNzY3NS0xNS4wODgxNTYtMS40ODMxOTMxLTUyLjU3NDc3IDQ3LjU0MDEyNzUtNDcuMjM2MTc5IDEwMS44NDgyODk1czIyLjIwNzMyOCA5MC40NTgxMzcgNjYuNTY4OTI3IDk0LjgxODk2M3oiIGZpbGw9InVybCgjYykiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcxMDY3OCAuNzA3MTA2NzggLS43MDcxMDY3OCAuNzA3MTA2NzggMTkxLjQwMzM5OSAtMTQxLjg2MTk2MykiLz48cGF0aCBkPSJtMTg4LjM3MDAyNyAyMTYuODc2MzA1YzM5Ljk0MTgzNCAwIDUwLjk1MjY1LTM4LjI1MTk4NyA1MC45NTI2NS05Ny44OTg3NCAwLTU5LjY0Njc1MzItMzcuMzY3NzMzLTExOC4xMDEyNTk1Ni01MC45NTI2NS0xMTguMTAxMjU5NTZzLTUyLjA0NzM1IDU4LjQ1NDUwNjM2LTUyLjA0NzM1IDExOC4xMDEyNTk1NmMwIDU5LjY0Njc1MyAxMi4xMDU1MTYgOTcuODk4NzQgNTIuMDQ3MzUgOTcuODk4NzR6IiBmaWxsPSJ1cmwoI2QpIi8+PC9nPjxwYXRoIGQ9Im0xODQuNDczNDczIDUwMWM4My4xMTg4NTQgMCAxNTAuNTI2NTI3LTI0LjE0NTE0OCAxNTAuNTI2NTI3LTEzMy42NDUxNDhzLTY3LjQwNzY3My0xOTkuMzU0ODUyLTE1MC41MjY1MjctMTk5LjM1NDg1MmMtODMuMTE4ODU1IDAtMTUwLjQ3MzQ3MyA4OS44NTQ4NTItMTUwLjQ3MzQ3MyAxOTkuMzU0ODUyczY3LjM1NDYxOCAxMzMuNjQ1MTQ4IDE1MC40NzM0NzMgMTMzLjY0NTE0OHoiIGZpbGw9InVybCgjZSkiLz48ZWxsaXBzZSBjeD0iMjYwLjUiIGN5PSIzMzUiIGZpbGw9IiNlYWFkY2MiIHJ4PSIyMS41IiByeT0iMTAiLz48ZWxsaXBzZSBjeD0iMTAyLjUiIGN5PSIzMjkiIGZpbGw9IiNlYWFkY2MiIHJ4PSIyMS41IiByeT0iMTAiIHRyYW5zZm9ybT0ibWF0cml4KC45OTI1NDYxNSAuMTIxODY5MzQgLS4xMjE4NjkzNCAuOTkyNTQ2MTUgNDAuODU5MDMzIC0xMC4wMzkyOTIpIi8+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLS45OTkzOTA4MyAuMDM0ODk5NSAuMDM0ODk5NSAuOTk5MzkwODMgMjY5LjI4NDgyNSAyNzEuMDI3NjY3KSI+PHBhdGggZD0ibTczLjEwNDY5ODUgNTguMjcyODc5NGM2LjczNzI0MTYgNC45MTMwMzMzIDE0LjMxMzI2MzIgNi42NjQwNTg3IDIyLjcyODA2NDkgNS4yNTMwNzYxIDguNDE0ODAxNi0xLjQxMDk4MjUgMTQuNTA1NDQ2Ni01LjI1MzU3NjkgMTguMjcxOTM0Ni0xMS41Mjc3ODMiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIHRyYW5zZm9ybT0ibWF0cml4KC45OTk4NDc3IC4wMTc0NTI0MSAtLjAxNzQ1MjQxIC45OTk4NDc3IDEuMDI2NDY0IC0xLjYyNDc5NCkiLz48cGF0aCBkPSJtMTU0LjUwMTEyNCAzYy01LjkzNzU0NSAwLTExLjMxMjc4MiAyLjQwNjI5ODA1LTE1LjIwMzY0NCA2LjI5NjgwNjIxLTMuODkwOTQgMy44OTA1ODUyOS02LjI5NzQ4IDkuMjY1NDU0NDktNi4yOTc0OCAxNS4yMDI2MzE3OSAwIDUuOTM3Njg4OCAyLjQwNjQ4OCAxMS4zMTI3NDIyIDYuMjk3MjkxIDE1LjIwMzQyNzIgMy44OTA4ODYgMy44OTA3NjczIDkuMjY2MTk3IDYuMjk3MTM0OCAxNS4yMDM4MzMgNi4yOTcxMzQ4IDUuOTM3MTA5IDAgMTEuMzExODk2LTIuNDA2Mzg4OSAxNS4yMDIzODctNi4yOTcyMzQ4IDMuODkwMjk5LTMuODkwNjUzNSA2LjI5NjQ4OS05LjI2NTY2MzYgNi4yOTY0ODktMTUuMjAzMzI3MiAwLTUuOTM3MTUyMS0yLjQwNjI0Mi0xMS4zMTE5NzgxLTYuMjk2Njc3LTE1LjIwMjUzMTgxLTMuODkwNDY5LTMuODkwNTg2NzQtOS4yNjUxODEtNi4yOTY5MDYxOS0xNS4yMDIxOTktNi4yOTY5MDYxOXoiIGZpbGw9IiMwMDAiIC8+PHBhdGggZD0ibTE1NCAyMWMwLTMuODY1NTQ5IDMuMTM1MzYyLTcgNi45OTk0MTMtNyAzLjg2NjM5OSAwIDcuMDAwNTg3IDMuMTM0NDUxIDcuMDAwNTg3IDdzLTMuMTM0MTg4IDctNy4wMDA1ODcgN2MtMy44NjQwNTEtLjAwMTE3MzUtNi45OTk0MTMtMy4xMzQ0NTEtNi45OTk0MTMtN3oiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMjQuNSAxM2MtNS45Mzc1MjkyIDAtMTEuMzEyNDI2IDIuNDA2MjY4LTE1LjIwMjk5NDI3IDYuMjk2NzE4MS0zLjg5MDY5NDY0IDMuODkwNTc2NS02LjI5NzAwNTczIDkuMjY1NDc2NS02LjI5NzAwNTczIDE1LjIwMjcxOTkgMCA1LjkzNzc1NDkgMi40MDYyNTk2MiAxMS4zMTI4MzkxIDYuMjk2ODE3NjYgMTUuMjAzNTE1MyAzLjg5MDU5MTA0IDMuODkwNzA5MiA5LjI2NTU2MTg0IDYuMjk3MDQ2NyAxNS4yMDMxODIzNCA2LjI5NzA0NjcgNS45MzcxMjQ5IDAgMTEuMzEyMjUxNC0yLjQwNjQxOSAxNS4yMDMwMzcxLTYuMjk3MzIyOSAzLjg5MDU0NDEtMy44OTA2NjIzIDYuMjk2OTYyOS05LjI2NTY0MTYgNi4yOTY5NjI5LTE1LjIwMzIzOTEgMC01LjkzNzA4Ni0yLjQwNjQ3MDMtMTEuMzExODgxMS02LjI5NzE1MS0xNS4yMDI0NDM3LTMuODkwNzYzLTMuODkwNjQ0OC05LjI2NTgxNTQtNi4yOTY5OTQzLTE1LjIwMjg0OS02LjI5Njk5NDN6IiBmaWxsPSIjMDAwIiAvPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im0xMzYgMjQuNDk5NDM4YzAgMTAuMjE4NTIzMiA4LjI4MjkxMSAxOC41MDA1NjIgMTguNTAxMTI0IDE4LjUwMDU2MiAxMC4yMTcwODkgMCAxOC40OTg4NzYtOC4yODIwMzg4IDE4LjQ5ODg3Ni0xOC41MDA1NjIgMC0xMC4yMTczOTkyLTguMjgxNzg3LTE4LjQ5OTQzOC0xOC40OTg4NzYtMTguNDk5NDM4LTEwLjIxODIxMyAwLTE4LjUwMTEyNCA4LjI4MjAzODgtMTguNTAxMTI0IDE4LjQ5OTQzOHptLTYgMGMwLTEzLjUzMTE5NTQgMTAuOTY5MjktMjQuNDk5NDM4IDI0LjUwMTEyNC0yNC40OTk0MzggMTMuNTMwODM4IDAgMjQuNDk4ODc2IDEwLjk2ODM3MTEgMjQuNDk4ODc2IDI0LjQ5OTQzOCAwIDEzLjUzMTk2MDctMTAuOTY3ODA4IDI0LjUwMDU2Mi0yNC40OTg4NzYgMjQuNTAwNTYyLTEzLjUzMjA2NCAwLTI0LjUwMTEyNC0xMC45Njg0NzI4LTI0LjUwMTEyNC0yNC41MDA1NjJ6IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0ibTYgMzQuNDk5NDM4YzAgMTAuMjE4NTIzMiA4LjI4MTc4NzMgMTguNTAwNTYyIDE4LjUgMTguNTAwNTYyIDEwLjIxNzA4ODkgMCAxOC41LTguMjgyMDM4OCAxOC41LTE4LjUwMDU2MiAwLTEwLjIxNzM5OTItOC4yODI5MTExLTE4LjQ5OTQzOC0xOC41LTE4LjQ5OTQzOC0xMC4yMTgyMTI3IDAtMTguNSA4LjI4MjAzODgtMTguNSAxOC40OTk0Mzh6bS02IDBjMC0xMy41MzEyOTcgMTAuOTY4MjY4MS0yNC40OTk0MzggMjQuNS0yNC40OTk0MzggMTMuNTMwOTM5OCAwIDI0LjUgMTAuOTY4NDcyOCAyNC41IDI0LjQ5OTQzOCAwIDEzLjUzMTg1OTEtMTAuOTY4ODMgMjQuNTAwNTYyLTI0LjUgMjQuNTAwNTYyLTEzLjUzMTk2MiAwLTI0LjUtMTAuOTY4MzcxMS0yNC41LTI0LjUwMDU2MnoiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJtMjQgMzFjMC0zLjg2NTU0OSAzLjEzNDQ1MS03IDctN3M3IDMuMTM0NDUxIDcgNy0zLjEzNDQ1MSA3LTcgNy03LTMuMTM0NDUxLTctN3oiLz48L2c+PC9nPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxMSI+PGcgc3Ryb2tlPSIjZWNiNzMyIj48cGF0aCBkPSJtNzAuNSAzNzcuNSA3NCA3NyIvPjxwYXRoIGQ9Im0xMzQuNSAzODYuNS00NyA1MCIvPjwvZz48ZyBzdHJva2U9IiNlY2I3MzIiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDI5OCAzNzcpIj48cGF0aCBkPSJtLjUuNSA3NCA3NyIvPjxwYXRoIGQ9Im02NC41IDkuNS00NyA1MCIvPjwvZz48ZyBzdHJva2U9IiNmZmM3M2IiIHRyYW5zZm9ybT0ibWF0cml4KDAgMSAtMSAwIDIxNSAyMDcpIj48cGF0aCBkPSJtLjUuNSA0OSA0OSIvPjxwYXRoIGQ9Im0uNSAxMC41IDQ5IDQ5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA1MCAwKSIvPjwvZz48L2c+PC9nPjwvc3ZnPgo=
[Pinia-url]: https://pinia.vuejs.org/
