import React, { useState } from 'react';
import './Careerform.css';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    FatherName: '',
    dateofbirth: '',
    contactNo: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gender: '',
    email: '',
    resume: ''
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
    // Here you can handle form submission, for example, send the data to a server
    console.log(formData);
    axios.post('http://localhost:3001/register', formData)
      .then((res) => {
        console.log(res);
        // Clear form data after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          FatherName: '',
          dateofbirth: '',
          contactNo: '',
          address: '',
          city: '',
          state: '',
          pincode: '',
          gender: '',
          email: '',
          resume: ''
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input" />
        </label>
        
        <label className="form-label">
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Father Name:
          <input type="text" name="FatherName" value={formData.FatherName} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
             Gender:
            <select name="gender" value={formData.gender} onChange={handleChange} className="form-input">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
        </label> 
        <label className="form-label">
          Date of Birth:
          <input type="date" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Contact:
          <input type="number" name="contactNo" value={formData.contactNo} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Resume:
          <input type="file" name="resume" value={formData.resume} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Pincode:
          <input type="number" name="pincode" value={formData.pincode} onChange={handleChange} className="form-input" />
        </label>
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
}

export default Form;
