import React, { useState } from 'react';

const DonorForm = () => {
  const [formData, setFormData] = useState({
    donorName: '',
    contactInfo: '',
    amount: ''
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
      <label>Donor Name:</label>
      <input type="text" name="donorName" value={formData.donorName} onChange={handleChange} required />

      <label>Contact Info:</label>
      <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required />

      <label>Donation Amount:</label>
      <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default DonorForm;
