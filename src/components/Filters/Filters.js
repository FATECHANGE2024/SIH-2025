export default function Filters({ lang }) {
  const translations = {
    en: {
      filters: "Filters",
      state: "State",
      district: "District",
      mapLayers: "Map Layers",
      ifr: "IFR Claims",
      water: "Water Bodies",
      forest: "Forest Cover",
      infra: "Infrastructure",
    },
    hi: {
      filters: "फ़िल्टर",
      state: "राज्य",
      district: "ज़िला",
      mapLayers: "मानचित्र परतें",
      ifr: "आईएफआर दावे",
      water: "जल निकाय",
      forest: "वन क्षेत्र",
      infra: "बुनियादी ढांचा",
    },
  };

  const t = translations[lang];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-sm font-medium text-gray-600 mb-3">{t.filters}</h3>

      <div className="mb-3">
        <label className="text-xs text-gray-500">{t.state}</label>
        <select className="w-full border rounded px-2 py-1 mt-1 text-sm">
          <option>Madhya Pradesh</option>
          <option>Chhattisgarh</option>
          <option>Odisha</option>
          <option>Jharkhand</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="text-xs text-gray-500">{t.district}</label>
        <select className="w-full border rounded px-2 py-1 mt-1 text-sm">
          <option>Gwalior</option>
          <option>Bhopal</option>
          <option>Indore</option>
        </select>
      </div>

      <div>
        <label className="block text-xs text-gray-500 mb-1">{t.mapLayers}</label>
        <div className="space-y-1">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked /> {t.ifr}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked /> {t.water}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" /> {t.forest}
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" /> {t.infra}
          </label>
        </div>
      </div>
    </div>
  );
}
