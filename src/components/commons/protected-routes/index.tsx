import { Navigate } from 'react-router';
import NoPermissionComponent from '../no-permission';
import { useAuthStore } from '@src/stores/auth-store';
import PannelLayout from '@src/layouts/pannel-layout';

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
    return (
      <PannelLayout>
        <NoPermissionComponent />
      </PannelLayout>
    );
  }

  return <PannelLayout>{children}</PannelLayout>;
}

export function PublicProtectedRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  const { auth } = useAuthStore();

  if (!auth || (auth && auth.role !== 'user')) {
    return (
      <PannelLayout>
        <NoPermissionComponent />
      </PannelLayout>
    );
  }

  return <PannelLayout>{children}</PannelLayout>;
}
