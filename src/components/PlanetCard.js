import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">

        <img
          className={ `planet-info ${planetName}` }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p className="planet-info" data-testid="planet-name">
          { planetName }
        </p>

      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string,
  planetName: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetImage: '',
  planetName: '',
};

export default PlanetCard;
