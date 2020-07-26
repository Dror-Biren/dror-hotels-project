/*
import React from 'react';

import FiltersContent from './FiltersContent';

export default () => (
   <div className="filters">
      <div className="filter_block">
         <div className="filters_title">
            סינון תוצאות
         </div>
      </div>


         <FiltersContent/>
   </div>
);
*/



import React, { Component } from 'react';
import Expand from 'react-expand-animated';

import FiltersContent from './FiltersContent';
 
export default class extends Component {
  state = { isExpended: screen.width > 600 };
 
  toggleOpen = () => {
    this.setState(prevState => ({ isExpended: !prevState.isExpended }));
  };
 
  render() {
    return (
      <div className="filters">
         <div className="filter_block filter_first-block">
            <div
               className="filter-button-expend" 
               onClick={this.toggleOpen}>
               {this.state.isExpended ? "🔼" : "🔽"}
            </div>

            <div className="filters_title">
               סינון תוצאות
            </div>   
         </div>
        <Expand 
            className="filter_last-block" 
            open={this.state.isExpended}>
            <FiltersContent/>
        </Expand>
      </div>
    );
  }
}
 




