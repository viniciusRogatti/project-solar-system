import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <SolarSystem />
      </section>
    );
  }
}

export default App;
