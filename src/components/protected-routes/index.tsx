import { Navigate } from 'react-router';
import { useAuthStore } from 'src/stores/auth-store';
import NoPermissionComponent from './no-permission';

export function NonAuthenticatedRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  const { auth } = useAuthStore();

  if (auth) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export function AdminProtectedRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  const { auth } = useAuthStore();

  if (!auth || (auth && auth.role !== 'admin')) {
    return <NoPermissionComponent />;
  }

  return <>{children}</>;
}

export function PublicProtectedRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  const { auth } = useAuthStore();

  if (!auth || (auth && auth.role !== 'user')) {
    return <NoPermissionComponent />;
  }

  return <>{children}</>;
}
