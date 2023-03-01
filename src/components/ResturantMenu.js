import { RESTURANT_MENU_API, IMG_URL } from "../../constants";
import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

async function getMenu(id){
  try {
    const jsonData = await fetch(RESTURANT_MENU_API+id)
    const rawData = await jsonData.json()
    return rawData
  } catch(error) {
    console.log(error)
  }
}
const ResturantMenu = () => {
  const {id} = useParams()
  const [menuData, setMenuData] = useState({})

  useEffect(() => {
    const fetched_Json_MenuData = getMenu(id)
    fetched_Json_MenuData.then((menu_data) => {
      setMenuData(menu_data.data);
    });
  },[])

  return (!menuData.hasOwnProperty('id')) ? (
    <Shimmer />
  ) : (
    <>
      <h1>{menuData?.name}</h1>
      <img src={IMG_URL + menuData?.cloudinaryImageId} alt={menuData?.name+" image"} />
      <div className="menu-wrapper">
        <ul>
          { Object.values(menuData?.menu?.items).map((curr) => {
            // Using Object.values() instead of Object.keys() bcuz we need values.
            return <li>{curr.name}</li>;
          }) }
        </ul>
      </div>
    </>
  );
};

export default ResturantMenu;
