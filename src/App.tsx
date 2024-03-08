import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Weather from './components/Weather';
import TubeStatusSection from './components/TubeStatusSection';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import './styles/main.scss';


const App = () => {
  return (
    <Router>
      <div className="header-gradient">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/"
            element={
              <div className="columns">
                <div className="column is-three-quarters">
                  <Weather />
                </div>
                <div className="column">
                  <TubeStatusSection />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;