import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Header from './pages/Header';  
import Footer from './pages/Footer';  
import Home from './pages/Home';  
import Select from './pages/Select';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';

const App = () => {  
  return (  
    <Router>  
      <Header />  
      <Routes>  
        <Route path="/" element={<Home />} />   
        <Route path="/select" element={<Select />} />   
        <Route path="/shop" element={<Shop />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>  
      <Footer />  
    </Router>  
  );  
};  

export default App;
