# Project 2 - Weather Rail 🚇☀️

![Weather Rail](https://api.netlify.com/api/v1/badges/08792cf9-5ea9-44be-a722-82260accddd3/deploy-status)](https://app.netlify.com/sites/weatherrail/deploys)](https://main--weatherrail.netlify.app/)

## Table of Contents

- [Project 2 - Weather Rail 🚇☀️](#project-2---weather-rail-️)
  - [Table of Contents](#table-of-contents)
  - [Description 📝](#description-)
  - [Features ✨](#features-)
  - [Tech Stack 🛠️](#tech-stack-️)
  - [Project Structure 🗂️](#project-structure-️)
  - [Installation 💻](#installation-)

## Description 📝

This React application provides real-time 🕒 tube status and weather 🌤 information for London. It's designed with a clean and user-friendly interface, making it easy for users to access the data they need.

## Features ✨

- Real-time tube 🚇 status updates from Transport for London (TFL).
- Current weather conditions 🌦 and a 5-day weather forecast 📅 powered by OpenWeatherMap.
- Responsive design 📱💻 for an optimal experience on desktop and mobile devices.
- User-friendly navigation facilitated by a custom-designed navbar 🧭.
- Dynamic CSS animations for a lively UI 💫.

## Tech Stack 🛠️

![React](https://reactjs.org/logo-og.png) **React** - A JavaScript library for building user interfaces.

![TypeScript](https://www.typescriptlang.org/icons/icon-48x48.png) 
**TypeScript** - A typed superset of JavaScript, enhancing the development experience.

**Axios** - A promise-based HTTP client for browser and Node.js.

![Bulma](https://bulma.io/images/bulma-logo.png) **Bulma CSS** - A modern CSS framework based on Flexbox.

 **React Router** - A collection of navigational components for React apps.

**Fetch API** - A modern interface for HTTP requests in JavaScript.



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
git clone git@github.com:pavinpariyar/project-2.git
```

2. **Start the development server:**

```bash
npm run start
```

3. **Build the project for production:**

```bash
npm run build
```