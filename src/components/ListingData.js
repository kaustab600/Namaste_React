import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

/**
 *
 * @param string type
 * @returns array
 */
function getDynamicIndex(type) {
  if (this instanceof Array) {
    const res = this.find((element) => element["cardType"] === type);
    return res;
  } else {
    const objArray = Object.keys(this);
    objArray.forEach((element) => {
      if (this[curr]["cardType"] === type) {
        return this[curr]?.data?.data?.cards;
      }
    });
  }
}

//Object.prototype.getDynamicIndex = getDynamicIndex;
Array.prototype.getDynamicIndex = getDynamicIndex;
/**
 * NOTE: NOT using Object.prototype above bcuz it creates this issue in React.:
 * https://github.com/facebook/react/issues/21091
 */

const ListingData = ({API,searchData,setSearchData,allData,setAllData,ChildComponent}) => {
  /**
   * Getting allResturant list from API.
   */
  useEffect(() => {
    const callApi = async () => {
      try {
        const jsonData = await fetch(API);
        const rawData = await jsonData.json();
        const getResturantData =
          rawData?.data?.cards.getDynamicIndex("seeAllRestaurants");
        setAllData(getResturantData?.data?.data?.cards);
        setSearchData(getResturantData?.data?.data?.cards);
      } catch (error) {
        console.log(error);
      }
    };
    callApi();
  }, []);

  if (allData.length === 0) {
    return <Shimmer />
  } else {
    if (searchData.length === 0) {
      return (
        <>
          <h1>No Resturant Found</h1>
        </>
      )
    } else {
      return (
        // Always provide {key} on the Component not inside it.like below.
        searchData.map((curr) => {
          //return <ResturantCards {...curr.data} key={curr.data.uuid} />
          /**
           * We acnnot modify the components props after we call it
           * Like Below, ChildComponent key or prop wont get modified
           * if directly called from the parent as prop like here
           * <ListingData ChildComponent={<ResturantCards />} />
           */
          // ChildComponent.key = curr.data.uuid;
          // ChildComponent.props = {...curr.data};
          //return <>{childComponent()}</>;
          return <ChildComponent {...curr.data} key={curr.data.uuid} />;
        })
      );
    }
  }
};

export default ListingData;
