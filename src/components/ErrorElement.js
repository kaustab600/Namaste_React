import { useEffect, useState } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  const navigator = useNavigate();
  const [clicked, setClicked] = useState(false);
  useEffect(()=>{
    if(clicked) navigator(-1)
  },[clicked])
  return (
    <>
      <h1>{error.status}</h1>
      <h3>{error.statusText}</h3>
      <button onClick={()=>{setClicked(!clicked);}}>Go Back</button>
      <Link to="/">Go Home</Link>
    </>
  )
}

export default ErrorElement;
