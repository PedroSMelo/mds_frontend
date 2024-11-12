import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from './pages/LoginUser'; 
import RegisterUser from './pages/RegisterUser';  
import Painel from './pages/Painel';
import Header from './components/Header'; 
import Menu from './components/Sidebar'; 
import '@govbr-ds/core/dist/core.min.css';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <div className="content">
        <Routes>
          <Route path="/" element={<LoginUser />} />  
          <Route path="/registro" element={<RegisterUser />} />  
          <Route path="/painel" element={<Painel />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
