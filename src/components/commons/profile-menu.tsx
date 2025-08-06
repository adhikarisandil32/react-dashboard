import { useAuthStore } from '@src/stores/auth-store';
import { ClipboardList, LogOut, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { clearLocalStorage } from '@src/utils/local-storage';
import { getDashboardPath } from '@src/utils/functions';
// import Modal from './modal';

export default function ProfileMenu() {
  const { auth } = useAuthStore();
  const navigate = useNavigate();

  return auth ? (
    <AuthenticatedUser />
  ) : (
    <button
      className="border border-indigo-600 text-gray-700 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
      onClick={() => navigate('/login/user')}
    >
      Login
    </button>
  );
}

function AuthenticatedUser() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleMenu}
        className="p-1 cursor-pointer align-middle rounded-full border border-black"
      >
        <User />
      </button>

      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </div>
  );
}

function Menu({
  setShowMenu,
}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { auth, setAuth } = useAuthStore();

  const handleLogout = () => {
    clearLocalStorage();
    setAuth(undefined);
  };

  const hideProfileMenu = () => setShowMenu(false);

  useEffect(() => {
    document.addEventListener('click', hideProfileMenu);

    return () => {
      document.removeEventListener('click', hideProfileMenu);
    };
  }, []);

  return (
    <div className="absolute right-0 top-[calc(100%+10px)] border border-gray-400 bg-gray-50 rounded-md p-1 min-w-40">
      <Link
        to={getDashboardPath(auth!.role) ?? '/'}
        className="inline-block px-3 py-2 hover:bg-gray-100 rounded-sm w-full text-left space-x-1"
      >
        <ClipboardList className="inline align-middle size-5" />
        <span>Dashboard</span>
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
