import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";
// import Footer from "./components/footer";
import Login from "./login";
import Registration from './registration';
import Dashboard from './dashboard';
import Profile from './profile';
import Products from './products';
import Home from "./pages/home";
import AddToCart from "./addtocart";
import Protected from "./protected";
import Private from "./private";
import AdminLayout from "./adminpanel/adminlayout";
import AddNewProduct from "./adminpanel/addnewproduct";
import ProductList from "./adminpanel/productlist";
import NotFoundPage from "./pagenotfound";

import './App.css';

function App() {

  const privateRoutes =[
    {
      path:'/login',
      element :<Login />,
    },

    {
      path:'/registration',
      element :<Registration />,
    },
    
  ];

  const protectedRoutes=[
    {
      path:'/profile',
      element:<Profile />,
    },

     {
      path:'/dashboard',
      element:<Dashboard/>,
    }, 

    {
      path:'/addtocart',
      element:<AddToCart/>,
    },

  ];

  return (
    <BrowserRouter>
    <Header/>
    
        <Routes>
              {/* admin routing-------------------------------------------------------------------- */}
               <Route path="/adminpage" element={<AdminLayout/>}>
                     <Route path="addproduct" element={<AddNewProduct/>}/> 
                     <Route path="productlist" element={<ProductList/>}/> 
              </Route>


              {/* public-----------------------------------------------------------------------------*/}
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<NotFoundPage />} /> 


              {/*protected----------------------------------------------------------------------------*/}
                <Route element={<Protected />}>
                  {
                    protectedRoutes.map((route,index)=>(
                      <Route key ={index} path={route.path} element={route.element}/>
                    ))
                  }
                </Route>


              {/*private------------------------------------------------------------------------------*/}
                <Route element ={<Private/>}>
                  {
                    privateRoutes.map((route,index)=>(
                      <Route key ={index} path={route.path} element={route.element}/>
                    ))
                  }
                </Route>
                
       </Routes>


      {/* <Footer /> */}
      <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>


  );
}

export default App;
