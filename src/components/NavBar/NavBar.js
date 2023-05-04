import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Container className={styles.container}>
        <div className={styles.navigation}>
          <a href="http://localhost:3000/">
            <span className={styles.icon + ' fa fa-tasks'}></span>
          </a>
          <ul className={styles.list}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : styles.link
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : styles.link
                }
                to="/favorite"
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : styles.link
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
