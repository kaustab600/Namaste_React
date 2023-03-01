import { Link } from "react-router-dom";
import { IMG_URL } from "../../constants";
// A type of listing structure for Resturant cards.
const ResturantCards = (props) => {
  return (
    <div className="cards">
      <Link to={"menu/" + props?.id}>
        <img
          src={IMG_URL + props?.cloudinaryImageId}
          alt={props?.name + " image"}
        />
        <h4>{props.name}</h4>
        <p>{props.area}</p>
      </Link>
    </div>
  );
};

export default ResturantCards;
