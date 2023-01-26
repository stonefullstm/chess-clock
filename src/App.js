import { useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import Displays from './components/Displays';
import Players from './components/Players';

function App() {
  const [gameTime, setGameTime] = useState('00:30:00');
  const [whiteTime, setWhiteTime] = useState('00:30:00');
  const [blackTime, setBlackTime] = useState('00:30:00');

   return (
    <div className='page-body'>
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
        <Displays whiteTime={ whiteTime} blackTime = { blackTime } />
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
            onClick={ () => { setWhiteTime(gameTime); setBlackTime(gameTime)}}
          >
            Confirm
          </button>
        </div>
        <Controls />
        <p className='instruction'>Press SPACE to toggle player</p>
      </div>
    </div>
  );
}

export default App;
