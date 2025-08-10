interface IData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function TableBody({ data }: { data: IData[] }) {
  return data.length > 0 ? (
    <tbody>
      {data.map((datum) => (
        <tr
          key={datum.id}
          className="border-b border-gray-100 hover:bg-gray-50"
        >
          <td className="py-3 px-4 text-sm font-medium">{datum.id}</td>
          <td className="py-3 px-4 text-sm text-gray-900">{datum.name}</td>
          <td className="py-3 px-4 text-sm text-gray-600">{datum.email}</td>
          <td className="py-3 px-4 text-sm font-medium text-gray-900">
            {datum.phone}
          </td>
          <td className="py-3 px-4">{datum.username}</td>
          <td className="py-3 px-4 text-sm text-gray-600">
            {datum.company.name}
          </td>
          <td className="py-3 px-4 text-sm text-gray-600">
            {`${datum.address.street}, ${datum.address.city}`}
          </td>
        </tr>
      ))}
    </tbody>
  ) : (
    <tbody>
      <tr>
        <td
          colSpan={7}
          className="h-24 text-center text-gray-500"
        >
          <span>No data found</span>
        </td>
      </tr>
    </tbody>
  );
}
