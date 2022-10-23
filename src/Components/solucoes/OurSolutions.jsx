import React from 'react';
import styles from './OurSolutions.module.css';

const OurSolutions = () => {
  return (
    <div className={styles.ourSolutions + ' container'}>
      <h1 className="title-exbold-2">Nossas soluções</h1>
      <div className={styles.solutions}>
        <ul>
          <li className={styles.solutions_ultitle + ' title-bold-4'}>
            Integração de dados
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Extrair, transformar, carregar (ETL)
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Extrair, carregar, transformar (ELT)
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Gestão de dados
          </li>
          <li className={styles.solutions_saiba + ' title-semi-7'}>
            Saiba mais
          </li>
        </ul>

        <ul>
          <li className={styles.solutions_ultitle + ' title-bold-4'}>
            Data science
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Preparação de dados
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Gestão de dados
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Machine learning (ML)
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Inteligência Artificial (IA)
          </li>
          <li className={styles.solutions_saiba + ' title-semi-7'}>
            Saiba mais
          </li>
        </ul>

        <ul>
          <li className={styles.solutions_ultitle + ' title-bold-4'}>
            Big data
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Configuração e suporte
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Gestão da Qualidade
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Gerenciamento de segurança
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Captura e análise de big data
          </li>
          <li className={styles.solutions_saiba + ' title-semi-7'}>
            Saiba mais
          </li>
        </ul>

        <ul>
          <li className={styles.solutions_ultitle + ' title-bold-4'}>
            Armazenamento de dados
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Armazém de dados
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Projeto de data marts
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Implementação de dados
          </li>
          <li className={styles.solutions_saiba + ' title-semi-7'}>
            Saiba mais
          </li>
        </ul>

        <ul>
          <li className={styles.solutions_ultitle + ' title-bold-4'}>
            Self-service BI
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Infraestrutura de análise de dados
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Consultas e relatórios do Analytics
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Negócios inteligente
          </li>
          <li className={styles.solutions_saiba + ' title-semi-7'}>
            Saiba mais
          </li>
        </ul>

        <ul>
          <li className={styles.solutions_ultitle + ' title-bold-4'}>
            Visualização de dados
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Dashboards interativos
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Visuais personalizados e pré-construídos
          </li>
          <li className={styles.solutions_li + ' para-regular-2'}>
            Visualização múltipla
          </li>
          <li className={styles.solutions_saiba + ' title-semi-7'}>
            Saiba mais
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurSolutions;
