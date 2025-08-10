import TableBody from '@src/components/page-wise/admin/users/table-body';
import { queryKeys } from '@src/config/config';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function PublicUsersPage() {
  const { isPending, data } = useQuery({
    queryKey: [queryKeys.usersData],
    queryFn: async () => await axios.get(API_URL),
  });

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Public Users</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                ID
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Name
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Email
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Phone
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Username
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Company
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Address
              </th>
            </tr>
          </thead>

          {isPending ? (
            <tbody>
              <tr>
                <td colSpan={7}>
                  <div className="h-24 text-center flex items-center justify-center">
                    <p className="animate-spin border-4 border-gray-700 border-t-transparent rounded-full size-10" />
                  </div>
                </td>
              </tr>
            </tbody>
          ) : (
            <TableBody data={data?.data} />
          )}
        </table>
      </div>
    </div>
  );
}
