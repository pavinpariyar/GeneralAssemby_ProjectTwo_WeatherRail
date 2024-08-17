# Project Two - Weather Rail 🌡️🚇

![Weather Rail](https://api.netlify.com/api/v1/badges/08792cf9-5ea9-44be-a722-82260accddd3/deploy-status)](https://main--weatherrail.netlify.app/)

## Table of Contents

- [Project Two - Weather Rail 🚇☀️](#project-Two---weather-rail-️)
  - [Table of Contents](#table-of-contents)
  - [Description 📝](#description-)
  - [Features ✨](#features-)
  - [Tech Stack 🛠️](#tech-stack-️)
  - [Project Structure 🗂️](#project-structure-️)
  - [Installation 💻](#installation-)

## Description 📝

Weather Rail is a real-time platform providing up-to-date tube status and weather information for London. It features a user-friendly, responsive interface that ensures seamless access to essential data across devices. The application is built using React and TypeScript, with a design powered by Bulma CSS, and leverages APIs like Axios and Fetch for data handling.

## Features ✨

- Real-time tube 🚇 status updates from Transport for London (TFL).
- Current weather conditions 🌦 and a 5-day weather forecast 📅 powered by OpenWeatherMap.
- Responsive design 📱💻 for an optimal experience on desktop and mobile devices.
- User-friendly navigation facilitated by a custom-designed navbar 🧭.
- Dynamic CSS animations for a lively UI 💫.

## Tech Stack 🛠️
- React.js
- TypeScript
- Axios
- Bulma CSS
- React Router
- Fetch API

## Project Structure 🗂️

```plaintext
.
├── README.md
├── index.html
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Navbar.tsx
│   │   ├── TubeStatusSection.tsx
│   │   └── Weather.tsx
│   ├── pages
│   │   └── AboutUs.tsx
│   ├── services
│   │   ├── tubeApi.ts
│   │   └── weatherApi.ts
│   └── styles
│       └── main.scss
└── public
    └── _redirects

```

## Installation 💻

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone git@github.com:pavinpariyar/GeneralAssemby_ProjectTwo_WeatherRail.git
   cd <your-repository-folder>
   ```

2. **Install the dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run start
```

4. **Build the project for production:**

```bash
npm run build
```

