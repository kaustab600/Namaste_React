import React, { useState, useEffect, lazy } from "react";
import { RESTURANT_API } from "../../constants";
import InputTextBox from "./InputTextBox";
import ListingData from "./ListingData";
import ResturantCards from "./ResturantCards";
import Search from "./Search";

const Body = () => {
  const [searchData, getSearchData] = useState([]);
  // To store all data list for searching.
  const [allResturants, setAllResturants] = useState([]);
  return (
    <>
      <Search
        placeholder="Search Resturants ..."
        searchData={allResturants}
        setSearchData={getSearchData}
      />
      {/**
      * To Test useContext using InputTextBox.
      * Check the <Header> & <AboutUs> page, whatever u type here, will also reflect on them.
      * central place to store the data ( context ).
      */
      }
       <InputTextBox/>
      {/**
       * Using searchData & setSearchData  as props
       * to handle No-Result-Behaviour  inside <ListingData/>
       */
      }
       <div className="cards-wrapper">
        <ListingData
          API={RESTURANT_API}
          searchData={searchData}
          setSearchData={getSearchData}
          allData={allResturants}
          setAllData={setAllResturants}
          ChildComponent={ResturantCards}
        />
       </div>
    </>
  );
};

export default Body;
