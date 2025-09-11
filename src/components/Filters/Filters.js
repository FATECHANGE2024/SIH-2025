"use client";
import { useState } from "react";

export default function Filters({ lang }) {
  const [filters, setFilters] = useState({
    approved: false,
    pending: false,
    rejected: false,
    ir: false,
    cr: false,
    ifr: false,
    waterBodies: false,
    agriLand: false,
    forestCover: false,
    gatiShakti: false,
  });

  const translations = {
    en: {
      filters: "Filters",
      state: "State",
      district: "District",
      mapLayers: "Map Layers",
      claims: "Claims",
      approved: "Approved Claims",
      pending: "Pending Claims",
      rejected: "Rejected Claims",
      ir: "IR",
      cr: "CR",
      ifr: "IFR",
      waterBodies: "Water Bodies",
      agriLand: "Agricultural Land",
      forestCover: "Forest Cover",
      gatiShakti: "PM Gati Shakti",
      infra: "Infrastructure",
    },
    hi: {
      filters: "फ़िल्टर",
      state: "राज्य",
      district: "ज़िला",
      mapLayers: "मानचित्र परतें",
      claims: "दावे",
      approved: "स्वीकृत दावे",
      pending: "लंबित दावे",
      rejected: "अस्वीकृत दावे",
      ir: "आईआर",
      cr: "सीआर",
      ifr: "आईएफआर",
      waterBodies: "जल निकाय",
      agriLand: "कृषि भूमि",
      forestCover: "वन क्षेत्र",
      gatiShakti: "पीएम गति शक्ति",
      infra: "बुनियादी ढांचा",
    },
  };

  const t = translations[lang];

  const handleChange = (field) => {
    setFilters((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-600 mb-3">{t.filters}</h3>

      {/* State Dropdown */}
      <div className="mb-3">
        <label className="text-xs text-gray-500">{t.state}</label>
        <select className="w-full border rounded px-2 py-1 mt-1 text-sm">
          <option>Madhya Pradesh</option>
          <option>Chhattisgarh</option>
          <option>Odisha</option>
          <option>Jharkhand</option>
        </select>
      </div>

      {/* District Dropdown */}
      <div className="mb-3">
        <label className="text-xs text-gray-500">{t.district}</label>
        <select className="w-full border rounded px-2 py-1 mt-1 text-sm">
          <option>Gwalior</option>
          <option>Bhopal</option>
          <option>Indore</option>
        </select>
      </div>

      {/* Claim Filters */}
      <div className="mb-3">
        <label className="block text-xs text-gray-500 mb-1">{t.claims}</label>
        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={filters.approved} onChange={() => handleChange("approved")} /> {t.approved}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={filters.pending} onChange={() => handleChange("pending")} /> {t.pending}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={filters.rejected} onChange={() => handleChange("rejected")} /> {t.rejected}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={filters.ir} onChange={() => handleChange("ir")} /> {t.ir}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={filters.cr} onChange={() => handleChange("cr")} /> {t.cr}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={filters.ifr} onChange={() => handleChange("ifr")} /> {t.ifr}
          </label>
        </div>
      </div>

      {/* Map Layers */}
      <div>
        <label className="block text-xs text-gray-500 mb-1">{t.mapLayers}</label>
        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={filters.waterBodies} onChange={() => handleChange("waterBodies")} /> {t.waterBodies}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={filters.agriLand} onChange={() => handleChange("agriLand")} /> {t.agriLand}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={filters.forestCover} onChange={() => handleChange("forestCover")} /> {t.forestCover}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={filters.gatiShakti} onChange={() => handleChange("gatiShakti")} /> {t.gatiShakti}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" /> {t.infra}
          </label>
        </div>
      </div>
    </div>
  );
}
