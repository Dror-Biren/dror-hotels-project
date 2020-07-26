import { 
   reducersActions, 
   pricesRangeLimits, 
   hostingTypesOptions, 
   maxRatingStars 
} from '../consts';

const { 
   SET_SEARCH,
   SET_PRICES_RANGE,
   TOGGLE_SELECT_OF_RATING_OPTION,
   TOGGLE_SELECT_OF_HOSTING_OPTION
} = reducersActions.FILTERS;


const selectedHostingOptions = {};
for(const option of hostingTypesOptions)
   selectedHostingOptions[option] = true;

const selectedRatings = {};
for(let i=1; i<=maxRatingStars; i++)
   selectedRatings[i] = true;


   
const filtersReducerDefaultState = {
   searchText: '',
   pricesRange: pricesRangeLimits,
   selectedHostingOptions,
   selectedRatings
};

export default (state = filtersReducerDefaultState, action) => {
   //console.log({action})
   switch (action.type) {
      case SET_SEARCH:
         return {
            ...state,
            searchText: action.text
         };

      case SET_PRICES_RANGE:
         return {
            ...state,
            pricesRange: action.pricesRange
         }

      case TOGGLE_SELECT_OF_RATING_OPTION:
         return {
            ...state,
            selectedRatings: toggleValueOfKey(state.selectedRatings, action.rating)
         } 

      case TOGGLE_SELECT_OF_HOSTING_OPTION:
         return {
            ...state,
            selectedHostingOptions: toggleValueOfKey(state.selectedHostingOptions, action.option)
         } 
    
      
      default:
         return state;
   }
};

function toggleValueOfKey(obj, key) {
   return {
      ...obj,
      [key]: !obj[key]
   };
}