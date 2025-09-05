import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { Postdata } from "./api/api-service";
import { useNavigate } from "react-router-dom";


function  Registration(){
  const navigate = useNavigate();  
   const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
    console.log(data);

    const registerData ={
      username:data.username,
      email:data.email,
      password: data.password
    }

    const getRegister = async () => {
        try {
           const result = await Postdata(`users`, registerData);
           if(result.token){ 
            localStorage.setItem("token", result.token);
             }
            console.log("User registered successfully:", result);  
             navigate("/login");

        }
         catch (error) {
            console.error("Registration failed:", error);
               console.error("Registration failed:", error.response?.data || error.message);
        }

      }
      getRegister();
  };


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registration Form</h2>
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
           {...register('username',{required:'Username is required',
              minLength: { value: 5, message: 'Username must be at least 5 characters' },      
           })}
          />
           {errors.username && <p>{errors.username.message}</p>}
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
           {...register ('email',{required:'email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email address',
          },
           })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"{...register('password',{required:'password is required'})}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
        <br/>
           <Link to  ="/login">Login here</Link>
      </form>
    </div>
  

  );
}
export default Registration;























// // import  React, { useEffect } from "react";
// import { useForm } from "react-hook-form"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import axios from 'axios';
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
    

// function Registration (){
//  const navigate = useNavigate();
// const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit =(data)=>{
//         console.log(data);
    
//       const postData ={
//         id:1001,
//         username :data.username,
//         email : data.email,
//         password : data.password
//       };
//       axios.post('https://fakestoreapi.com/users',postData)
//         .then((response)=>{
//           console.log("user registered successfully", response.data);
//             navigate('/login')

//         })
//         .catch((error)=>{
//           console.error("There was an error!", error);
//         })
      

//     };
    
//     //   useEffect(()=>{
//     //  const token= localStorage.getItem("token");

//     //  if(token === "true"){
//     //   navigate('/login')
//     //  }
//     // },[]); 

//    return(
// <div>
   
//     <div className="container mt-5">
//         <h2 className="mb-4">Registration Form</h2>
//         <form className="row g-3" onSubmit ={handleSubmit(onSubmit)}>

//           <div className="col-md-6">
//             <label htmlFor="username" className="form-label"> Name</label>
//             <input type="text" className="form-control" id="username" placeholder="Enter your Username" 
//             {...register("username", {required :true, maxLength:20})}
//             />
//            {errors.username && (<p role="alert"> Username is required</p>)}
//          </div>

//          <div className="col-md-6">
//             <label htmlFor="email" className="form-label">email</label>
//             <input type="text" className="form-control" id="email" placeholder="Enter your Email"
//             {...register("email",{ required : true})}
//             />
//             {errors.email && (<p role ="alert"> email is required</p>)}
//          </div>
       
       
//         <div className="col-md-6">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input type="password" className="form-control" id="password" placeholder="Enter your Password"
//             {...register("password", { required: true, minLength : 6})}
//           />
//            { errors.email && (<p role ="alert"> password is required</p>)}
//         </div>
//         <div className="col-6">
//           <button type="submit" className="btn btn-primary">Submit</button>
//           <br/>
//             <Link to  ="/login">Login here</Link>
//         </div>
        
//      </form>
//     </div>
// </div>
//    );
//  }

//  export default Registration;
 