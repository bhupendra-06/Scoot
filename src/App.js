import Home from "./components/home/Home";
import { Header } from "./components/home/Header";
import About from "./components/about/About";
import Location from "./components/location/Location";
import Careers from "./components/careers/Careers";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() { 


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Header />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/location",
      element: (
        <>
          <Header />
          <Location />
          <Footer />
        </>
      ),
    },
    {
      path: "/careers",
      element: (
        <>
          <Header />
          <Careers />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
