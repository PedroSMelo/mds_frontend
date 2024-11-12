import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from './pages/LoginUser'; 
import RegisterUser from './pages/RegisterUser';  
import Painel from './pages/Painel';
import Header from './components/Header';  
import Footers from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import Menu from './components/Sidebar';



function App() {
  return (
    <Router>
      <Header />
      
      <div className="content">
        <Routes>
        <Route path="/login" element={<LoginUser />} />
        <Route 
          path="/painel" 
          element={<PrivateRoute element={<Painel />} />}
        />
        <Route path="/registro" element={<RegisterUser />} />  
        <Route path="/painel" element={<Painel />} />
        </Routes>
      </div>
      <Footers />
    </Router>
  );
}

export default App;
