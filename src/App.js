import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup';

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/courses" element={<Courses/>} />
      <Route path ="/login" element={<Login/>} />
      <Route path ="/signup" element={<Signup/>} />

      

    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
