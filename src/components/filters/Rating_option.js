import React from 'react';
import Checkbox from './Checkbox';

import StarsRating from '../StarsRating';

export default ({ rating, actionWhenToggleSelect }) => {
   return (
      <div className="filters_option">
         <p className="filters_option-price">
            819$
         </p>

         <StarsRating 
            className="filters_rating"
            rating={rating} 
            includeUnmarkedStars={true}
         />

         <Checkbox actionWhenChange={actionWhenToggleSelect}/>
      </div>
   )
};



/*
      <span
         className="MuiButtonBase-root MuiIconButton-root jss11 MuiRadio-root jss1 MuiRadio-colorSecondary jss12 Mui-checked jss2 MuiIconButton-colorSecondary"
         aria-disabled="false">
         <span className="MuiIconButton-label">
            <input className="jss14" type="radio" value="" checked="" />
            <div className="jss15 jss17">
               <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
                  </path>
               </svg>
               <svg className="MuiSvgIcon-root jss16" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z">
                  </path>
               </svg>
            </div>
         </span>
         <span className="MuiTouchRipple-root">
         </span>
      </span>


*/