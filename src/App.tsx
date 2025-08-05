import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import HomePage from './pages/home-page';
import LoginPageAdmin from './pages/login/login-admin';
import LoginPageUser from './pages/login/login-user';
import LoginPage from './pages/login';
import {
  AdminProtectedRoutes,
  NonAuthenticatedRoutes,
  PublicProtectedRoutes,
} from './components/protected-routes';
import NotFound from './pages/not-found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/home',
    element: <Navigate to="/" />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    children: [
      {
        index: true,
        element: <NotFound />,
      },
      {
        path: 'user',
        element: (
          <NonAuthenticatedRoutes>
            <LoginPageUser />
          </NonAuthenticatedRoutes>
        ),
      },
      {
        path: 'admin',
        element: (
          <NonAuthenticatedRoutes>
            <LoginPageAdmin />
          </NonAuthenticatedRoutes>
        ),
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <AdminProtectedRoutes>
        <></>
      </AdminProtectedRoutes>
    ),
  },
  {
    path: '/user',
    element: (
      <PublicProtectedRoutes>
        <></>
      </PublicProtectedRoutes>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
