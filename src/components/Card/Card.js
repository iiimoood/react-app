import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { clsx } from 'clsx';

const Card = (props) => {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button
        className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}
        onClick={clickHandler}
      ></button>
    </li>
  );
};

export default Card;
