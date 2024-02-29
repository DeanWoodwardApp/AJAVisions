import React, { useState } from 'react';
import styles from './style.module.scss'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phoneNumber: '',
    typeOfVideo: '',
    videoDesc: '',
    budget: 0,
    timelineStart: '',
    timelineEnd: '',
    filesAndInspiration: null
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle the form submission once you have set up EmailJS or an alternative service
    console.log('Form data submitted:', formData);
  };

  return (
    <>
        <h1>Quick Contact</h1>
        <a href="mailto:aja.visionss@gmail.com?subject=Quick Contact" className={styles.button}>Email</a>
        <a href="tel:+07999039535" className={styles.button}>Phone</a>
        <a href="https://www.instagram.com/direct/t/17844959589023407" target="_blank" rel="noopener noreferrer" className={styles.button}>Instagram DM</a>
        {/* Add the button for Facebook DM here... */}

        <h1>Enquiry</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" onChange={handleInputChange} placeholder="FIRST NAME" />
            <input type="text" name="surname" onChange={handleInputChange} placeholder="SURNAME" />
            <input type="email" name="email" onChange={handleInputChange} placeholder="EMAIL ADDRESS" />
            <input type="tel" name="phoneNumber" onChange={handleInputChange} placeholder="PHONE NUMBER" />
            <select name="typeOfVideo" onChange={handleInputChange}>
            {/* Add your video options here */}
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            {/* ... other options here ... */}
            </select>
            <textarea name="videoDesc" onChange={handleInputChange} placeholder="VIDEO DESC"></textarea>
            <input type="range" name="budget" onChange={handleInputChange} placeholder="BUDGET" />
            <input type="date" name="timelineStart" onChange={handleInputChange} placeholder="START DATE" />
            <input type="date" name="timelineEnd" onChange={handleInputChange} placeholder="END DATE" />
            <input type="file" name="filesAndInspiration" onChange={handleInputChange} />
            <button type="submit">Action</button>
      </form>

        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>
        <h1>Testing</h1>

    </>
  );
}

export default ContactPage;
