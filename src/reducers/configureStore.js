import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import filtersReducer from './filters';
import sortersReducer from './sorters';
import dealsReducer from './deals';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
   const store = createStore(
      combineReducers({
         filters: filtersReducer,
         sorters: sortersReducer,
         deals: dealsReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
   );

   return store;
};
