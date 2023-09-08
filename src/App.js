import './App.css';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { NotesList } from './components/NotesList';
import { AddNote} from './components/AddNote';
import "./style.scss"
import React, { useState } from 'react'


function App() {

  return (
    <Home/>
  );
}

export default App;