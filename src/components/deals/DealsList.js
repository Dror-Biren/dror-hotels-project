import React from 'react';
import { connect } from 'react-redux';

import DealListItem from './DealListItem';
import getVisibleDeals from '../../utils/getVisibleDeals';

function getDealsSummery(amount) {
   switch (amount) {
      case 0:
         return ".לא נמצאו תוצאות עבור הגדרות החיפוש שלך";
      case 1:
         return ":נמצאה תוצאה אחת";
      default:
         return `:סה"כ נמצאו ${amount} תוצאות`
   }
}


export const DealsList = ({ deals }) => {
   const DealsJsx = deals.map(deal =>
      <DealListItem
         key={deal.id}
         deal={deal}
      />
   );

   return (
      <div>
         <h2 className="dealsSummery">
            {getDealsSummery(deals.length)}
         </h2>

         <div className="dealsList">
            {DealsJsx}
         </div>
      </div>
   )
};

const mapStateToProps = (state) => ({
   deals: getVisibleDeals(state.deals, state.sorters.sortBy, state.filters)
})

export default connect(mapStateToProps)(DealsList);



