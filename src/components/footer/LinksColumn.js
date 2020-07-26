import React from 'react';

const createLinkJsx = (option) => (
   <p 
      key={option}
      className={"footer-link"}
      onClick={()=> location.href = 'https://www.google.com/flights'}>
      {option}
   </p>
);

export default ({title, options}) => (
   <div className="footer-linksColumn">
      <h2>
         {title}
      </h2>
      <div>
         {options.map(createLinkJsx)}
      </div>    
   </div>
);

