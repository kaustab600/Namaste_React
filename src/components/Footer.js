import { useContext } from "react";
import InputContext from "../utils/InputContext";

const Footer = () => {
  const inputText = useContext(InputContext)
  return (
    <div className="footer">copyright@{new Date(Date.now()).getFullYear()} {inputText}</div>
  );
};

export default Footer;
