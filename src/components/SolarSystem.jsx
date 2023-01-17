import React from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const allPlanets = planets.map((e, index) => (
      <PlanetCard
        key={ index }
        planetName={ e.name }
        planetImage={ e.image }
        planetInfo={ e.info }
      />
    ));
    return (
      <main className="Container" data-testid="solar-system">
        { allPlanets }
      </main>
    );
  }
}

export default SolarSystem;
