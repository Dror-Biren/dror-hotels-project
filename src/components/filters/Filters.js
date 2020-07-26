import React from 'react';

import FiltersForMobile from './FiltersForMobile';
import FiltersContent from './FiltersContent';

export default () => (
   <div className="filters">
      <div className="invisible-mobile">
         <div className="filter_block filters_title">
            סינון תוצאות
         </div>
         <FiltersContent />
      </div>

      <FiltersForMobile />
   </div>
);





