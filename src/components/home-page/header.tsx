import { useNavigate } from "react-router";
import { BurgerIcon } from "../../svgs/burger-icon";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">Awwwsome.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
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

          <div className="flex items-center space-x-3">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Contact
            </button>
            <button
              className="border border-indigo-600 text-gray-700 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
              onClick={() => navigate("/login/user")}
            >
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <BurgerIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
