import React from 'react';

export default ({className, placeholder, iconSrc}) => (
   <div className={"contact-input "+className}>
      <input
         type="text"
         placeholder={placeholder}
      />

      <img
         className="contact-input-img"
         src={iconSrc}
      />
   </div>
);