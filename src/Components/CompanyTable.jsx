import React from "react";
import { commonStyles } from "./GlobalStyles/styles.jsx";

export default function CompanyTable({ companies }) {
  return (
    <div className={commonStyles.tableContainer}>
      <table className={commonStyles.table}>
        <thead className={commonStyles.tableHeader}>
          <tr>
            <th className={commonStyles.tableHeaderCell}>Name</th>
            <th className={commonStyles.tableHeaderCell}>Location</th>
            <th className={commonStyles.tableHeaderCell}>Industry</th>
            <th className={commonStyles.tableHeaderCell}>Employees</th>
            <th className={commonStyles.tableHeaderCell}>Revenue (M)</th>
          </tr>
        </thead>
        <tbody className={commonStyles.tableBody}>
          {companies.map(c => (
            <tr key={c.id} className={commonStyles.tableRow}>
              <td className={commonStyles.tableCellBold}>{c.name}</td>
              <td className={commonStyles.tableCell}>{c.location}</td>
              <td className={commonStyles.tableCell}>{c.industry}</td>
              <td className={commonStyles.tableCell}>{c.employees}</td>
              <td className={commonStyles.tableCell}>{c.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
