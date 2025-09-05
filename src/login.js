import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { Postdata } from "./api/api-service";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
  const loc = useLocation();
   const navigate = useNavigate();  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (loc.state?.message) {
      setMessage(loc.state.message);
      navigate(loc.pathname, { replace: true });
    }
  }, [loc, navigate]);

  const onSubmit = (data) => {
    console.log(data);

    const loginData = {
      username: data.username,
      password: data.password,
    };

    const getLogin = async () => {
      try {
      
        const result = await Postdata("auth/login", loginData);

        if (result.token) {
          localStorage.setItem("token", result.token);
          console.log("User login successfully:", result);
           navigate("/home");
        } else {
          console.warn("No token received:", result);
        }
      } catch (error) {
        console.error("Login failed:", error);
        console.error(
          "Login error details:",
          error.response?.data || error.message
        );
      }
    };

    getLogin();
  }; 
  
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login Form</h2>
        {loc.state?.message && (
        <p style={{ color: "red" }}>{loc.state.message}</p>
      )}
      <form className="p-4 border rounded shadow" onSubmit={handleSubmit(onSubmit)}>

        {/* <div className="mb-3">
          <label htmlFor="id" className="form-label">ID</label>
          <input  type="number" id="id" name="id" className="form-control" />
        </div> */}

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 5, message: 'Username must be at least 5 characters' },
            })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>


        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"{...register('password', { required: 'password is required' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          login
        </button>
        <br />
        <Link to="/registration">Registration here</Link>
      </form>
    </div>


  );
}
export default Login;
























// import { useForm } from "react-hook-form";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// function Login() {
//   const loc = useLocation();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     const postData = {
//       username: data.username,
//       password: data.password,
//     };

//     axios
//       .post("https://fakestoreapi.com/auth/login", postData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         console.log("login successful", response.data);
//         localStorage.setItem("token", response.data.token); // API ka token store karo
//         navigate("/dashboard");
//       })
//       .catch((error) => {
//         console.error("There was an error!", error);
//       });
//   };

//   return (
//     <div>
//       <div className="container mt-5">
//         <h2 className="mb-4">Login Form</h2>

//         {loc.state?.message && (
//           <p style={{ color: "red" }}>{loc.state.message}</p>
//         )}
//         <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
//           <div className="col-md-6">
//             <label htmlFor="username" className="form-label">
//               {" "}
//               Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="username"
//               placeholder="Enter your Username"
//               {...register("username", { required: true })}
//             />
//             {errors.username && <p role="alert"> Username is required</p>}
//           </div>

//           <div className="col-md-6">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               placeholder="Enter your Password"
//               {...register("password", { required: true })}
//             />
//             {errors.password && <p role="alert"> password is required</p>}
//           </div>
//           <div className="col-6">
//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Login;

