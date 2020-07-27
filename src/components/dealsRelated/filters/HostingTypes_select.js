import React from 'react';
import { connect } from 'react-redux';

import HostingTypeOption from './HostingType_option';

import { hostingTypesData } from '../../../consts/filters';
import { toggleSelectHostingOption } from '../../../actions/filters';



const HostingTypes_select = ({ toggleSelectHostingOption }) => {
   const hostingTypesOptions = [];
   for (const optionKey in hostingTypesData) {
      const { label, price } = hostingTypesData[optionKey];

      hostingTypesOptions.push(
         <HostingTypeOption
            key={optionKey}
            optionName={label}
            price={price}
            actionWhenToggleSelect={() => toggleSelectHostingOption(optionKey)}
         />
      );
   }

   return (
      <div>
         <div className="filters_title">
            בסיס אירוח
         </div>

         <div className="filters_options">
            {hostingTypesOptions}
         </div>
      </div>
   );

};


const mapDispatchToProps = (dispatch, props) => ({
   toggleSelectHostingOption: (optionKey) => dispatch(toggleSelectHostingOption(optionKey))
});

export default connect(undefined, mapDispatchToProps)(HostingTypes_select);



