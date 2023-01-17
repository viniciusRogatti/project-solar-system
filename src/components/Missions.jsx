import React, { Component } from 'react';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import Title from './Title';

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
      <div className="container-missions">
        <Title headline="Missões" />
        {allMissions}
      </div>
    );
  }
}

export default Missions;
