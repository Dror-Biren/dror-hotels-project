import React from 'react';
import ReactStars from 'react-stars';

import { maxRatingStars } from '../consts';

export default ({ rating, className, includeUnmarkedStars, size=30 }) => (
   <div className={className}>
      <ReactStars
         count={includeUnmarkedStars ? maxRatingStars : rating}
         size={size}
         edit={false}
         value={includeUnmarkedStars ? maxRatingStars - rating : 0}
         color1='#F6B451' //glow
         color2='#6461BD' //not-glow
      />
   </div>
);
