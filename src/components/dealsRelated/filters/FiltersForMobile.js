import React, { Component } from 'react';
import Expand from 'react-expand-animated';

import FiltersContent from './FiltersContent';

export default class extends Component {
   state = { isExpended: false };

   toggleOpen = () => {
      this.setState(prevState => ({ isExpended: !prevState.isExpended }));
   };

   render() {
      return (
         <div className="invisible-PC">
            <div className="filter_block filter-expand-block">
               <img
                  className="filter-expend-button"
                  onClick={this.toggleOpen}
                  src= {
                     this.state.isExpended ?
                     "/images/close‏‏ExpandIcon.png" :
                     "/images/expandIcon.png"
                  }
               />

               <div className="filters_title">
                  סינון תוצאות
               </div>
            </div>

            
            <Expand
               className="filter_last-block"
               open={this.state.isExpended}>
               <FiltersContent />
            </Expand>
         </div>
      );
   }
}
