import PropTypes from 'prop-types';
import React from "react";
import pause from '../images/pause.png';
import play from '../images/play.png';
import stop from '../images/stop.png';

export default function Controls({setStartedGame }) {
  return (
    <div className="controls-content">
      <img 
        src={ play } 
        alt=""
        onClick={ () => setStartedGame(true) } 
        className="play-control"
      />
      <img 
        src={ pause } 
        alt=""
        className="play-control"
      />
      <img 
        src={ stop } 
        alt="" 
        onClick={ () => setStartedGame(false)}
        className="play-control"
      />
    </div>
  )
}

Controls.propTypes = {
  setStartedGame: PropTypes.func.isRequired,
}
