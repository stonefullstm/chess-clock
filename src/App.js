import './App.css';
import Controls from './components/Controls';
import Displays from './components/Displays';
import Players from './components/Players';

function App() {
  return (
    <div className='page-body'>
      <img
        className='background'
        src='chess-background.jpg'
        alt=""
      />
      {/* <div class="page-content"> */}
        <header>
          <p className='page-title'>Chess Clock</p>
        </header>
        <Players />
        <Displays />
        <Controls />
      {/* </div> */}
    </div>
  );
}

export default App;
