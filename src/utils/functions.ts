export const getDashboardPath = (userRole: 'admin' | 'user') => {
  switch (userRole) {
    case 'user':
      return 'user';

    case 'admin':
      return 'admin';

    default:
      return undefined;
  }
};
