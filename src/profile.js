 import  React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
 

 function Profile (){
    const navigate = useNavigate();

    useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate('/login', { state: { message: "Please login first" } });
    }

  }, []);


 return(
  <h1> Profile page</h1>

 );
 }
 export default Profile;
