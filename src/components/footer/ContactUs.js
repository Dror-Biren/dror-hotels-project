import React from 'react';

import ContactInput from './ContactInput';

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

            <ContactInput
               className="emailInput"
               placeholder="דואר אלקטרוני"
               iconSrc="/images/emailIcon.png"
            />

            <ContactInput
               className="nameInput"
               placeholder="שם מלא"
               iconSrc="/images/pencilIcon.png"
            />
         </div>
      </div>
   </div>
);