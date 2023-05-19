interface GameCardProps {
  title: string;
  rating: number;
  price: number;
  image: string;
}

const GameCard = (props: GameCardProps) => {
  return (
    <div className="gamecard">
      <div className="gamecard__image">
        <img
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="gamecard__info">
        <h2 className="gamecard__title">{props.title}</h2>
        <h4 className="gamecard__rating">{props.rating} / 5</h4>
        <div className="gamecard__price">${props.price}</div>
        <div className="gamecard__button">
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
