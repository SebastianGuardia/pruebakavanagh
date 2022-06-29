import './index.css';
import React from "react";
import {Routes, Route,} from 'react-router-dom'
import MainHome from "./Routes/mainHome";
import CardComparison from "./Routes/CardComparison";
import { Helmet } from 'react-helmet';
function App() {
  return (
    <>     

      <Routes>
        <Route path='/' element={<MainHome/>}/>
        <Route path='/Productos' element={<CardComparison/>}/>
      </Routes>
  </>
  );
}

export default App;
