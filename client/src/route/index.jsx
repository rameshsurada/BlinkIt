import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import App from "../App";
import Search from "../components/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "search",
        element: <SearchPage />
      },
      {
        path: "test",
        element: <Search />
      }
    ]
  }
]);

export default router;
