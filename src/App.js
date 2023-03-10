import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends Component {
  render() {
    return (
      <section className="App">
        <Header />
        <SolarSystem />
        <Missions />
      </section>
    );
  }
}

export default App;
