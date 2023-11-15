import GameCard from './GameCard';
import './style.css';
import { games } from './data';

function App() {
  return (
    <>
      <h1>Quick Steam Store</h1>

      <div className="gamelist">
        {games.map((game) => (
          <GameCard
            key={game.id}
            image={game.image}
            title={game.title}
            rating={game.rating}
            price={game.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;