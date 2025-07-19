import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register'; 
import Product from './pages/Product';
import Profile from './pages/Profile';
import './stylesheets/App.css';

import { ModeProvider } from './context/Mode';
import { AuthProvider } from './context/Auth';

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    document.title = "E-Commerce"
  });

  return (
    <>
    <ModeProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </ModeProvider>
    </>
  )
}

export default App;
