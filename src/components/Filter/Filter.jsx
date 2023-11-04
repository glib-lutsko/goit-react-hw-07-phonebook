import { setFilter } from 'components/redux/filterSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <form>
      <label>
        Find contacts by name
        <input type="text" onChange={handleInputFilter} />
      </label>
    </form>
  );
};
