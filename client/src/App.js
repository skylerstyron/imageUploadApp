import React from 'react';
import './App.css';
import FileUpload from './Components/FileUpload';
import logo from './restomodAirLogoWhite.png'

const App = () => (
  <div>
    <div className='header'>
      <img className='rmLogo' src={logo} alt="" />
    </div>
    <div className="container mt-4 align-items-center">
      <div className="align-items-center">
        <h4 className="display-5 text-center mb-4">
          Restomod Air Image Upload
        </h4>
        <FileUpload />
      </div>
    </div>
  </div>
  );

export default App;
