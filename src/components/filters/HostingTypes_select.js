import React from 'react';
import { connect } from 'react-redux';

import HostingTypeOption from './HostingType_option';

import { hostingTypesOptions } from '../../consts';
import { toggleSelectHostingOption } from '../../actions/filters';



const HostingTypes_select = ({ toggleSelectHostingOption }) => {
   const createOptionJsx = (optionName, index) => (
      <HostingTypeOption
         key={index}
         optionName={optionName}
         price={819}
         actionWhenToggleSelect={() => toggleSelectHostingOption(optionName)}
      />
   );

   return (
      <div>
         <div className="filters_title">
            בסיס אירוח
         </div>

         <div className="filters_options">
            {hostingTypesOptions.map(createOptionJsx)}
         </div>
      </div>
   );

};


const mapDispatchToProps = (dispatch, props) => ({
   toggleSelectHostingOption: (optionName) => dispatch(toggleSelectHostingOption(optionName))
});

export default connect(undefined, mapDispatchToProps)(HostingTypes_select);



