import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from "./Components/Login/login";
import Admitcard from "./Components/Admitcard/Admitcard";
import Result from './Components/Resultcard/Result';
import AssociateLogin from './Components/AssociateLogin/AssociateLogin';
import TestReappearing from './Components/TestReappear/Testreappear';
import TestRegister from './Components/TestRegister/TestRegister';
// Import other components/pages as needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admitcard" element={<Admitcard />} />
        <Route exact path="/result" element={<Result/>} />
        <Route exact path="/associatelogin" element={<AssociateLogin/>} />
        <Route exact path="/testreappear" element={<TestReappearing/>} />
        <Route exact path="/testregister" element={<TestRegister/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
