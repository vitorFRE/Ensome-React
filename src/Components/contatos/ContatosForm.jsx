import React from 'react';
import styles from './ContatosForm.module.css';
import Button from '../Utils/Button';

const ContatosForm = () => {
  return (
    <div className={styles.contatos_container + ' container'}>
      <div className={styles.contatos_text}>
        <h1 className="title-exbold-1">Contatos</h1>
        <div className={styles.contatos_text_list}>
          <ul>
            <li className="title-bold-6">Email</li>
            <li className="para-regular-3">ensome@teste.com.br</li>
          </ul>
          <ul>
            <li className="title-bold-6">Número de telefone</li>
            <li className="para-regular-3">+99-99999-9999</li>
          </ul>
          <ul>
            <li className="title-bold-6">Endereço</li>
            <li className="para-regular-3">Rua Logo Ali, 999 - Terra</li>
          </ul>
        </div>
      </div>

      <form>
        <div className={styles.NeE}>
          <div>
            <label className="para-semi-8">Nome</label>
            <input className="para-semi-3" type="text" name="nome" />
          </div>
          <div>
            <label>Email</label>
            <input className="para-semi-3" type="email" name="email" />
          </div>
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
  );
};

export default ContatosForm;
