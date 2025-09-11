import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { postBackendData } from "./api/api-service";

function Registration() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const registerData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    try {
     const result = await postBackendData("register", registerData);
      console.log("User registered successfully:", result);

      navigate("/login", { state: { message: "Registration successful! Please login." } });
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registration Form</h2>
      <form className="p-4 border rounded shadow" onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 5, message: 'Username must be at least 5 characters' },
            })}
          />
          {errors.username && <p className="text-danger">{errors.username.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
            })}
          />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p className="text-danger">{errors.password.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
        <p className="mt-2">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Registration;
