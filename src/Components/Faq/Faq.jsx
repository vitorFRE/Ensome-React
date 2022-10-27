import React from 'react';
import Subheader from '../Utils/Subheader';
import PerguntasFrequentes from './PerguntasFrequentes';
import Contate from '../sections/Contate';

const Faq = () => {
  return (
    <div>
      <Subheader HeaderTitle={'FAQ'} />
      <PerguntasFrequentes />
      <Contate />
    </div>
  );
};

export default Faq;
