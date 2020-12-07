import './App.css';
import NavBar from './Components/NavBar';
import PokeList from './Components/pokeList';
import ScoreProvider from './Components/ScoreContext';
import GameStatus from './Components/GameStatus';

function App() {
  return (
    <ScoreProvider>
      <div className="App">
          <NavBar/>
          <PokeList />   
      
      </div>
    </ScoreProvider>  
  );
}

export default App;
