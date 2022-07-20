import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    const allMissions = missions.map((e, index) => (
      <MissionCard
        key={ index }
        name={ e.name }
        year={ e.year }
        country={ e.country }
        destination={ e.destination }
      />
    ));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {allMissions}
      </div>
    );
  }
}

export default Missions;
