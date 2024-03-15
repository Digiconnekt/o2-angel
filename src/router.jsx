import { createBrowserRouter } from "react-router-dom";

import HeaderFooter from "./layouts/HeaderFooter";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Blog from "./pages/Blogs";
import Blog1 from "./pages/Blogs/Blog1";

import Error404 from "./pages/Errors/Error404";

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
        path: "/blogs",
        element: <Blog />,
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
