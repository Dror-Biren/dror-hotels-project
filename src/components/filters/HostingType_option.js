import React from 'react';
import Checkbox from './Checkbox';


export default ({ optionName, price, actionWhenToggleSelect }) => (
   <div className="filters_option">
      <p>
         {price}$
      </p>

      <p className="filters_option-name">
         {optionName}
      </p>

      <Checkbox actionWhenChange={actionWhenToggleSelect} />
   </div>
);






