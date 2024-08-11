import React, { useState } from 'react';

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Event Name:</label>
      <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} required />

      <label>Date:</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />

      <label>Location:</label>
      <input type="text" name="location" value={formData.location} onChange={handleChange} required />

      <label>Description:</label>
      <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
