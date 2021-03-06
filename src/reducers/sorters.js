import reducersActions from '../consts/reducersActions';
import { sorterKeys } from '../consts/sorters';

const { SET_SORT_BY } = reducersActions.SORTERS;


const sorterReducerDefaultState = {
   sortBy: sorterKeys.WORTHWHILE
};

export default (state = sorterReducerDefaultState, action) => {
   //console.log({action})
   switch (action.type) {

      case SET_SORT_BY:
         return {
            ...state,
            sortBy: action.sorter
         };  
      
      default:
         return state;
   }
};