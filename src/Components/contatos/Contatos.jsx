import React from 'react';
import Subheader from '../Utils/Subheader';
import ContatosForm from './ContatosForm';
import ContatosMap from './ContatosMap';

const Contatos = () => {
  return (
    <div>
      <Subheader HeaderTitle={'Contatos'} />
      <ContatosForm />
      <ContatosMap />
    </div>
  );
};

export default Contatos;
