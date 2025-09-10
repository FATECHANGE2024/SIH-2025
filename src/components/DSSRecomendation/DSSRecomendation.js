export default function DSSRecommendation({ lang }) {
  const translations = {
    en: {
      title: "DSS Recommendation",
      text: "High potential for community wells in Tekanpur village based on asset mapping data. Consider prioritizing water infrastructure development in this region.",
      updated: "Updated 2 hours ago",
    },
    hi: {
      title: "डीएसएस सिफारिश",
      text: "संपत्ति मानचित्रण डेटा के आधार पर टेकनपुर गांव में सामुदायिक कुओं की उच्च संभावना है। इस क्षेत्र में जल अवसंरचना विकास को प्राथमिकता देने पर विचार करें।",
      updated: "2 घंटे पहले अपडेट किया गया",
    },
  };

  const t = translations[lang];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-sm font-medium text-orange-600">{t.title}</h3>
      <p className="text-gray-700 mt-2">{t.text}</p>
      <span className="text-xs text-gray-400">{t.updated}</span>
    </div>
  );
}
