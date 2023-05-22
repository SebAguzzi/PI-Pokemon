import { Link } from 'react-router-dom';
import style from './Card.module.css';


const Card = ({id, name, image, types}) => {
  return (
    <div className={style.card}>
      <div>
      <p><strong>{name}</strong></p>
      </div>
      <div>
      <Link to={`detail/${id}`}>
        <img src={image} alt="" />
        </Link>
      </div>
      <p>Types: {types}</p>
    </div>
  );
};

export default Card;
