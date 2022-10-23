import React from 'react';
import Button from '../Utils/Button';
import styles from './SobreSolutions.module.css';

const SobreSolutions = () => {
  return (
    <div className={styles.sobreS + ' container'}>
      <div className={styles.sobreS_title}>
        <h1 className="title-exbold-3">
          A tecnologia permite que as empresas extraiam o real valor comercial
          de uma grande quantidade de dados.
        </h1>
      </div>

      <div className={styles.sobreS_para}>
        <p className="para-regular-1">
          Phasellus tristique eu nisl eu consectetur. Morbi urna massa,
          imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
          tincidunt aliquam ligula.
        </p>
        <div className={styles.sobreS_btns}>
          <Button>Preços</Button>
          <button className={styles.SobreS_button}>Contate</button>
        </div>
      </div>
    </div>
  );
};

export default SobreSolutions;
