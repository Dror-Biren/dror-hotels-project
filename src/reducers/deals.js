import reducersActions from '../consts/reducersActions';
const { SET_ALL } = reducersActions.DEALS; // + { ADD, EDIT, REMOVE }

const dealsReducerDefaultState = [];
export default (state = dealsReducerDefaultState, action) => {
   switch (action.type) {
      /*
      case ADD:
         return [
            ...state,
            action.deal
         ];

      case REMOVE:
         const isDiffrentDeal = ({ id }) => id !== action.id;
         return state.filter(isDiffrentDeal);

      case EDIT:
         return state.map(deal => (
            deal.id === action.id ? {
               ...deal,
               ...action.updates
            } :
            deal
         ));
      */

      case SET_ALL:
         return action.deals;

      default:
         return state;
   }
};

