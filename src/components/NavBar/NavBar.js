import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <Container className={styles.navigation}>
        <span className={styles.icon + ' fa fa-tasks'}>
          <a href="http://localhost:3000/"></a>
        </span>
        <ul className={styles.list}>
          <li>
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li>
            <a href="http://localhost:3000/favorite">Favorite</a>
          </li>
          <li>
            <a href="http://localhost:3000/about">About</a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
