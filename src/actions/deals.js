
import reducersActions from '../consts/reducersActions';
const { SET_ALL } = reducersActions.DEALS; // + { ADD, EDIT, REMOVE }

/*
export const addDeal = (Deal) => ({
   type: ADD,
   Deal
});

export const editDeal = (id, updates) => ({
   type: EDIT,
   id,
   updates
});

export const removeDeal = (id) => ({
   type: REMOVE,
   id
});
*/

export const setDeals = (deals) => ({
   type: SET_ALL,
   deals
});


