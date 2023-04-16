import React from 'react';
import './App.css';
import Navbar from './Components/Pages/Header/Navbar';
import Form from './Components/Pages/Form/Form';

function App() {
  return (
    <div className='bg-bgColor font-barlow h-full'>
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
