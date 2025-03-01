import { ProtectedRoute } from "@/components/auth";
import App from "@/layouts/App";
import {
  AddStudent,
  GetStudents,
  Home,
  Login,
  Register,
  UpdateStudent,
} from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/students",
        element: (
          <ProtectedRoute>
            <GetStudents />
          </ProtectedRoute>
        ),
      },
      {
        path: "/students/add",
        element: (
          <ProtectedRoute>
            <AddStudent />
          </ProtectedRoute>
        ),
      },
      {
        path: "/students/edit/:id",
        element: (
          <ProtectedRoute>
            <UpdateStudent />
          </ProtectedRoute>
        ),
        loader: ({ params }) => {
          if (!/^[0-9]$/i.test(params.id!)) {
            throw new Response("Bad Request", {
              statusText: `Students with id ${params.id} not found`,
              status: 400,
            });
          }
          return true;
        },
      },
    ],
  },
]);

const AppRoute = () => {
  return <RouterProvider router={route} />;
};

export default AppRoute;
