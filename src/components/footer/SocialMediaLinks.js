import React from 'react';

import { socialMadiaImages } from '../../consts';

const createSocialMadiaLink = (url, index) => (
   <img 
      key={index}
      className="socialMadiaLink"
      src={url}
   />
);


export default () => (
   <div className="socialMadiaLinks">
      <div className="socialMadiaLinks-body">
         {socialMadiaImages.map(createSocialMadiaLink)}
      </div>

      <p>
        Alray כל הזכויות שמורות © 
      </p>
   </div>
);