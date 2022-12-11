import React from "react";
import { Routes, Route } from 'react-router-dom';


// Components
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'

//Wrapper
import LayoutWrapper from "./utils/WebWrapper";

function App() {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/' element={<HomePage />}/>
        <Route path='/' element={<HomePage />}/>
              
        
      </Routes>
    </LayoutWrapper>
  );
}

export default App;
