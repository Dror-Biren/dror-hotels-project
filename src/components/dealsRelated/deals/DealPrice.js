import React from 'react';

export default ({ price }) => (
   <div className="deal-price">
      <h1>
         {price}$
      </h1>
      <h5>
         מחיר ממוצע לאדם בחדר זוגי
      </h5>

      <div>
         <button 
            className="deal-button"
            onClick={() => alert("פרטים נוספים")}>
            פרטים נוספים
         </button>
      </div>
   </div>
);