import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import  React, { useEffect } from "react";



function Dashboard (){
    const navigate = useNavigate();
    const handleLogout =()=>{
        localStorage.removeItem("token");
        navigate('/login');
    };
      useEffect(()=>{
     const token= localStorage.getItem("token");

     if (!token) {
      navigate('/login', { state: { message: "Please login first" } });
    }

    },[])

    return(
     <div className= "container">
         <div className='row'>
          <div className='col-md-12 text-center mt-5'>
           <h2>Dashboard</h2>
            <div class ="btn">
            <button onClick={handleLogout}>LOGOUT</button>
            <button><Link to  ="/products">PRODUCTS</Link></button>
           
            </div>
          </div>
        </div>
      </div>
    );

}
export  default Dashboard;