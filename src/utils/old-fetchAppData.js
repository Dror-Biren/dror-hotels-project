const request = require('request');

import dealsDemoData from './dealsDemoData';
import { setDeals } from '../actions/deals';

export default () => fetchAppData;

const fetchAppData = (dispatch, getState) => new Promise(
   function (resolve, reject) {
      const requestCallback = createRequestCallback(dispatch, resolve, reject);
      request("http://www.google.com", requestCallback);
   }
);

const createRequestCallback = (dispatch, resolve, reject) => (
   (err, response, body) => {
      // in addition to parsing the value, deal with possible errors
      if (err)
         return reject(err);

      try {
         // JSON.parse() can throw an exception if not valid JSON
         const convertedData = JSON.parse(dealsDemoData || body);
         dispatch(setDeals(convertedData));
         resolve();
      } catch (e) {
         reject(e);
      }
   }
);







