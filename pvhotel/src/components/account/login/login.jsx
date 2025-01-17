// RegisterForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

import hero from '../../../assets/hero.jpg'

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensure it takes the full height of the viewport */
  background: url(${hero}) no-repeat center center/cover;
  font-family: 'Arial', sans-serif;
  box-sizing: border-box; /* To handle padding or borders */
  width: 100%;
`;

const RegisterFormWrapper = styled.form`
   background: rgba(255, 255, 255, 0.95);
  padding: 30px 25px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;  /* Added padding */
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 25px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: #555;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    border-color: #a88950;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #a88950;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #8d7645;
  }
`;

const Link = styled.a`
  color: #555;
  text-decoration: none;
  font-size: 14px;
  margin-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const Paragraph = styled.p`
  font-size: 12px;
  color: #555;
  text-align: center;
  margin-top: 15px;
  line-height: 1.5;
`;

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Registration successful!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          username: '',
          password: '',
        });
      } else {
        alert('Failed to register.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  

  return (
    <FormContainer>
      <RegisterFormWrapper onSubmit={handleSubmit}>
        <Title>Create Account</Title>

        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Input
          type="email"
          name="email"
          placeholder="name@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          type="text"
          name="phone"
          placeholder="With Country Code"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <Input
          type="text"
          name="country"
          placeholder="Country Name"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <Input
          type="password"
          name="password"
          placeholder="6+ characters"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Button type="submit">Register</Button>
        <Paragraph>
          By signing up you agree to <Link >terms and conditions</Link>.
        </Paragraph>
        <Link href="/Booking/Rooms/d1/login">Login</Link>
      </RegisterFormWrapper>
    </FormContainer>
  );
}

export default RegisterForm;
