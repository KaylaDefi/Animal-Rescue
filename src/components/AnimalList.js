import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get('/api/animals');
        setAnimals(response.data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <div>
      <h2>Animal List</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal._id}>
            {animal.name} - {animal.breed} - {animal.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;
