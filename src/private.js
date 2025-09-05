import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const token = localStorage.getItem("token");
   debugger
  if (token) {
    return <Navigate to="/home"/>;
  }
  return (
    <>  
      <Outlet />
    </>
  );
};

export default Private;