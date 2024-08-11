import React from 'react';
import AnimalForm from '../components/AnimalForm';
import AnimalList from '../components/AnimalList';

const AnimalsPage = () => {
  return (
    <div>
      <h1>Animals</h1>
      <AnimalForm />
      <AnimalList />
    </div>
  );
};

export default AnimalsPage;
