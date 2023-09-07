import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

import "./style.scss"

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={<Home />}
    //     />
    //     <Route
    //       path="/login"
    //       element={<Login />}
    //     />
    //     <Route
    //       path="/register"
    //       element={<Register />}
    //     />
    //   </Routes>
    // </BrowserRouter>
    <Login/>
  );
}

export default App;
