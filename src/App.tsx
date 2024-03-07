import React from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import TubeStatusSection from './components/TubeStatusSection';
import './styles/main.scss';


const App = () => {
  return (
    <div>
      <Header />
      <div className="columns">
        <div className="column">
          <Weather />
        </div>
        <div className="column">
          <TubeStatusSection />
        </div>
      </div>
    </div>
  );
};




export default App;