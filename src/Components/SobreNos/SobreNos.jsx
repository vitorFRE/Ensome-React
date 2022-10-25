import React from 'react';
import Subheader from '../Utils/Subheader';
import Inscrever from '../sections/Inscrever';
import Contate from '../sections/contate';
import Reviews from '../home/Reviews';
import Numeros from '../sections/numeros';
import NossosClientes from './NossosClientes';
import SobreNosIntro from './SobreNosIntro';

const SobreNos = () => {
  return (
    <div>
      <Subheader HeaderTitle={'Sobre Nós'} />
      <SobreNosIntro />
      <Numeros />
      <NossosClientes />
      <Reviews />
      <Contate />
      <Inscrever />
    </div>
  );
};

export default SobreNos;
