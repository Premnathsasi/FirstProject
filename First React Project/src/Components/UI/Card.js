import './Card.css';


const Card = (prop) => {
    return  <div className={`card ${prop.className}`}>{prop.children}</div>
};

export default Card;