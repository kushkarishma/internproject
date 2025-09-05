import { Navigate, Outlet } from "react-router-dom";
const Protected = () => {
  const token = localStorage.getItem("token");
  debugger
  if (!token) {
    return <Navigate to="/login" state={{ message: "Please login first" }} replace />;
  }
  return (
    <>

      <Outlet />

    </>
  );
};

export default Protected;




