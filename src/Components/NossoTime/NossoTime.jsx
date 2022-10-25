import React from 'react';
import Inscrever from '../sections/Inscrever';
import Subheader from '../Utils/Subheader';
import Time from './Time';

const NossoTime = () => {
  return (
    <div>
      <Subheader HeaderTitle={'Nosso Time'} />
      <Time />
      <Inscrever />
    </div>
  );
};

export default NossoTime;
