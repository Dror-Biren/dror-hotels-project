import reducersActions from '../consts/reducersActions';
const { SET_SORT_BY } = reducersActions.SORTERS;

export const setSortBy = (sorter) => ({
   type: SET_SORT_BY,
   sorter
 });