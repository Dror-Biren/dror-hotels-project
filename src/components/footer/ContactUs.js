import React from 'react';

export default () => (
   <div className="contactUs-container">
      <div className="contactUs">
         <h3 className="contactUs-title">
            הצטרפו למועדון הלקוחות שלנו
         </h3>

         <div className="contact-form">
            <button>
               הרשם
            </button>

            <input
               className="emailInput"
               type="text"
               placeholder="דואר אלקטרוני"
            />

            <input
               className="nameInput"
               type="text"
               placeholder="שם מלא"
            />
         </div>
      </div>
   </div>
);