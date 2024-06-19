import Home from "./components/home/Home";
import About from "./components/About";
import Location from "./components/Location";
import Contact from "./components/Contact";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Header } from "./components/home/Header";

function App() {
  const router =  createBrowserRouter([
    {
      path: "/",
      element: <><Header/><Home/></>
    },
    {
      path: "/about",
      element: <><Header/><About/></>
    },
    {
      path: "/location",
      element: <><Header/><Location/></>
    },
    {
      path: "/contact",
      element: <><Header/><Contact/></>
    },

  ])
  return ( 
  // <div className="App">
  //     <Home/>
  // </div>
      <>
    <RouterProvider router={router}/>
      </>
  )
}

export default App;
