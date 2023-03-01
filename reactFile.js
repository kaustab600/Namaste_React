import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, BrowserRouter, Outlet } from 'react-router-dom';
import Aboutus from './src/components/Aboutus';
import Contactus from './src/components/Contactus';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import Shimmer from './src/components/Shimmer';
import ErrorElement from './src/components/ErrorElement';
import ResturantCards from './src/components/ResturantCards';
import Instamart from './src/components/Instamart';
import Accordion from './src/components/Accordion';
//import ResturantMenu from './src/components/ResturantMenu';

import InputContext from "./src/utils/InputContext";

const ResturantMenu = lazy(() => import("./src/components/ResturantMenu"));

const AppLayout = () => {
  const [inputVal, setInputVal] = useState("");
  return (
    <>
      {/**
        * NOTE:
       *  Context is just an alternative to prop drilling.
       * Not used for like handling an state on one compoenent and reflecting it on another.
       */
      }
      <InputContext.Provider value={[inputVal, setInputVal]}>
        <Header />
        <Outlet />
        <Footer />
      </InputContext.Provider>
    </>
  );
}
const appRoute = createBrowserRouter([
  {
    /**
     * By removing the path: compoenent the route Becomes a layout route
     * which uses <Outlet/> to render all the children
     * & the chikdren will have <AppLayout/> as common component.
     */
    // path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        path: "/",
        element: <Body />,
      },
      {
        path: "about-us",
        element: <Aboutus />,
      },
      {
        path: "contact-us",
        element: <Contactus />,
      },
      {
        path: "/menu/:id",
        element: <Suspense fallback={<h2>Loading ResturantMenu</h2>}><ResturantMenu /></Suspense>,
      },
      {
        element: <Instamart/>,
        children: [
          {
            path: '/instamart',
            element: <Accordion/>
          }
        ]
      }
    ],
  },
]);
// named export method in js
export function functionForExportingCode() {
  const h1Ele = React.createElement("h1",{ key: 1},'Hello');
  const h2Ele = React.createElement("h2",{ key: 2},"World");
  const divEle = React.createElement('div', { className: 'container-div'},[h1Ele,h2Ele]);
  ReactDOM.createRoot(document.querySelector(".reactRootEl")).render(
    <React.StrictMode>
      <RouterProvider router={appRoute} fallbackElement={<Shimmer />} />
      {/* {RouterProvider({<Shimmer/>,appRoute}} */}
    </React.StrictMode>
  );
}

// default export method in js
//export default functionForExportingCode;
