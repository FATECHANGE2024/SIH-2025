"use client";
import { useState } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import SearchBar from "@/components/searchbar/searchbar";
import StatCard from "@/components/StatsCard/StatsCard";
import ClaimsDistributionChart from "@/components/ClaimsDistributionChart/ClaimsDistributionChart";
import GISMap from "@/components/GIS/GIS";
import DSSRecommendation from "@/components/DSSRecomendation/DSSRecomendation";
import Filters from "@/components/Filters/Filters"; 
import LanguageSwitcher from "@/components/languageSwitch/languageSwitch";

export default function DashboardPage() {
  const [lang, setLang] = useState("en");

  const translations = {
    en: { totalClaims: "Total Claims", claimsApproved: "Claims Approved", claimsDistribution: "Claims Distribution" },
    hi: { totalClaims: "कुल दावे", claimsApproved: "स्वीकृत दावे", claimsDistribution: "दावों का वितरण" },
  };

  const markers = [
    { position: [28.61, 77.21], label: lang === "en" ? "Claim #1 - New Delhi" : "दावा #1 - नई दिल्ली" },
    { position: [28.63, 77.22], label: lang === "en" ? "Claim #2 - New Delhi" : "दावा #2 - नई दिल्ली" },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar (hidden on mobile) */}
      <div className="hidden md:block">
        <Sidebar lang={lang} />
      </div>

      <div className="">
        {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4 md:p-6 overflow-y-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <SearchBar lang={lang} />
          <LanguageSwitcher onChange={setLang} />
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          <StatCard title={translations[lang].totalClaims} value="201" />
          <StatCard title={translations[lang].claimsApproved} value="54" />
          <ClaimsDistributionChart lang={lang} title={translations[lang].claimsDistribution} />
        </div>

        {/* Map + DSS Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-[400px] lg:h-[500px] bg-white rounded-lg shadow">
            <GISMap markers={markers} />
          </div>
          <div className="space-y-6">
            <DSSRecommendation lang={lang} />
            <Filters lang={lang} />
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
