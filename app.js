/* Import & export will NOT work for file protocol URLs like file://documents/index.js
but will work for HTTPs/HTTP protocols URLs like http://localhost::3660/index.js */

import { functionForExportingCode as importedCode } from "./reactFile.js";
const divEle = document.createElement("div");
divEle.classList.add('reactRootEl');
document.querySelector("body").append(divEle);

importedCode();
// const heading = document.querySelector('.heading');
// heading.textContent += ' Hello';
// heading.innerText += ' Kaustab';
// console.log(React);

let obj1 = {
  sname: 'Kaustab',
  lname: 'Roy',
  roll: 16,
}
/* To freeze the obj1 uncomment below line
* i.e to prevent any modification even via shaloow copy
*/
//Object.freeze(obj1);

let obj2 = obj1; // shallow copy  .... still connected aftre copy.
let obj3 = {...obj1}; // deep copy ... disconnect after copy.
obj2.sname = 'piu'; // This line will modify the obj1 as well. ( shallow copy ).
obj3.sname = 'Tutan'; // This line will NOT modify the obj1. ( Deep copy ).
// console.log(obj2);
// console.log(obj1);
// console.log(obj3);

/**
 * How to modify obj properties via destructuring.
 */
const {sname: fname = 'DEV', lname,...rest} = obj1; // Fisrtly
obj1 = {fullname: `${fname} ${lname}`, ...rest};
console.log(obj1);

const demoObj = {
  data: [1, 2, 3, 4, 5],
  data2: { index1: 1, index2: 2, index3: 3, },
};
/**
 * using arrow function 'this' will be demoObj.
 */
// const getValue = () => {
//   console.log(this);
// };

/**
 * using normal function 'this' will be demoObj.data.
 */

const getValue = function(type) {
  if (this instanceof Object) {
    const objArray = Object.keys(this);
    // objArray.forEach((element) => {
    //   // if(this[curr]["cardType"] === type) {
    //   //   return this[curr]?.data?.data?.cards;
    //   // }
    //   debugger;
    //   console.log('hello');
    //   if(element === "3") {
    //     console.log('bye');
    //     return element;
    //   }
    // })

    /**
     * Try to use find instead of forEach() since it wont stop even after condition satisfaction.
     */
    const res = objArray.find(element => element === '3');
    // Return is MUST from the function. Otherwise it wont work. DONT rely on array function.
    return res;
  } else {
    this.forEach((element) => {
      // if (this[element]["cardType"] === type) {
      //   return this[curr]?.data?.data?.cards;
      // }
      console.log(element);
    });
  }
}

/**
 * setting the getValue on Object.prototype bcuz Array is also a Object
 * so if there be Arrray or Object calling the getValue. it can handle it.
 * But if i used Array.prototype then only Array elements could be able to use getValue().
 */
//Object.prototype.getValue = getValue;

//const result = demoObj?.data.getValue("seeAllRestaurants");
