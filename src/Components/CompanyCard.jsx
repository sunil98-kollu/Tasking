import React from "react";

export default function CompanyCard({ company }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{company.name}</h3>
      <div className="space-y-2">
        <p className="text-gray-600"><span className="font-semibold">Industry:</span> {company.industry}</p>
        <p className="text-gray-600"><span className="font-semibold">Location:</span> {company.location}</p>
        <p className="text-gray-600"><span className="font-semibold">Employees:</span> {company.employees}</p>
        <p className="text-gray-600"><span className="font-semibold">Revenue:</span> {company.revenue}M</p>
      </div>
    </div>
  );
}
