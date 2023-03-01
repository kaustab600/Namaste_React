import LOGO_IMG from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import {useContext} from "react";
import InputContext from "../utils/InputContext";

const Title = () => {
  const inputText = useContext(InputContext);
  return (
    <div className="Logo">
      {/* <img alt="logo" src={LOGO_IMG} /> */}
      <h5>Logo {inputText}</h5>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <ul className="navigation">
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/" style={({isActive}) => {
            return isActive ? {color: 'blue',} : null
          }}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About</NavLink>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/instamart">Instamart</Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
