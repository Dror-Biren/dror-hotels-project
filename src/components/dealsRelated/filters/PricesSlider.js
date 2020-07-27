import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import { setPricesRange } from '../../../actions/filters';
import { pricesRangeLimits } from '../../../consts/filters';


const CustomSlider = withStyles({
   thumb: {
      color: '#FFFFFF'
   },

   valueLabel: {
      color: '#7979E2',
   },

   track: {
      color: '#FFFFFF'
   }
})(Slider);


export function PricesSlider(props) {
   const [range, setRange] = React.useState(props.pricesRange);

   const handleChange = (event, newRange) => {
      //console.log("handleChange")
      props.setPricesRange(newRange);
      setRange(newRange);
   };

   return (
      <div>
         <div className="filters_title">
            טווח מחיר לאדם
         </div>

         <div className="pricesSlider-container">
            <div className="pricesSlider-limits">
               <p>{range[0]}$</p>
               <p>{range[1]}$</p>
            </div>

            <CustomSlider
               min={pricesRangeLimits[0]}
               max={pricesRangeLimits[1]}
               value={range}
               onChange={handleChange}
               valueLabelDisplay="auto"
               aria-labelledby="range-slider"
            />
         </div>
      </div>
   );
}

const mapStateToProps = (state) => ({
   pricesRange: state.filters.pricesRange
});

const mapDispatchToProps = (dispatch) => ({
   setPricesRange: (pricesRange) => dispatch(setPricesRange(pricesRange))
});

export default connect(mapStateToProps, mapDispatchToProps)(PricesSlider);