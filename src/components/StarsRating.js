import React from 'react';
import ReactStars from 'react-stars';

import { maxRatingStars } from '../consts';

export default ({ rating, className, includeUnmarkedStars}) => (
   <div className={className}>
      <ReactStars
         count={includeUnmarkedStars ? maxRatingStars : rating}
         size={30}
         edit={false}
         value={includeUnmarkedStars ? maxRatingStars - rating : 0}
         color1='#F6B451' //glow
         color2='#6461BD' //not-glow
      />
   </div>
);
