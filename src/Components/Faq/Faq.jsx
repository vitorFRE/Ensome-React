import React from 'react';
import Subheader from '../Utils/Subheader';
import PerguntasFrequentes from './PerguntasFrequentes';

const Faq = () => {
  return (
    <div>
      <Subheader HeaderTitle={'FAQ'} />
      <PerguntasFrequentes />
    </div>
  );
};

export default Faq;
