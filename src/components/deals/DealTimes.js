import React from 'react';

const separatorLine = (
   <span className="span-separator">|</span>
);

const fixHebrewOrder = (
   <span style={{ fontSize: 0 }}>
      א
   </span>
);

const createTimeJsx = (time, labal) => (
   <span className="deal-time">
      {time.format("h:mm")}
      {separatorLine}
      {time.format("DD/M")}
      <span className="span-strong">{labal}</span>
   </span>
);


const milSecondsInDay = 1000 * 60 * 60 * 24;
function calcNights(startTime, finishTime) {
   const totalTime = finishTime.valueOf() - startTime.valueOf();
   let fullDays = parseInt(totalTime / milSecondsInDay);
   
   if (finishTime.hour() < startTime.hour())
      fullDays++;
   
   return fullDays;
}

export default ({ startTime, finishTime , hostingType}) => (
   <div>
      <p className="deal-times">
         {createTimeJsx(startTime, ":יציאה")}
         {createTimeJsx(finishTime, ":חזרה")}
      </p>

      <div className="deal-nights">
         <button 
            className="deal-button deal-button-packages"
            onClick={() => alert("חבילות נוספות")}>
            הצג חבילות נוספות למלון זה
         </button>

         <p>
            {fixHebrewOrder}
            {calcNights(startTime, finishTime)} לילות
            {separatorLine}
            {hostingType}
         </p>
      </div>
   </div>
);

