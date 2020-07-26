import { sorterOptions, ratingWorthwhileValueCompareToPrice, maxRatingStars } from '../consts';

const getCompareFunc = (evaluateDeal) => (
   (deal1, deal2) => evaluateDeal(deal1) - evaluateDeal(deal2)
);


export default {
   [sorterOptions.CHEAP]: getCompareFunc(
      ({ price }) => price
   ),

   [sorterOptions.EXPENSIVE]: getCompareFunc(
      ({ price }) => -price
   ),


   [sorterOptions.POPULAR]: getCompareFunc(
      ({ rating }) => -rating
   ),


   [sorterOptions.UNPOPULAR]: getCompareFunc(
      ({ rating }) => rating
   ),


   [sorterOptions.WORTHWHILE]: getCompareFunc(
      getWorthwhileValue
   )
};

function getWorthwhileValue({ rating, price, startTime, finishTime }) {
   const milSecondsInDay = 1000 * 60 * 60 * 24;
   const dealDays = (finishTime - startTime) / milSecondsInDay;
   const pricePerDay = price / dealDays;

   const normalizedRating = 1 - rating / maxRatingStars;
   return pricePerDay + ratingWorthwhileValueCompareToPrice * normalizedRating;
}