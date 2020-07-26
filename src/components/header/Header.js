import React from 'react';
import Toolbar from './Toolbar';

const Header = (props) => (
   <div className="header-container">
         <div className="header-title">
            <img
               className="header-logo"
               src="/images/logo.png"
            />

            <h3 className="coin-type">
               $ USD
            </h3>
         </div>

      <Toolbar {...props}/>     
   </div>
);

export default Header;

/*
<h1 className="header_title">
            Alray
         </h1>
*/