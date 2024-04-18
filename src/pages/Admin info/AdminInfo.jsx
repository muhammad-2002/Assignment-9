import React from "react";
import { Helmet } from "react-helmet-async";

const AdminInfo = () => {
  // Static data for admin information
  const adminData = [
    {
      slNo: 1,
      name: "MUHAMMAD MASUM BILLAH",
      phone: "123-456-7890",
      email: "masum@gmail.com",
      role: "Admin",
    },
    {
      slNo: 2,
      name: "MAHAMUDUL HASSAN MUNIM",
      phone: "456-789-0123",
      email: "munim@example.com",
      role: "Editor",
    },
    {
      slNo: 3,
      name: "ABDUL QADER",
      phone: "789-012-3456",
      email: "kader@gmail.com",
      role: "Viewer",
    },
    {
      slNo: 4,
      name: "ABU OSMAN",
      phone: "234-567-8901",
      email: "abu osman4@gmail.com",
      role: "Admin",
    },
    {
      slNo: 5,
      name: "RAKIBUL ISLAM",
      phone: "567-890-1234",
      email: "rakibul@gmail.com",
      role: "Editor",
    },
    {
      slNo: 6,
      name: "NUSRAT JAHAM NOOON",
      phone: "890-123-4567",
      email: "nusrat@gmail.com",
      role: "Viewer",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <Helmet>
        <title>MyBali-AdminInfo</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4">Admin Information</h2>
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase sm:px-6 sm:py-3">
                SL No
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase sm:px-6 sm:py-3">
                Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase sm:px-6 sm:py-3">
                Phone
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase sm:px-6 sm:py-3">
                Email
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase sm:px-6 sm:py-3">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {adminData.map((admin, index) => (
              <tr key={index}>
                <td className="px-4 py-2 whitespace-nowrap">{admin.slNo}</td>
                <td className="px-4 py-2 whitespace-nowrap">{admin.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{admin.phone}</td>
                <td className="px-4 py-2 whitespace-nowrap">{admin.email}</td>
                <td className="px-4 py-2 whitespace-nowrap">{admin.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminInfo;
