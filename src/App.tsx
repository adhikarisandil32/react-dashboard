import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/home-page";
import LoginPageAdmin from "./pages/login/login-admin";
import LoginPageUser from "./pages/login/login-user";
import LoginPage from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    children: [
      {
        path: "admin",
        element: <LoginPageAdmin />,
      },
      {
        path: "user",
        element: <LoginPageUser />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
