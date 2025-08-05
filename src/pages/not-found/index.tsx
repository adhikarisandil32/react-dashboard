import { Search, Home } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
              <Search className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mb-4">
              <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Page Not Found
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Sorry, we couldn't find the page you're looking for. The page
              might have been moved, deleted, or you entered the wrong URL.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => navigate('/')}
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <Home className="h-4 w-4 mr-2" />
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
