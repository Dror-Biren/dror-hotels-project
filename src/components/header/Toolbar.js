import React from 'react';
import { headerToolbarOptions } from '../../consts';

const actionWhenClicked = () => alert("הכפתור יעביר לדף טיסות");

function getClassName(optionName) {
   var result = "toolbarOption"
   if (optionName == "חבילות נופש") 
       result += " curOption";
   return result;
}

const createToolbarOption = (optionName) => (
   <p 
      className={getClassName(optionName)} 
      key={optionName}
      onClick={actionWhenClicked}>
      {optionName}
   </p>
);



const Toolbar = () => (
   <div className="toolbar">
      { headerToolbarOptions.map(createToolbarOption) }
   </div>
);

export default Toolbar;
