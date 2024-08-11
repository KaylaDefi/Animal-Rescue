import React, { useState } from 'react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    volunteerName: '',
    contactInfo: '',
    availability: '',
    skills: ''
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
      <label>Volunteer Name:</label>
      <input type="text" name="volunteerName" value={formData.volunteerName} onChange={handleChange} required />

      <label>Contact Info:</label>
      <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required />

      <label>Availability:</label>
      <input type="text" name="availability" value={formData.availability} onChange={handleChange} required />

      <label>Skills:</label>
      <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default VolunteerForm;
