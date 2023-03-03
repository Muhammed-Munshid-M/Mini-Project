import React from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const {loading} = useSelector((state)=> state.alerts)
  return (
    <div className="App">
      <BrowserRouter>
      {loading &&
        <div className="spinner-parent">
          <div class="spinner-border" role="status">
            
          </div>
        </div>}
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
