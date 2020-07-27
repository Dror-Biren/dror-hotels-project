import React from 'react';

const emptyFunc = () => { };
export default ({ actionWhenChange = emptyFunc }) => {
   const [cheacked, setChecked] = React.useState(true);
   const toggleChecked = () => {
      const newChecked = !cheacked;
      actionWhenChange(newChecked);
      setChecked(newChecked);
   }

   const checkedString = cheacked ? "checked" : "unchecked";
   return (
      <div 
         className="checkbox"
         onClick={toggleChecked}>

         <div
            className={"checkSign checkSign-"+checkedString}
         />
      </div>
   )
};
