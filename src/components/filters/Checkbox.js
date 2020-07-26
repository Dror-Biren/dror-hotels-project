import React from 'react';

const emptyFunc = () => { };
export default ({ actionWhenChange = emptyFunc }) => {
   const [cheacked, setChecked] = React.useState(true);
   const toggleChecked = () => {
      const newChecked = !cheacked;
      actionWhenChange(newChecked);
      setChecked(newChecked);
   }

   return (
      <label className="checbox-container">
         <input
            type="radio"
            checked={cheacked}
            readOnly
            onClick={toggleChecked} />
         <span className="checkmark"></span>
      </label>
   )
};