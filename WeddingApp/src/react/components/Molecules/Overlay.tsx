import React from 'react';
import { Loader } from '../Atoms/Loader';

export const Overlay: React.StatelessComponent = () => {
  return (
    <div className='m-overlay'>
      <Loader />
    </div>
  );
}