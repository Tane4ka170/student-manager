import App from "@/layouts/App";
import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const AppRoute = () => {
  return <div>AppRoute</div>;
};

export default AppRoute;
