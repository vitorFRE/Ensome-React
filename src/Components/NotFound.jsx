import React from 'react';
import styles from './Notfound.module.css';
import { Link } from 'react-router-dom';
import Button from './Utils/Button';

const NotFound = () => {
  return (
    <div className={styles.not_found + ' container'}>
      <h1>404</h1>
      <h2 className="title-exbold-1">página não encontrada</h2>
      <Link to="/">
        <Button>Retornar</Button>
      </Link>
    </div>
  );
};

export default NotFound;
