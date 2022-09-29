import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/logo.svg';
import logoblue from '../assets/logoblue.svg';

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <header className={styles.header + ' container'}>
      <Link className={styles.header_logo} to="/">
        <img src={mobileMenu ? logo : logoblue} alt="Logo ensome" />
      </Link>

      <nav>
        <button
          aria-label="Menu"
          className={`${mobileMenu && styles.activeButton} ${
            styles.mobile_button
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
        <ul
          className={`${mobileMenu && styles.activeMenu} ${styles.header_nav}`}
        >
          <li>
            <Link className={styles.nav_home + ' title-semi-7'} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.nav_home_a + ' title-medium-7'} to="/">
              Soluções
            </Link>
          </li>
          <li>
            <Link className={styles.nav_home_a + ' title-medium-7'} to="/">
              Páginas
            </Link>
          </li>
          <li>
            <Link className={styles.nav_home_a + ' title-medium-7'} to="/">
              Membros
            </Link>
          </li>
          <li>
            <Link className={styles.nav_home_a + ' title-medium-7'} to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link className={styles.nav_home_a + ' title-medium-7'} to="/">
              Contatos
            </Link>
          </li>
          <li>
            <div className={styles.header_button}>
              <button className="title-semi-7">Assista a demo</button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
