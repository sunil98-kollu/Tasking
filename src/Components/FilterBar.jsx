import React from "react";
import { commonStyles } from "./GlobalStyles/styles.js";

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
          className={commonStyles.filterbar}
        />

        <select
          value={filterLocationFilter}
          onChange={e => filterSetLocationFilter(e.target.value)}
          className={commonStyles.filterbar}
        >
          {filterLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>

        <select
          value={filterIndustryFilter}
          onChange={e => filterSetIndustryFilter(e.target.value)}
         className={commonStyles.filterbar}
        >
          {filterIndustries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
        </select>

        <select
          value={filterSortBy}
          onChange={e => filterSetSortBy(e.target.value)}
          className={commonStyles.filterbar}
        >
          <option value="name_asc">Asc ↑</option>
          <option value="name_desc">Dsc ↓</option>
        </select>
      </div>
    </div>
  );
}
