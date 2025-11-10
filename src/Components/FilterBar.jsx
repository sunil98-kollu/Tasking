import React from "react";

export default function FilterBar({
  filterQuery, filterSetQuery,
  filterLocations, filterIndustries,
  filterLocationFilter, filterSetLocationFilter,
  filterIndustryFilter, filterSetIndustryFilter,
  filterSortBy, filterSetSortBy
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search by company name..."
          value={filterQuery}
          onChange={e => filterSetQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={filterLocationFilter}
          onChange={e => filterSetLocationFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {filterLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>

        <select
          value={filterIndustryFilter}
          onChange={e => filterSetIndustryFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {filterIndustries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
        </select>

        <select
          value={filterSortBy}
          onChange={e => filterSetSortBy(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="name_asc">Name ↑</option>
          <option value="name_desc">Name ↓</option>
        </select>
      </div>
    </div>
  );
}
