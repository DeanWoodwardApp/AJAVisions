// Importing required modules and components
import styles from './style.module.scss';
import React, { useState } from 'react';
//import { createPortal } from 'react-dom';
import emailjs from 'emailjs-com';
import PageEnd from '../../common/PageEnd';

// ContactMeForm component
const ContactMeForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    emailToContact: '',
    phoneNumber: '',
    businessName: '',
    videoType: '',
    videoDescription: '',
    budget: '',
    startDate: '',
    endDate: '',
  });

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for the date error control
  const [dateErrors, setDateErrors] = useState({
    startDateError: '',
    endDateError: '',
  });

  // State to manage loading status
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return formData.firstName && formData.surname && formData.emailToContact && formData.videoType && formData.videoDescription;
  };

  const isDateValid = () => {
    const today = new Date().toISOString().split('T')[0];
    let isValid = true;
    let startError = '';
    let endError = '';

    if (formData.startDate < today) {
      startError = 'Start date cannot be in the past.';
      isValid = false;
    }

    if (formData.endDate < formData.startDate) {
      endError = 'End date must be after the start date.';
      isValid = false;
    }

    setDateErrors({ startDateError: startError, endDateError: endError });
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid() && isDateValid()) {
      setIsLoading(true); // Set loading to true when submission starts
      emailjs.send('service_kyg6dgj', 'template_vl9xdsn', formData, 'X_lOsBwM9LMv-WwrY')
        .then((response) => {
          console.log('SUCCESS!'); // response handling
          alert('Your vision has begun. I will be in touch ASAP, estimated within 1 day. Until then, keep your vision alive!');
          handleReset();
        }, (err) => {
          console.log('FAILED...', err);
          setIsLoading(false); // Reset loading to false whether email is sent successfully or fails
        })
        .finally(() => {
          setIsLoading(false); // Reset loading to false whether email is sent successfully or fails
        });
    } else {
      alert('Please fill in all required fields and check date constraints.');
      setIsLoading(false); // Reset loading to false whether email is sent successfully or fails
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      surname: '',
      emailToContact: '',
      phoneNumber: '',
      businessName: '',
      videoType: '',
      videoDescription: '',
      budget: '',
      startDate: '',
      endDate: '',
    });
  };

  // Render the form component
  return (
    <div>
      <div className={styles.fullWidthContainer}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h2>Generate Your Vision</h2>
          {/* Form inputs */}
          <label htmlFor="firstName">WHAT IS YOUR FIRST NAME?</label>
            <input type="text" name="firstName" placeholder="First name*" required value={formData.firstName} onChange={handleInputChange} />
          <label htmlFor="surname">WHAT IS YOUR SURNAME?</label>
            <input type="text" name="surname" placeholder="Surname*" required value={formData.surname} onChange={handleInputChange} />
          <label htmlFor="emailToContact">BEST EMAIL TO CONTACT YOU?</label>
            <input type="email" name="emailToContact" placeholder="Email*" required value={formData.emailToContact} onChange={handleInputChange} />
          <label htmlFor="businessName">DO YOU HAVE A PHONE NUMBER?</label>
            <input type="text" name="phoneNumber" placeholder="Phone number" value={formData.phoneNumber} onChange={handleInputChange} />
          <label htmlFor="businessName">HAVE YOU GOT A BUSINESS NAME?</label>
            <input type="text" name="businessName" placeholder="Business name" value={formData.businessName} onChange={handleInputChange} />
          <label htmlFor="videoType">PLEASE SELECT A VIDEO TYPE:</label>
            <select name="videoType" required value={formData.videoType} onChange={handleInputChange}>
              <option value="">Select video type*</option>
              <option value="Business video">Business video</option>
              <option value="Personal video">Personal video</option>
              <option value="Wedding">Wedding</option>
              <option value="Other">Other</option>
            </select>
          <label htmlFor="budget">YOUR VISION DESCRIBED (details appreciated):</label>
            <textarea name="videoDescription" placeholder="Video description*" required value={formData.videoDescription} onChange={handleInputChange}></textarea>
          <label htmlFor="budget">WHAT IS YOUR BUDGET?</label>
            <input type="text" name="budget" placeholder="£" value={formData.budget} onChange={handleInputChange} />
          <label htmlFor="startDate">YOUR PREFERRED START DATE IS:</label>
            <input type="date" id="startDate" name="startDate" required value={formData.startDate} onChange={handleInputChange} />
          <label htmlFor="endDate">YOUR PREFERRED END DATE IS:</label>
            <input type="date" id="endDate" name="endDate" required value={formData.endDate} onChange={handleInputChange} />
          <div className={styles.formButtons}>
            <button type="button" onClick={handleReset}>Cut</button>
            <button type="submit" disabled={isLoading}>{isLoading ? 'Sending...' : 'Action'}</button> {/* Disable button during loading */}
          </div>
        </form>
      </div>
        <PageEnd />
    </div>
  );
};

// Exporting the component
export default ContactMeForm;
