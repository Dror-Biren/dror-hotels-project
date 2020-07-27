import React from 'react';
import { connect } from 'react-redux';
//import Select from 'react-select';

import SelectMenu from './SelectMenu';
import ButtonOption from './ButtonOption';
import { sorterOptionsData } from '../../../consts/sorters';
import { setSortBy } from '../../../actions/sorters';


const Sorters = ({ sortBy, setSortBy }) => {
   const buttonsOptions = [];
   const selectOptions = [];

   for (const optionKey in sorterOptionsData) {
      const { buttonText, selectMenuText, iconSrc } = sorterOptionsData[optionKey];
    
      selectOptions.push({
         value: optionKey,
         label: selectMenuText
      });

      if (buttonText)
         buttonsOptions.push(
            <ButtonOption
               key={optionKey}
               text={buttonText}
               iconSrc={iconSrc}
               isChosen={sortBy === optionKey}
               actionWhenClicked={() => setSortBy(optionKey)}
            />
         );
   }

   return (
      <div className="sorters">
         <SelectMenu
            label={sorterOptionsData[sortBy].selectMenuText}
            onChange={({value}) => setSortBy(value)}
            options={selectOptions}
         />

         <div className="sorters-buttonsMenu">
            {buttonsOptions}
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({
   sortBy: state.sorters.sortBy
})

const mapDispatchToProps = (dispatch, props) => ({
   setSortBy: (sorter) => dispatch(setSortBy(sorter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorters);

/*
 <div className="sorters-selectMenu">
            {selectOptions}
         </div>
*/