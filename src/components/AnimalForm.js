import React, { useState } from 'react';

const AnimalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    breed: '',
    description: '',
    status: 'available',
    photo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Age:</label>
      <input type="number" name="age" value={formData.age} onChange={handleChange} required />

      <label>Breed:</label>
      <input type="text" name="breed" value={formData.breed} onChange={handleChange} required />

      <label>Description:</label>
      <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>

      <label>Status:</label>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="available">Available</option>
        <option value="adopted">Adopted</option>
        <option value="fostered">Fostered</option>
      </select>

      <label>Photo URL:</label>
      <input type="text" name="photo" value={formData.photo} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AnimalForm;