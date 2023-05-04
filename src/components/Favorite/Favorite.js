import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);
  if (favoriteCards.length === 0)
    return (
      <div className={styles.hero}>
        <PageTitle children="NO FAVORITE CARDS" />
      </div>
    );

  return (
    <div className={styles.hero}>
      <PageTitle children="Favorite" />
      <article className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Favorite;
