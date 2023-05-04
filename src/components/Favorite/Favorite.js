import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  return (
    <div className={styles.hero}>
      <PageTitle children="Favorite" />
      <p>Lorem ipsum</p>
    </div>
  );
};

export default Favorite;
