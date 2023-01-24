import React from "react";
import pause from '../images/pause.png';
import play from '../images/play.png';
import stop from '../images/stop.png';

export default function Controls() {
  return (
    <div className="controls-content">
      <img src={ play } alt="" className="play-control"/>
      <img src={ pause } alt="" className="play-control"/>
      <img src={ stop } alt="" className="play-control"/>
    </div>
  )
}