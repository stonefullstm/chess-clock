import { useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import Displays from './components/Displays';
import Players from './components/Players';
import { timeToSeconds } from './utils';

function App() {
  const [gameTime, setGameTime] = useState('00:30:00');
  const [whiteTime, setWhiteTime] = useState(1800);
  const [blackTime, setBlackTime] = useState(1800);
  const [startedGame, setStartedGame] = useState(false);
  const [player, setPlayer] = useState('white');
  
  const handleKey = (event) => {
    const newPlayer = player === 'white' ? 'black' : 'white';
    setPlayer(newPlayer);
  }

    return (
    <div className='page-body'
      onKeyDown={ (e) => handleKey(e) }
      tabIndex='0'
    >
      <img
        className='background'
        src='chess-background.jpg'
        alt=""
      />
      <div class="page-content">
        <header>
          <p className='page-title'>Chess Clock</p>
        </header>
        <Players />
        <Displays 
          whiteTime={ whiteTime} 
          blackTime = { blackTime }
          player = { player } 
        />
        <div className='game-time'>
          <label className='time-input'>
            Game time:
            <input 
              type='time' 
              step='1'
              name='timeInput'
              value={ gameTime }    
              onChange={ ({ target }) => setGameTime(target.value) }          
              />
          </label>
          <button
            onClick={ () => { 
              setWhiteTime(timeToSeconds(gameTime)); 
              setBlackTime(timeToSeconds(gameTime));
              setPlayer('white');
            } }
            disabled={ startedGame }
          >
            Confirm
          </button>
        </div>
        <Controls
          setStartedGame = { setStartedGame }
        />
        <p 
          className='instruction'
          >
          Press SPACE to toggle player
        </p>
      </div>
    </div>
  );
}

export default App;
