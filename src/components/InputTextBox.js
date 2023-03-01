import { useContext, useState } from "react"
import InputContext from "../utils/InputContext"

/**
 * NOTE:
 * Context is just an alternative to prop drilling.
 *
 * Here we cannot create the useState() & pass the inputVal via "Provider".
 * Bcuz "Provider" can only provide the "value" to children below it not above or siblings.
 *
 * Here used a hack of lifting state-up to make this work.
 * By creating useState on the Parent component (<App> on reactFile.js)
 * where i can use "Provider".
 *
 */
const InputTextBox = () => {
  //const [inputVal, setInputVal] = useState("");
  const [inputVal, setInputVal] = useContext(InputContext);
  return (
    <input type="text" value={inputVal} placeholder="Test Input Context" onChange={e => { setInputVal(e.target.value)} }/>
  )
}

export default InputTextBox;
