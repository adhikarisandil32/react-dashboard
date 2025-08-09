import { Badge, badgeVariants } from '@src/components/ui/badge';
import { Card } from '@src/components/ui/card';
import { ShoppingCartIcon } from '@src/svgs/shopping-cart-icon';
import { PackageIcon } from '@src/svgs/package-icon';
import { UsersIcon } from '@src/svgs/users-icon';
import type { VariantProps } from 'class-variance-authority';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Sample data
const salesData = [
  { month: 'Jan', sales: 4000, orders: 240 },
  { month: 'Feb', sales: 3000, orders: 198 },
  { month: 'Mar', sales: 5000, orders: 300 },
  { month: 'Apr', sales: 4500, orders: 278 },
  { month: 'May', sales: 6000, orders: 389 },
  { month: 'Jun', sales: 5500, orders: 349 },
];

const revenueData = [
  { day: 'Mon', revenue: 2400 },
  { day: 'Tue', revenue: 1398 },
  { day: 'Wed', revenue: 9800 },
  { day: 'Thu', revenue: 3908 },
  { day: 'Fri', revenue: 4800 },
  { day: 'Sat', revenue: 3800 },
  { day: 'Sun', revenue: 4300 },
];

const categoryData = [
  { name: 'Electronics', value: 400, color: '#0088FE' },
  { name: 'Clothing', value: 300, color: '#00C49F' },
  { name: 'Books', value: 200, color: '#FFBB28' },
  { name: 'Home', value: 100, color: '#FF8042' },
];

const recentOrders = [
  {
    id: '#12345',
    customer: 'John Doe',
    product: 'iPhone 14 Pro',
    amount: '$999',
    status: 'completed',
    date: '2024-01-15',
  },
  {
    id: '#12346',
    customer: 'Jane Smith',
    product: 'MacBook Air',
    amount: '$1299',
    status: 'pending',
    date: '2024-01-15',
  },
  {
    id: '#12347',
    customer: 'Bob Johnson',
    product: 'AirPods Pro',
    amount: '$249',
    status: 'shipped',
    date: '2024-01-14',
  },
  {
    id: '#12348',
    customer: 'Alice Brown',
    product: 'iPad Pro',
    amount: '$799',
    status: 'completed',
    date: '2024-01-14',
  },
  {
    id: '#12349',
    customer: 'Charlie Wilson',
    product: 'Apple Watch',
    amount: '$399',
    status: 'cancelled',
    date: '2024-01-13',
  },
];

const topProducts = [
  { name: 'iPhone 14 Pro', sales: 1234, revenue: '$1,234,000' },
  { name: 'MacBook Air', sales: 856, revenue: '$1,112,400' },
  { name: 'AirPods Pro', sales: 2341, revenue: '$583,249' },
  { name: 'iPad Pro', sales: 432, revenue: '$345,168' },
];

export default function AdminEcommerceDashboard() {
  const statusMap: Record<
    string,
    VariantProps<typeof badgeVariants>['variant']
  > = {
    completed: 'success',
    pending: 'warning',
    shipped: 'default',
    cancelled: 'destructive',
  };

  const getStatusBadge = (status: keyof typeof statusMap) => {
    return <Badge variant={statusMap[status]}>{status}</Badge>;
  };

  return (
    <div className="flex">
      <div className="flex-1 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                  <ShoppingCartIcon className="text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Total Orders
                </p>
                <p className="text-2xl font-semibold text-gray-900">1,234</p>
                <p className="text-sm text-green-600">+12% from last month</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-bold">$</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">$45,231</p>
                <p className="text-sm text-green-600">+8% from last month</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                  <UsersIcon className="text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Customers</p>
                <p className="text-2xl font-semibold text-gray-900">2,345</p>
                <p className="text-sm text-green-600">+15% from last month</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
                  <PackageIcon className="text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Products</p>
                <p className="text-2xl font-semibold text-gray-900">567</p>
                <p className="text-sm text-red-600">-2% from last month</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sales Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Monthly Sales
            </h3>
            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="sales"
                  fill="#3B82F6"
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Revenue Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Weekly Revenue
            </h3>
            <ResponsiveContainer
              width="100%"
              height={300}
            >
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10B981"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Orders
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Order ID
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Customer
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Product
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Amount
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 px-4 text-sm font-medium text-blue-600">
                          {order.id}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900">
                          {order.customer}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {order.product}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium text-gray-900">
                          {order.amount}
                        </td>
                        <td className="py-3 px-4">
                          {getStatusBadge(order.status)}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {order.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Sales by Category
              </h3>
              <ResponsiveContainer
                width="100%"
                height={200}
              >
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {categoryData.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Top Products
              </h3>
              <div className="space-y-4">
                {topProducts.map((product) => (
                  <div
                    key={product.name}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {product.sales} sales
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.revenue}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
