import PropTypes from 'prop-types';
import React from "react";

export default function Displays({ whiteTime, blackTime }) {
  return (
    <div className="displays-content">
      <div className="player-display">
        <p className="display">{ whiteTime }</p>
      </div>
      <div className="player-display">
      <p className="display">{ blackTime }</p>
      </div>
    </div>
  )
}

Displays.propTypes = {
  whiteTime: PropTypes.string.isRequired,
  blackTime: PropTypes.string.isRequired,
}
