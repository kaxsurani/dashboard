import React, { useState } from 'react';

const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Dropdown</label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
