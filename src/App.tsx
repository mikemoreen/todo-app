import React, {useState} from 'react';

// Router
import { Route, Routes } from "react-router-dom";
// Components
import Home from './pages/HomePage';
import AddCardForm from './pages/AddCardForm';

const App:React.FC = () =>{
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_card" element={<AddCardForm/>} />
      </Routes>
    </div>
  );
}

export default App;
