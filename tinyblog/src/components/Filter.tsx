import React from 'react';

type Props = {
  setTagFilter: React.Dispatch<React.SetStateAction<string>>;
};

const Filter = (set: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    set.setTagFilter(e.target.value);
  };

  return (
    <div className='filter'>
        <form className="form-filter">
          <label>Filter Tags: </label>
          <select onChange={handleChange}>
            <option value="all">All</option>
            <option value="american">American</option>
            <option value="english">English</option>
            <option value="love">Love</option>
            <option value="magical">Magical</option>
            <option value="mystery">Mystery</option>
          </select>
        </form>
    </div>
  );
};

export default Filter;
