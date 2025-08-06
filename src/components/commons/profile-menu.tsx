import { useAuthStore, type AuthType } from '@root/src/stores/auth-store';
import { getDashboardPath } from '@root/src/utils/functions';
import { clearLocalStorage } from '@root/src/utils/local-storage';
import { ClipboardList, LogOut, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export default function ProfileMenu() {
  const { auth } = useAuthStore();
  const navigate = useNavigate();

  return auth ? (
    <AuthenticatedUser auth={auth} />
  ) : (
    <button
      className="border border-indigo-600 text-gray-700 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
      onClick={() => navigate('/login/user')}
    >
      Login
    </button>
  );
}

function AuthenticatedUser({ auth }: { auth: AuthType }) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleLogout = () => {
    clearLocalStorage();
    hideProfileMenu();
  };

  const hideProfileMenu = () => setShowMenu(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="cursor-pointer align-middle"
      >
        <User />
      </button>

      {showMenu && (
        <div className="absolute right-0 top-[calc(100%+10px)] border border-gray-400 bg-gray-50 rounded-md p-1 min-w-40">
          <Link
            to={getDashboardPath(auth.role) ?? '/'}
            className="inline-block px-3 py-2 hover:bg-gray-100 rounded-sm w-full text-left space-x-1"
            onClick={hideProfileMenu}
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
      )}
    </div>
  );
}
