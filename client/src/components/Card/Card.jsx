import { Link } from 'react-router-dom';
import style from './Card.module.css';


const Card = ({id, name, image, types}) => {
  return (
    <div className={style.card}>
      <div>
      <Link to={`detail/${id}`}>{name}</Link>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
      <p>Types: {types}</p>
    </div>
  );
};

export default Card;
