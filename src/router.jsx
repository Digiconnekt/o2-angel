import { createBrowserRouter } from "react-router-dom";

import HeaderFooter from "./layouts/HeaderFooter";

import Home from "./pages/Home";
import About from "./pages/About";

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
    ],
  },
]);

export default router;
