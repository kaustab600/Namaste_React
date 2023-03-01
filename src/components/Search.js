import React, { useState } from "react";
/**
 *
 * @param string searchText
 * @param array dataList
 * @return array
 */
function filterSearchResult(searchText, searchData) {
  return searchData.filter((element) => {
    return element?.data?.name.toLowerCase().includes(searchText.toLowerCase());
  });
}

const Search = ({ placeholder, searchData, setSearchData }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyUpCapture={(e)=> {
          if (e.key === 'Enter') {
            document.querySelector('#searchBtn').click()
          }
        }}
      />
      <button
        id="searchBtn"
        onClick={() => {
          const filteredData = filterSearchResult(searchText, searchData);
          setSearchData(filteredData);
        }}
      >
        search
      </button>
    </div>
  );
};

export default Search;
