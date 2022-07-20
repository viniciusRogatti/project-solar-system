import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const allPlanets = planets.map((e, index) => (
      <PlanetCard key={ index } planetName={ e.name } planetImage={ e.image } />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { allPlanets }
      </div>
    );
  }
}

export default SolarSystem;
