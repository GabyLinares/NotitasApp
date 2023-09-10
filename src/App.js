import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import "./style.scss"
import React from 'react'


function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/inicio' element={<Home />} />
        <Route path='/NotitasApp/' element={<Home />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;