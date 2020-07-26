import React from 'react';
import { pagesLabels } from '../../consts/links';

function getClassName(isCurPage) {
   var result = "toolbarOption"
   if (isCurPage)
      result += " curOption";
   return result;
}

export default ({ curPageKey, onLinkClicked }) => {
   const pagesLinks = [];
   for (const pageKey in pagesLabels) {
      pagesLinks.push(
         <p
            key={pageKey}
            className={getClassName(pageKey === curPageKey)}
            onClick={() => onLinkClicked(pageKey)}>
            {pagesLabels[pageKey]}
         </p>
      );
   }

   return (
      <div className="toolbar">
         {pagesLinks}
      </div>
   );
};


/*
const actionWhenClicked = () => alert("הכפתור יעביר לדף טיסות");

const createToolbarOption = (optionName) => (
   <p
      className={getClassName(optionName)}
      key={optionName}
      onClick={actionWhenClicked}>
      {optionName}
   </p>
);

 {headerToolbarOptions.map(createToolbarOption)}
*/


