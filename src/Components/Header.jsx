import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default Header;
