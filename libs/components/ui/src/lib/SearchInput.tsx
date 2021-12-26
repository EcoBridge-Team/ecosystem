import React, { useState } from 'react';
import { SearchIcon, XIcon } from '@heroicons/react/outline';

export function SearchInput({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <div className="w-auto">
      <div className="flex border-2 m-3 rounded-md w-80 md:w-min xl:mr-12">
        <input
          className="p-2 w-full md:w-56 lg:w-72 border-0 rounded-l-md text-green-700"
          type="search"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="grid place-items-center">
          {filteredData.length === 0 ? (
            <SearchIcon className="h-5 w-5 text-green-700 mr-2" />
          ) : (
            <XIcon
              className="h-5 w-5 text-green-800 mr-2"
              id="clearBtn"
              onClick={clearInput}
            />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                href={value.link}
                key={key}
                target="_blank"
                rel="noreferrer"
              >
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
