import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage, planetInfo } = this.props;
    return (
      <div className="Card-Planets" data-testid="planet-card">
        <img className="Planets" src={ planetImage } alt={ `Planeta ${planetName}` } />
        <h1 className={ `Card-Planets-title ${planetName}` } data-testid="planet-name">
          { planetName }
        </h1>
        <p className={ `Card-Info ${planetName}` }>
          { planetInfo }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  planetInfo: PropTypes.string.isRequired,
};

export default PlanetCard;
