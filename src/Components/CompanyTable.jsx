import React from "react";

export default function CompanyTable({ companies }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employees</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue (M)</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {companies.map(c => (
            <tr key={c.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{c.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.location}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.industry}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.employees}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{c.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
