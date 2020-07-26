import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MainPage from './components/pages/MainPage';
import LoadingPage from './components/pages/LoadingPage';
import configureStore from './store/configureStore';
import fetchAppData from './utils/fetchAppData';


import 'normalize.css/normalize.css';
import './styles/base/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


ReactDOM.render(<LoadingPage />, document.getElementById('app'));

const store = configureStore();
store.dispatch(fetchAppData()).then(renderApp);

//renderApp();
let hasRendered = false;
function renderApp() {
   if (hasRendered)
      return;

   const jsx = (
      <Provider store={store}>
         <MainPage />
      </Provider>
   );

   ReactDOM.render(jsx, document.getElementById('app'));
   hasRendered = true;
}

 
