import React from 'react';
import { connect } from 'react-redux';

import { maxRatingStars } from '../../consts/filters';
import { toggleSelectRatingOption } from '../../actions/filters';
import Rating_option from './Rating_option';



const SelectRatings = ({ toggleSelectRatingOption }) => {
   const ratingsOptions = [];
   for (let i = 1; i <= maxRatingStars; i++)
      ratingsOptions[i] = (
         <Rating_option 
            key={i}
            rating={i} 
            actionWhenToggleSelect={() => toggleSelectRatingOption(i)}
         />
      );

   return (
      <div>
         <div className="filters_title">
            דירוג מלון
         </div>
         <div className="filters_options">
            {ratingsOptions}
         </div>
      </div>
   );

};


const mapDispatchToProps = (dispatch, props) => ({
   toggleSelectRatingOption: (rating) => dispatch(toggleSelectRatingOption(rating))
});

export default connect(undefined, mapDispatchToProps)(SelectRatings);