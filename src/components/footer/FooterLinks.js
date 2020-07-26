import React from 'react';
import { footerToolbarOptions } from '../../consts/links';

import LinksColumn from './LinksColumn';

export default () => {
   const optionsGroupsJsx = [];
   for (const title in footerToolbarOptions) {
      optionsGroupsJsx.push(
         <LinksColumn
            key={title}
            title={title}
            options={footerToolbarOptions[title]}
         />
      );
   }
   return (
      <div className="footer-links">
         <img
            className="footer-logo"
            src="/images/logo.png"
         />
         <div className="footer-links-body">
            {optionsGroupsJsx}
         </div>
      </div>
   );
};