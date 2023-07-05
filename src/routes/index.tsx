import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/LogIn";
import NotFound from "../pages/NotFound";
import Counter from "../pages/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
