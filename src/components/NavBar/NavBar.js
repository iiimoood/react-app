import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Container className={styles.navigation}>
        <span className={styles.icon + ' fa fa-tasks'}>
          <a href="http://localhost:3000/"></a>
        </span>
        <ul className={styles.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to="/favorite"
            >
              Favorite
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
