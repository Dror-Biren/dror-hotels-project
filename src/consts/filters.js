export const ratingPrices = [600, 690, 750, 870, 970];

export const maxRatingStars = ratingPrices.length;

//export const hostingTypesOptions = ["ארוחת בוקר", "לינה"];

const hostingTypesKeys = {
   SLEEP: '0',
   BREAKFAST: '1'
};

export const hostingTypesData = {
   [hostingTypesKeys.BREAKFAST]: {
      label: "ארוחת בוקר",
      price: 620
   },
   [hostingTypesKeys.SLEEP]: {
      label: "לינה",
      price: 900
   }
};


export const pricesRangeLimits = [819, 6000];













