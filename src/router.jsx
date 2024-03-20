import { createBrowserRouter } from "react-router-dom";

import HeaderFooter from "./layouts/HeaderFooter";

import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Digiconnekt from "./pages/Partners/Digiconnekt";
import Buildnetic from "./pages/Partners/Buildnetic";
import Contact from "./pages/Contact";

import Blogs from "./pages/Blogs";
import Blog1 from "./pages/Blogs/Blog1";

import Error404 from "./pages/Errors/Error404";
import Process from "./pages/Investments/Process";
import Benefits from "./pages/Investments/Benefits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooter />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/investments/process",
        element: <Process />,
      },
      {
        path: "/investments/benefits",
        element: <Benefits />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/partners/digiconnekt",
        element: <Digiconnekt />,
      },
      {
        path: "/partners/buildnetic",
        element: <Buildnetic />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/natural-healing-for-the-body",
        element: <Blog1 />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
