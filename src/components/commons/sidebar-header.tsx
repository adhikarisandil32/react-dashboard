import { usePannelContext } from '@src/layouts/pannel-layout';
import { useAuthStore } from '@src/stores/auth-store';
import { getProfilePath } from '@src/utils/functions';
import { clearLocalStorage } from '@src/utils/local-storage';
import { ChevronsUpDown, LogOut, User } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';

export default function SidebarHeader() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { isSidebarExpanded } = usePannelContext();
  const { auth } = useAuthStore();

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    setShowMenu((prev) => !prev);
  };

  return (
    <div
      className="relative"
      onClick={toggleMenu}
    >
      <div className="min-h-12 flex items-center justify-between cursor-pointer rounded-md p-1 px-2 hover:bg-gray-800">
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-full border border-gray-200 grid place-items-center">
            AU
          </div>

          <AnimatePresence>
            {isSidebarExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-bold">{auth?.name}</p>
                <p className="text-sm">{auth?.email}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {isSidebarExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronsUpDown className="size-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showMenu && <SidebarHeaderClickMenu setShowMenu={setShowMenu} />}
    </div>
  );
}

function SidebarHeaderClickMenu({
  setShowMenu,
}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { auth, setAuth } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearLocalStorage();
    setAuth(undefined);
    navigate('/');
  };

  const hideProfileMenu = () => setShowMenu(false);

  useEffect(() => {
    document.addEventListener('click', hideProfileMenu);

    return () => {
      document.removeEventListener('click', hideProfileMenu);
    };
  }, []);

  return (
    <div className="absolute top-[calc(100%+10px)] right-0 md:left-[calc(100%+10px)] md:top-0 border border-gray-400 bg-gray-50 rounded-md p-1 min-w-40">
      <Link
        to={getProfilePath(auth!.role) ?? '/'}
        className="inline-block px-3 py-2 hover:bg-gray-100 rounded-sm w-full text-left space-x-1 text-gray-800"
      >
        <User className="inline align-middle size-5" />
        <span>Profile</span>
      </Link>

      <button
        className="cursor-pointer inline-block px-3 py-2 hover:bg-red-200 rounded-sm w-full text-left space-x-1 text-red-600 bg-red-100"
        onClick={handleLogout}
      >
        <LogOut className="inline align-middle size-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}
