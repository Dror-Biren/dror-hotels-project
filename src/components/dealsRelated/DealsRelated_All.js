import React from 'react';

import Sorters from './sorters/Sorters';
import DealsList from './deals/DealsList';
import Filters from './filters/Filters';



export default () => (
   <div className="page-content">
      <div className="pageCenter">
         <Sorters />
         <DealsList />
      </div>
      <Filters />
   </div>
);
