"use client";
import { useState } from "react";
import {
  Home,
  FileText,
  BarChart2,
  Search,
  User,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function Sidebar({ lang }) {
  const [active, setActive] = useState("dashboard");

  const translations = {
    en: {
      dashboard: "Dashboard",
      claims: "Claims",
      analytics: "Analytics & Reports",
      tracker: "Query Tracker",
      profile: "User Profile",
      settings: "Settings",
      help: "Help",
      logout: "Log out",
    },
    hi: {
      dashboard: "डैशबोर्ड",
      claims: "दावे",
      analytics: "विश्लेषण और रिपोर्ट",
      tracker: "प्रश्न ट्रैकर",
      profile: "उपयोगकर्ता प्रोफ़ाइल",
      settings: "सेटिंग्स",
      help: "सहायता",
      logout: "लॉग आउट",
    },
  };

  const t = translations[lang];

  const menu = [
    { id: "dashboard", label: t.dashboard, icon: <Home size={18} /> },
    { id: "claims", label: t.claims, icon: <FileText size={18} /> },
    { id: "analytics", label: t.analytics, icon: <BarChart2 size={18} /> },
    { id: "tracker", label: t.tracker, icon: <Search size={18} /> },
    { id: "profile", label: t.profile, icon: <User size={18} /> },
    { id: "settings", label: t.settings, icon: <Settings size={18} /> },
  ];

  return (
    <aside className="w-64 bg-green-900 text-white flex flex-col justify-between h-full ">
      
      <div className="p-6 font-bold text-xl">Vanadhikar Atlas</div>

      
      <nav className="flex-1">
        {menu.map((item) => (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`relative flex items-center gap-3 px-6 py-3 cursor-pointer
              hover:bg-green-800 transition-colors
              ${active === item.id ? "bg-orange-500 hover:bg-orange-500" : ""}`}
          >
            
            {active === item.id && (
              <span className="absolute left-0 top-0 h-full w-2 bg-orange-500 rounded-r"></span>
            )}

            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      
      
      <div className="px-6 py-3 mt-auto border-t border-green-800 space-y-2">
        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
          <HelpCircle size={18} />
          <span>{t.help}</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
          <LogOut size={18} />
          <span>{t.logout}</span>
        </div>
      </div>

    </aside>
  );
}