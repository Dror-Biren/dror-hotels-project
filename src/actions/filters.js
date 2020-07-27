import reducersActions from '../consts/reducersActions';
const { 
   SET_SEARCH,
   SET_PRICES_RANGE,
   TOGGLE_SELECT_OF_RATING_OPTION,
   TOGGLE_SELECT_OF_HOSTING_OPTION
} = reducersActions.FILTERS;


export const setSearch = (text = '') => ({
  type: SET_SEARCH,
  text
});

export const setPricesRange = (pricesRange) => ({
   type: SET_PRICES_RANGE,
   pricesRange
 });

export const toggleSelectRatingOption = (rating) => ({
   type: TOGGLE_SELECT_OF_RATING_OPTION,
   rating
});

export const toggleSelectHostingOption = (optionKey) => ({
   type: TOGGLE_SELECT_OF_HOSTING_OPTION,
   optionKey
});

