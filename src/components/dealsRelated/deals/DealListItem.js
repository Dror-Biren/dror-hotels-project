import React from 'react';

import DealMainDetails from './DealMainDetails';
import DealPrice from './DealPrice';

export default ({deal}) => (
   <div className="deal">   
      <DealPrice price={deal.price}/> 
      <DealMainDetails {...deal}/>
      <img className="deal-img" src={deal.imgSrc}/>       
   </div>
);

