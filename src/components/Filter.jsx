import React from 'react';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      Filter contacts by name:
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
