import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/App.css';
import RunOnLoad from './RunOnLoad';

import { ModeProvider } from './context/Mode';
import { AuthProvider } from './context/Auth';

import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register'; 
import Product from './pages/Product';
import Profile from './pages/Profile';

import AdminPage from './admin/AdminPage';
import EditProduct from './admin/EditProduct';
import AddProduct from './admin/AddProduct';


function App() {
  

  return (
    <>
      <ModeProvider>
        <AuthProvider>
          <RunOnLoad/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/product" element={<Product/>}/>
              <Route path="/admin-panel" element={<AdminPage />}/>
              <Route path="/admin-panel/edit" element={<EditProduct />}/>
              <Route path="/admin-panel/add" element={<AddProduct />}/>
              <Route path="*" element={<NoPage/>}/>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ModeProvider>
    </>
  )
}

export default App;
