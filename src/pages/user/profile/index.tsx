import { useAuthStore } from '@src/stores/auth-store';

export default function UserProfilePage() {
  const { auth } = useAuthStore();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">User Profile</h2>

      <div className="border border-gray-200 p-6 rounded-md space-y-2">
        <div className="flex">
          <p className="font-semibold w-20">Name: </p>
          <p className="text-gray-600">{auth?.name}</p>
        </div>

        <div className="flex">
          <p className="font-semibold w-20">Email: </p>
          <p className="text-gray-600">{auth?.email}</p>
        </div>

        <div className="flex">
          <p className="font-semibold w-20">Role: </p>
          <p className="text-gray-600">{auth?.role}</p>
        </div>
      </div>
    </div>
  );
}
