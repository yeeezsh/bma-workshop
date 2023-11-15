const GameCard = () => {
    return (
      <div className="gamecard">
        <div className="gamecard__image">
          <img
            src="https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg" alt="Dota 2" />
        </div>
        <div className="gamecard__info">
          <h2 className="gamecard__title">Dota 2</h2>
          <h4 className="gamecard__rating">1 / 5</h4>
          <div className="gamecard__price">$39.99</div>
          <div className="gamecard__button"><button>Buy</button></div>
        </div>
      </div>
    );
  };
  
  export default GameCard;