import GameCard from './GameCard';
import './style.css';

function App() {
  return (
    <>
      <h1>Quick Steam Store</h1>

      <div className="gamelist">
        <GameCard />
      </div>
    </>
  );
}

export default App;