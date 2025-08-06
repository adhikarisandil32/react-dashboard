import { config } from '@root/src/config/config';
import { useAuthStore } from '@root/src/stores/auth-store';
import { ErrorCross } from '@root/src/svgs/error-cross';
import { setLocalStorage } from '@root/src/utils/local-storage';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { adminUsers } from 'src/json-data/users.json';

export default function LoginPageAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { setAuth } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email && password) {
        const admin = adminUsers.find((admin) => admin.email === email);
        if (!admin) {
          setError("email or password doesn't match");
          return;
        }

        if (admin?.password !== password) {
          setError("email or password doesn't match");
          return;
        }

        const authData = {
          email: admin.email,
          role: admin.role as 'user' | 'admin',
        };

        setLocalStorage(config.authKey, JSON.stringify(authData));
        setAuth(authData);
        navigate('/admin');
      } else {
        setError('Please enter both email and password');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="mx-auto w-full max-w-md">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-block"
          >
            <span className="text-3xl font-bold text-indigo-600">
              Awwwsome.
            </span>
          </Link>
        </div>

        <div className="bg-white py-8 px-6 shadow-sm rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Admin User Login
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm space-x-1">
              <ErrorCross />
              <span>{error}</span>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address<span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password<span className="text-red-600">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
              />
            </div>

            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoading ? 'Logging in...' : 'Log in'}
                </button>
              </div>

              <div className="text-center">
                <button
                  className="py-2 rounded-md border-indigo-700 border w-full cursor-pointer"
                  type="button"
                  onClick={() => navigate('/login/user', { replace: true })}
                >
                  Switch to Public Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
