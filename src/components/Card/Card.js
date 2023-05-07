import styles from './Card.module.scss';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import { clsx } from 'clsx';

const Card = (props) => {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  const deleteCard = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          className={clsx(styles.button, props.isFavorite && styles.isFavorite)}
          onClick={clickHandler}
        >
          <span className="fa fa-star-o"></span>
        </button>
        <button onClick={deleteCard} className={styles.button}>
          <span className="fa fa-trash"></span>
        </button>
      </div>
    </li>
  );
};

export default Card;
