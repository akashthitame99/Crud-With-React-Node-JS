import React, { useEffect } from "react";
import validate from "./validation";
import "./App.css";
import { useState } from "react";
import axios from "axios";
const FormSignup = ({ submitForm }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const { username, email, password, password2 } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setDataIsCorrect(true);
  };
  var result = email;
  console.log(result);
  const signup = async () => {
    await axios.post(`http://localhost:3001/cust/signup`, {
      username,
      email,
      password,
      password2,
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
      signup();
    }
  }, [errors]);

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form">
        <h1>Enter your details below</h1>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          <p>{errors.username}</p>
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          <p>{errors.email}</p>
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          <p>{errors.password2}</p>
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? <a href="ak.html">Login here</a>
        </span>
      </form>
      <h1>{result}</h1>
    </div>
  );
};

export default FormSignup;
