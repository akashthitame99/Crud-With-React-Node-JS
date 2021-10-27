import React, { useState } from 'react';
import './App.css';
import FormSignup from './Signup';
import FormSuccess from './RegSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <h1>Registration form</h1>
          <img className='form-img' src='new-registration.svg' alt='left' />

        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
