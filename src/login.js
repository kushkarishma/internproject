import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { postBackendData } from "./api/api-service";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Show message from redirects
  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);
  const onSubmit = async (data) => {
    setLoading(true);
    const loginData = { username: data.username.trim(), password: data.password };

    try {
      const result = await postBackendData("auth/login", loginData);
      console.log("Login response:", result);

      if (result.token) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("role", result.role);
        localStorage.setItem("username", result.username);

        toast.success("Login successful 🎉");

        const redirectTo =
          location.state?.from?.pathname ||
          (result.role === "admin" ? "/adminpage" : "/home");

        navigate(redirectTo, { replace: true });
      } else {
        toast.error(result.message || "Invalid username or password");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "Login failed";
      console.error("Login failed:", errorMessage);

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login Form</h2>
      {message && <p className="text-danger">{message}</p>}

      <form className="p-4 border rounded shadow" onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 5, message: 'Username must be at least 5 characters' }
            })}
          />
          {errors.username && <p className="text-danger">{errors.username.message}</p>}
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

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-2 text-center">
          Don't have an account? <Link to="/registration">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

