import { BurgerIcon } from '@src/svgs/burger-icon';
import ProfileMenu from '../commons/profile-menu';
import { useMediaQuery } from 'usehooks-ts';
import { useAppStyles } from '@src/stores/styles-store';

export default function Header() {
  const { styles } = useAppStyles();

  const isMobileScreen = useMediaQuery(
    `(max-width: ${styles.getPropertyValue('--breakpoint-md')})`
  );

  return (
    <header className="sticky z-[100] top-0 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">
              Awwwsome.
            </span>
          </div>

          {!isMobileScreen && (
            <nav className="flex space-x-8">
              <a
                href="#"
                className="text-indigo-600 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                About us
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                News
              </a>
            </nav>
          )}

          <div className="flex items-center gap-3">
            {!isMobileScreen && (
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Contact
              </button>
            )}

            <div>
              <ProfileMenu />
            </div>

            {isMobileScreen && (
              <button className="align-middle">
                <BurgerIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
