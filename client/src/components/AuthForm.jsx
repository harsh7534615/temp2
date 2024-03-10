import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const AuthForm = ({ type }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // const res = await axios.put(`${API_URL}/todos/${id}`, { data });
      const response = await axios.post(
        `http://localhost:8000/${type}`,
        formData,
      );
      navigate("/");
      // Handle success
      console.log(response.data);
    } catch (err) {
      // Handle error
      setError(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">{type}</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default AuthForm;
