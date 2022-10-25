import React from 'react';
import Subheader from '../Utils/Subheader';
import Inscrever from '../sections/Inscrever';
import Contate from '../sections/Contate';
import Numeros from '../sections/Numeros';
import ServicosCards from './ServicosCards';

const Servicos = () => {
  return (
    <div>
      <Subheader HeaderTitle={'Serviços'} />
      <ServicosCards />
      <Numeros />
      <Contate />
      <Inscrever />
    </div>
  );
};

export default Servicos;
