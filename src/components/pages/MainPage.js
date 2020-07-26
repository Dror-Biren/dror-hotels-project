import React from 'react';

import { pagesKeys } from '../../consts';
import DealsPage from './DealsPage';
import DemoPage from './DemoPage';
import Header from '../header/Header';

const pagesMap = {
   [pagesKeys.DEALS]: <DealsPage/>,
   [pagesKeys.CONTECT_US]: <DemoPage name="עמוד ליצירת קשר"/>,
   [pagesKeys.FLIGHTS]: <DemoPage name="עמוד לטיסות"/>,
   [pagesKeys.HOME_PAGE]: <DemoPage name="עמוד הבית"/>,
   [pagesKeys.ORGANIZED_TRIPS]: <DemoPage name="עמוד לטיולים מאורגנים"/>,
}

export default () => {
   const [innerPageKey, setInnerPageKey] = React.useState(pagesKeys.DEALS);

   return (
      <div className="app">
         <Header
            curPageKey={innerPageKey} 
            onLinkClicked={setInnerPageKey}
         />

         {pagesMap[innerPageKey]}
      </div>
   )
};