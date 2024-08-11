import React, { useState } from 'react';

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    applicantName: '',
    contactInfo: '',
    animalId: '',
    backgroundCheck: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Applicant Name:</label>
      <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} required />

      <label>Contact Info:</label>
      <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required />

      <label>Animal ID:</label>
      <input type="text" name="animalId" value={formData.animalId} onChange={handleChange} required />

      <label>
        Background Check:
        <input type="checkbox" name="backgroundCheck" checked={formData.backgroundCheck} onChange={handleChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AdoptionForm;
