import React from 'react';
import moment from 'moment';

import StarsRating from '../StarsRating';
import DealTimes from './DealTimes';

export default ({ hotelName, rating, startTime, finishTime, hostingType }) => (
   <div className="deal-details">
      <h2>
         {hotelName}
      </h2>

      <StarsRating
         rating={rating}
         className="deal-rating"
      />

      <DealTimes
         startTime={moment(startTime)}
         finishTime={moment(finishTime)}
         hostingType={hostingType}
      />
   </div>
);



