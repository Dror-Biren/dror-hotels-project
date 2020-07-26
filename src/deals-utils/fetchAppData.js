
import { dealsDemoData, dealsDemoServerUrl } from '../utils/dealsDemoData';
import { setDeals } from '../actions/deals';
const isDemoMode = true;

export default () => fetchAppData;

const fetchAppData = (dispatch, getState) => new Promise(
   function (resolve, reject) {
      const requestCallback = createRequestCallback(dispatch, resolve, reject);
     
      httpRequest(dealsDemoServerUrl, requestCallback);
   }
);

const createRequestCallback = (dispatch, resolve, reject) => (
   (responseBody) => {
      //console.log(responseBody);
      const dealsData = JSON.parse(isDemoMode ? dealsDemoData : responseBody);
      try {
         // JSON.parse() can throw an exception if not valid JSON
         dispatch(setDeals(dealsData));
         resolve();
      } catch (e) {
         reject(e);
      }
   }
);

function httpRequest(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
}







