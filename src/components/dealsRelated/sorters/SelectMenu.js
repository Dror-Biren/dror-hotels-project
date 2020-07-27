import React from 'react';
import Select from 'react-select';

/*
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
*/

export default ({ options, label, onChange }) => (
   <div className="sorters-select-container">
      <Select
         className="sorters-select"
         value={{ label }}
         onChange={onChange}
         options={options}
         autoFocus={false}
         isRtl={true}
      />

      <h3 className="sorters-select-label">
        :מיין לפי
      </h3>
   </div>
);

/*
state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
*/
