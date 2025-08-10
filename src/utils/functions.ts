export const getDashboardPath = (userRole: 'admin' | 'user') => {
  switch (userRole) {
    case 'user':
      return '/user/dashboard';

    case 'admin':
      return '/admin/dashboard';

    default:
      return undefined;
  }
};

export const getProfilePath = (userRole: 'admin' | 'user') => {
  switch (userRole) {
    case 'user':
      return '/user/profile';

    case 'admin':
      return '/admin/profile';

    default:
      return undefined;
  }
};
