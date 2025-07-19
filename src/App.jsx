import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register'; 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/"/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
