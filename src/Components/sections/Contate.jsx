import React from 'react';
import styles from './Contate.module.css';
import Button from '../Utils/Button';

const Contate = () => {
  return (
    <section className={styles.contate_bg}>
      <div className={styles.contate + ' container'}>
        <div className={styles.contate_text}>
          <h1 className={styles.contate_text_title + ' title-exbold-2'}>
            Ficou com duvidas? Contacte-nos agora para uma consulta gratuita!
          </h1>
          <p className={styles.contate_text_subtitle + ' para-regular-2'}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam <br />{' '}
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </p>
          <ul className={styles.contate_ul}>
            <li>
              <p className="para-regular-2">Endereço de email</p>
              <span className="para-bold-2">ensome@teste.com.br</span>
            </li>
            <li>
              <p className="para-regular-2">Número de telefone</p>
              <span className="para-bold-2">+99-99999-9999</span>
            </li>
            <li>
              <p className="para-regular-2">Endereço</p>
              <span className="para-bold-2">Rua Logo Ali, 999 - Terra</span>
            </li>
          </ul>
          <Button>Contacte-nos</Button>
        </div>
        <div className={styles.contate_form}>
          <div className={styles.contate_form_container}>
            <h1 className="title-exbold-3">Contacte-nos</h1>
            <form>
              <div>
                <label className="para-semi-8">Nome</label>
                <input className="para-semi-3" type="text" name="nome" />
              </div>
              <div>
                <label>Email</label>
                <input className="para-semi-3" type="email" name="email" />
              </div>
              <div>
                <label>Assunto</label>
                <input className="para-semi-3" type="text" name="assunto" />
              </div>
              <div>
                <label>Mensagem</label>
                <input className="para-semi-3" type="text" name="mensagem" />
              </div>
              <Button>Enviar</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contate;
