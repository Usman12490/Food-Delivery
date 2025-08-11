import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../SignUpPopup/SignupPopup';

const LoginForm = ({ onClose }) => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [currentForm, setCurrentForm] = useState('login'); // 'login' or 'signup'

    // Function to handle sign up link click
    const handleSignUpClick = (e) => {
        e.preventDefault();
        setCurrentForm('signup');
    };

    // Function to switch back to login
    const handleBackToLogin = () => {
        setCurrentForm('login');
    };

    // Function to close all forms
    const handleCloseAll = () => {
        if (onClose) {
            onClose(); // Close the entire popup from parent component
        }
        setCurrentForm('login');
    };

    return (
        <StyledWrapper>
            {currentForm === 'login' ? (
                <form className="form">
                    <p className="form-title">Sign in to your account</p>
                    <div className="input-container">
                        <input type="email" placeholder="Enter email" />
                        <span>
                        </span>
                    </div>
                    <div className="input-container">
                        <input type="password" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="submit">
                        Sign in
                    </button>
                    <p className="signup-link">
                        No account?
                        <a href="#" onClick={handleSignUpClick}>Sign Up</a>
                    </p>
                </form>
            ) : (
                <div className="signup-form-container">
                    <Form onBackToLogin={handleBackToLogin} />
                </div>
            )}
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .form {
    background-color: #fff;
    display: block;
    padding: 1rem;
    max-width: 350px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .form-title {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    text-align: center;
    color: #000;
  }

  .input-container {
    position: relative;
  }

  .input-container input, .form button {
    outline: none;
    border: 1px solid #e5e7eb;
    margin: 8px 0;
  }

  .input-container input {
    background-color: #fff;
    padding: 1rem;
    padding-right: 3rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 300px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .submit {
    display: block;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    background-color: #4F46E5;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    width: 100%;
    border-radius: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit:hover {
    background-color: #3730A3;
  }

  .signup-link {
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
  }

  .signup-link a {
    text-decoration: underline;
    cursor: pointer;
    color: #4F46E5;
    margin-left: 5px;
    transition: color 0.3s ease;
  }

  .signup-link a:hover {
    color: #3730A3;
  }

  .signup-form-container {
    position: relative;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .back-to-login {
    position: absolute;
    top: 10px;
    left: 10px;
    background: none;
    border: none;
    color: #4F46E5;
    cursor: pointer;
    font-size: 0.875rem;
    padding: 5px 10px;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease;
    z-index: 10;
  }

  .back-to-login:hover {
    background-color: #f3f4f6;
  }
`;

export default LoginForm;