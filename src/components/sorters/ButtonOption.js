import React from 'react';

export default ({ text, iconSrc, isChosen, actionWhenClicked }) => {
   let className = "sorter-buttonOption";
   if (isChosen)
      className += " sorter-buttonOption-chosen";
   return (
      <div 
         className={className}
         onClick={actionWhenClicked}>
         <p className="sorter-button-text">
            {text}
         </p> 
            
         <img
            className="sorter-button-img" 
            src={iconSrc}
         />           
      </div>
   );
};
