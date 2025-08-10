import { usePannelContext } from '@src/layouts/pannel-layout';
import type { AuthType } from '@src/stores/auth-store';
import { getDashboardPath } from '@src/utils/functions';
import { LayoutDashboard, UsersRound } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router';
import { twMerge } from 'tailwind-merge';

const getMenuItems = (
  authRole: AuthType['role']
): {
  path: string;
  name: string;
  icon: React.ReactNode;
  requiredAuthRoles: AuthType['role'][];
}[] => [
  {
    path: getDashboardPath(authRole) ?? '/',
    name: 'Dashboard',
    icon: <LayoutDashboard className="size-5" />,
    requiredAuthRoles: ['admin', 'user'],
  },
  {
    path: '/admin/users',
    name: 'Users',
    icon: <UsersRound className="size-5" />,
    requiredAuthRoles: ['admin'],
  },
];

export default function SidebarMenu({
  authRole = 'user',
}: {
  authRole?: AuthType['role'];
}) {
  const { pathname } = useLocation();

  const { isSidebarExpanded } = usePannelContext();
  const menuItems = useMemo(() => getMenuItems(authRole), [authRole]);

  return (
    <ul className="space-y-1 py-3">
      {menuItems.map((item) =>
        item.requiredAuthRoles.includes(authRole) ? (
          <li
            key={item.path}
            className={twMerge(
              'px-4 py-2 rounded-sm hover:bg-gray-800',
              pathname.startsWith(item.path) ? 'bg-gray-800' : ''
            )}
          >
            <Link
              to={item.path}
              className="w-full h-full flex gap-2 items-center"
            >
              {item.icon}
              <AnimatePresence>
                {isSidebarExpanded && (
                  <motion.span
                    className="whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </li>
        ) : null
      )}
    </ul>
  );
}
