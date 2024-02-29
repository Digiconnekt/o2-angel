import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import HeaderFooter from "./layouts/HeaderFooter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooter />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
