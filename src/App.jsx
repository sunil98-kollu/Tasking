import React from 'react'
import { useEffect, useState } from "react";
import CompanyTable from './Components/CompanyTable';
import FilterBar from './Components/FilterBar';
import CompanyCard from './Components/CompanyCard';
export default function App() {
 const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI state
  const [view, setView] = useState("table"); // table | card
  const [query, setQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name_asc"); // name_asc | name_desc
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 5;

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("/companies.json");
        if (!res.ok) throw new Error("Failed to load companies");
        const data = await res.json();
        setCompanies(data);
      } catch (e) {
        setError(e.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // derive unique filters
  const locations = ["All", ...Array.from(new Set(companies.map(c => c.location)))];
  const industries = ["All", ...Array.from(new Set(companies.map(c => c.industry)))];

  // filtering
  let filtered = companies.filter(c => {
    const matchesQuery =
      query.trim() === "" ||
      c.name.toLowerCase().includes(query.trim().toLowerCase());
    const matchesLoc = locationFilter === "All" || c.location === locationFilter;
    const matchesInd = industryFilter === "All" || c.industry === industryFilter;
    return matchesQuery && matchesLoc && matchesInd;
  });

  // sorting
  filtered = filtered.sort((a, b) => {
    if (sortBy === "name_asc") return a.name.localeCompare(b.name);
    return b.name.localeCompare(a.name);
  });

  // pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages]);

  if (loading) return <div className="flex justify-center items-center min-h-screen text-lg">Loading companies...</div>;
  if (error) return <div className="flex justify-center items-center min-h-screen text-red-500 text-lg">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Companies Directory</h1>
        <div className="flex justify-end">
          <button
            onClick={() => setView(v => (v === "table" ? "card" : "table"))}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            {view === "table" ? "Card View" : "Table View"}
          </button>
        </div>
      </header>

      <FilterBar
        filterQuery={query}
        filterSetQuery={setQuery}
        filterLocations={locations}
        filterIndustries={industries}
        filterLocationFilter={locationFilter}
        filterSetLocationFilter={setLocationFilter}
        filterIndustryFilter={industryFilter}
        filterSetIndustryFilter={setIndustryFilter}
        filterSortBy={sortBy}
        filterSetSortBy={setSortBy}
      />

      <main className="bg-white shadow-md rounded-lg p-6 mb-6">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">No companies found.</div>
        ) : view === "table" ? (
          <CompanyTable companies={current} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.map(c => (
              <CompanyCard key={c.id} company={c} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-2 mb-4 sm:mb-0">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition-colors"
          >
            Prev
          </button>
          <span className="text-lg font-medium text-gray-700">
            Page {page} / {totalPages}
          </span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 text-gray-700 px-4 py-2 rounded-md transition-colors"
          >
            Next
          </button>
        </div>
        <div className="text-gray-500">
          <small>{filtered.length} result(s)</small>
        </div>
      </footer>
    </div>
  );
}