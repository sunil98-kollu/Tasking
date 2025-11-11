import React from "react";
import { commonStyles } from "./GlobalStyles/styles.js";

export default function CompanyCard({ company }) {
  return (
    <div className={commonStyles.cardContainer}>
      <h3 className={commonStyles.cardTitle}>{company.name}</h3>
      <div className="space-y-2">
        <p className={commonStyles.cardText}><span className={commonStyles.cardLabel}>Industry:</span> {company.industry}</p>
        <p className={commonStyles.cardText}><span className={commonStyles.cardLabel}>Location:</span> {company.location}</p>
        <p className={commonStyles.cardText}><span className={commonStyles.cardLabel}>Employees:</span> {company.employees}</p>
        <p className={commonStyles.cardText}><span className={commonStyles.cardLabel}>Revenue:</span> {company.revenue}M</p>
      </div>
    </div>
  );
}
