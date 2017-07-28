import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Number from './Number';

function Player({label, score, stars, profile}) {
    return (
      <div>
        <h1 className="header">{label}</h1>
        <h3 style={{textAlign: 'center'}}>Score: <Number value={score}/></h3>
        <Profile info={profile} stars={stars} /> 
      </div>
    );
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
}

export default Player;