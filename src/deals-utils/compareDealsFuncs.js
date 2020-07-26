import { sorterKeys, ratingWorthCompareToPrice } from '../consts/sorters';
import { maxRatingStars } from '../consts/filters';

const getCompareFunc = (evaluateDeal) => (
   (deal1, deal2) => evaluateDeal(deal1) - evaluateDeal(deal2)
);


export default {
   [sorterKeys.CHEAP]: getCompareFunc(
      ({ price }) => price
   ),

   [sorterKeys.EXPENSIVE]: getCompareFunc(
      ({ price }) => -price
   ),


   [sorterKeys.POPULAR]: getCompareFunc(
      ({ rating }) => -rating
   ),


   [sorterKeys.UNPOPULAR]: getCompareFunc(
      ({ rating }) => rating
   ),


   [sorterKeys.WORTHWHILE]: getCompareFunc(
      getWorthwhileValue
   )
};

function getWorthwhileValue({ rating, price, startTime, finishTime }) {
   const milSecondsInDay = 1000 * 60 * 60 * 24;
   const dealDays = (finishTime - startTime) / milSecondsInDay;
   const pricePerDay = price / dealDays;

   const normalizedRating = 1 - rating / maxRatingStars;
   return pricePerDay + ratingWorthCompareToPrice * normalizedRating;
}