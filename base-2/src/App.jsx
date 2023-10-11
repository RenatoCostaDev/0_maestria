import React, { useState } from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent';
import Event from './components/Event';

const App = () => {

  return (
    <>
      <div className='container'>
        {/* <FirstComponent /> */}
        <Event />
      </div>
    </>
  )
}

export default App;
