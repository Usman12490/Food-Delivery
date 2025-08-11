import React from 'react';
import styled from 'styled-components';

const Form = ({ onBackToLogin }) => {
  const handleLoginClick = (e) => {
    e.preventDefault();
    if (onBackToLogin) {
      onBackToLogin();
    }
  };

  return (
    <StyledWrapper>
      <div className="form-box" id='form-box'>
        {/* Top Login Button */}
        {/* <div className="top-section">
          <button className="login-button" onClick={handleLoginClick}>
            Stick to Login
          </button>
        </div> */}

        <form className="form">
          <span className="title">Sign up</span>
          <span className="subtitle">Create a free account with your email.</span>

          <div className="form-container">
            <input type="text" className="input" placeholder="Full Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>

          <button type="submit" className="signup-button">Sign up</button>
        </form>

        <div className="form-section">
          <p>Have an account? <a href="#" onClick={handleLoginClick}>Log in</a></p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form-box {
    max-width: 400px;
    background: #ffffff;
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .top-section {
    padding: 16px 24px 0 24px;
    display: flex;
    justify-content: flex-start;
  }

  .login-button {
    background-color: #2563eb;
    color: #ffffff;
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .login-button:hover {
    background-color: #1d4ed8;
  }

  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 24px 32px 32px;
    gap: 16px;
    text-align: left;
  }

  /* Form text */
  .title {
    font-weight: bold;
    font-size: 1.75rem;
    color: #111827;
    margin-bottom: 4px;
    margin-left: 80px;
    align-items: center;
  }

  .subtitle {
    font-size: 1rem;
    color: #6b7280;
    margin-bottom: 10px;
  }

  /* Inputs container */
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 1rem 0;
  }

  .input {
    background-color: #f9fafb;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    height: 48px;
    width: 100%;
    font-size: 1rem;
    padding: 0 16px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    box-sizing: border-box;
  }

  .input:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  .input::placeholder {
    color: #9ca3af;
  }

  .signup-button {
    background-color: #2563eb;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
    margin-top: 8px;
  }

  .signup-button:hover {
    background-color: #1d4ed8;
  }

  .form-section {
    padding: 20px 32px;
    font-size: 0.9rem;
    background-color: #f8fafc;
    text-align: center;
    border-top: 1px solid #e5e7eb;
  }

  .form-section p {
    margin: 0;
    color: #6b7280;
  }

  .form-section a {
    font-weight: 600;
    color: #2563eb;
    text-decoration: none;
    transition: color 0.3s ease;
    margin-left: 4px;
  }

  .form-section a:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }

  @media (max-width:750px){
  .subtitle{
  margin-bottom: 10px;

  }
  }
`;

export default Form;