import PropTypes from 'prop-types';
import React, { useEffect } from "react";
import { secondsToTime } from '../utils';

export default function Displays({ whiteTime, blackTime, player }) {

  useEffect(() => {

  },[])
  
  return (
    <div className="displays-content">
      <div 
        className="white-display"
        style= { player === 'white' ? { border: '5px solid green' } : { border: '5px solid white' }}
      >
        <p className="display">{ secondsToTime(whiteTime) }</p>
      </div>
      <div 
        className="black-display"
        style= { player === 'black' ? { border: '5px solid green' } : { border: '5px solid white' }}
      >
      <p className="display">{ secondsToTime(blackTime) }</p>
      </div>
    </div>
  )
}

Displays.propTypes = {
  whiteTime: PropTypes.string.isRequired,
  blackTime: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
}
