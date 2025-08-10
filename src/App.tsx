import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import HomePage from './pages/home-page';
import LoginPageAdmin from './pages/login/login-admin';
import LoginPageUser from './pages/login/login-user';
import LoginPage from './pages/login';
import NotFound from './pages/not-found';
import {
  AdminProtectedRoutes,
  NonAuthenticatedRoutes,
  PublicProtectedRoutes,
} from './components/commons/protected-routes';
import AdminPage from './pages/admin';
import UserPage from './pages/user';
import AdminEcommerceDashboard from './pages/admin/dashboard';
import PublicUsersPage from './pages/admin/users/page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PublicUserDashboard from './pages/user/dashboard';
import AdminProfilePage from './pages/admin/profile';
import UserProfilePage from './pages/user/profile';

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
    element: <AdminPage />,
    children: [
      {
        index: true,
        element: (
          <AdminProtectedRoutes>
            <NotFound />
          </AdminProtectedRoutes>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <AdminProtectedRoutes>
            <AdminEcommerceDashboard />
          </AdminProtectedRoutes>
        ),
      },
      {
        path: 'users',
        element: (
          <AdminProtectedRoutes>
            <PublicUsersPage />
          </AdminProtectedRoutes>
        ),
      },
      {
        path: 'profile',
        element: (
          <AdminProtectedRoutes>
            <AdminProfilePage />
          </AdminProtectedRoutes>
        ),
      },
      {
        path: '*',
        element: (
          <AdminProtectedRoutes>
            <NotFound />
          </AdminProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: '/user',
    element: <UserPage />,
    children: [
      {
        index: true,
        element: (
          <PublicProtectedRoutes>
            <NotFound />
          </PublicProtectedRoutes>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <PublicProtectedRoutes>
            <PublicUserDashboard />
          </PublicProtectedRoutes>
        ),
      },
      {
        path: 'profile',
        element: (
          <PublicProtectedRoutes>
            <UserProfilePage />
          </PublicProtectedRoutes>
        ),
      },
      {
        path: '*',
        element: (
          <PublicProtectedRoutes>
            <NotFound />
          </PublicProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
