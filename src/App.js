import Home from "./components/home/Home";
import About from "./components/about/About";
import Location from "./components/Location";
import Careers from "./components/Careers";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Header } from "./components/home/Header";
import Footer from "./components/Footer";

function App() {
  const router =  createBrowserRouter([
    {
      path: "/",
      element: <><Header/><Home/><Footer/></>
    },
    {
      path: "/about",
      element: <><Header/><About/><Footer/></>
    },
    {
      path: "/location",
      element: <><Header/><Location/><Footer/></>
    },
    {
      path: "/careers",
      element: <><Header/><Careers/><Footer/></>
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
