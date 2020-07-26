import compareDealsFuncs from './compareDealsFuncs';

// Get visible deals
export default (deals, sortBy, filters) => {
   const { searchText, selectedHostingOptions, selectedRatings, pricesRange } = filters;
   const [minPrice, maxPrice] = pricesRange;

   function isDealMatch({ hotelName, price, rating, hostingType }) {
      const isWithinPriceRange = (
         minPrice <= price
         &&
         maxPrice >= price
      );

      const isSearchMatch = hotelName.toLowerCase().includes(searchText.toLowerCase());
      const isHostingTypeMatch = selectedHostingOptions[hostingType];
      const isRatingMatch = selectedRatings[rating];

      return isWithinPriceRange && isSearchMatch && isHostingTypeMatch && isRatingMatch;
   }

   const compareFunc = compareDealsFuncs[sortBy];
   return deals.filter(isDealMatch).sort(compareFunc);
};
