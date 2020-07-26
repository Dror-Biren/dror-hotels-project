import React from 'react';

import HostingTypes_select from './HostingTypes_select';
import PricesSlider from './PricesSlider';
import SearchName from './SearchName';
import Ratings_select from './Ratings_select';

export default () => (
   <div className="filtersContent">
      <div className="filter_block">
         <Ratings_select />
      </div>

      <div className="filter_block">
         <PricesSlider />
      </div>

      <div className="filter_block">
         <HostingTypes_select />
      </div>

      <div className="filter_block filter_last-block">
         <SearchName />
      </div>
   </div>
);
