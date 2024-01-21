import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './constants/style.js';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/features" element={<div>Features Page</div>} />
      <Route path="/product" element={<div>Product Page</div>} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  </Router>
);

export default App;