import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from "./Components/Login/login";
// Import other components/pages as needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
