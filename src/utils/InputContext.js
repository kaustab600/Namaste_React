import {createContext} from "react";
/**
 * NOTE: It is WRONG naming bcuz this in class compoenent this will be a Compoenent
 * & react component always starts with capital letters
 * It should be InputContext not inputContext.
 *
 * Context is just an alternative to prop drilling.
 */

const InputContext = createContext("");

export default InputContext;
