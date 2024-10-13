import React from 'react';
import './Created.css'; // Import the CSS file
import logo from '../assets/Leonardo_Phoenix_The_Code_Crafts_logo_blends_sleek_modern_typo_0.jpg'; // Import your logo image

const Created = () => {
  return (
    <div className="created-by">
      <div className='created-by-1'>
        <h1 className="created-by-title">Designed With Care <br />Created With Excellence <br /> By CODE CRAFTS TEAM</h1>
      </div>
      <img src={logo} alt="Code Crafts Logo" className="created-by-logo" />
    </div>
  );
};

export default Created;
