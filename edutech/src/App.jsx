import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from "./Components/Login/login";
import Admitcard from "./Components/Admitcard/Admitcard";
// Import other components/pages as needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/admitcard" element={<Admitcard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
