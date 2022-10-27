import React, { useState } from 'react';
import styles from './PerguntasFrequentes.module.css';
import image from '../Utils/imgs';

const PerguntasFrequentes = () => {
  const [ativo, setAtivo] = useState(0);

  const toggle = (i) => {
    if (ativo == i) {
      return setAtivo(null);
    }

    setAtivo(i);
  };

  return (
    <div className={styles.accordion_container}>
      <div className={styles.accordion + ' container'}>
        {dados.map((item, i) => (
          <div className={styles.accordion_item}>
            <div
              className={styles.accordion_pergunta}
              onClick={() => toggle(i)}
            >
              <h2
                className={`${
                  ativo === i
                    ? 'faq_accordion_pergunta_ativo'
                    : 'faq_accordion_pergunta'
                } title-bold-4`}
              >
                {item.Pergunta}
              </h2>
              <span>
                {ativo === i ? (
                  <img src={image.menos} alt="icon -" />
                ) : (
                  <img src={image.mais} alt="icon +" />
                )}
              </span>
            </div>
            <div
              className={`${
                ativo === i ? 'faq_accordion_ativo' : 'faq_accordion_resposta'
              } para-regular-1`}
            >
              {item.Resposta}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const dados = [
  {
    Pergunta: 'Qual forma de pagamento vocês aceitam?',
    Resposta:
      'Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros.',
  },
  {
    Pergunta: 'Como posso entrar em contato?',
    Resposta:
      'Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros.',
  },
  {
    Pergunta: 'Vocês possuem algum desconto?',
    Resposta:
      'Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros.',
  },
  {
    Pergunta: 'Posso parcelar no boleto?',
    Resposta:
      'Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros.',
  },
  {
    Pergunta: 'Meus dados estão seguros?',
    Resposta:
      'Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros.',
  },
];

export default PerguntasFrequentes;
