import React from "react";
import { Routes, Route } from 'react-router-dom';


// Components
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import ErrorPage from "./Pages/Error";
import SchoolPage from "./Pages/Schools";

//Wrapper
import LayoutWrapper from "./utils/WebWrapper";

function App() {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/schools' element={<SchoolPage />}/>
        <Route path='*' element={<ErrorPage />}/>
              
        
      </Routes>
    </LayoutWrapper>
  );
}

export default App;
