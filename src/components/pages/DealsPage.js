import React from 'react';

import Sorters from '../sorters/Sorters';
import DealsList from '../deals/DealsList';
import Filters from '../filters/Filters';

import ContactUs from '../footer/ContactUs';
import FooterLinks from '../footer/FooterLinks';
import SocialMediaLinks from '../footer/SocialMediaLinks';

export default () => (
   <div>  
      <div className="page-content">
         <div className="pageCenter">
            <Sorters/>
            <DealsList/>
         </div>
         <Filters/>
      </div>

      <ContactUs/>
      <FooterLinks/>
      <SocialMediaLinks/>
   </div>
);


