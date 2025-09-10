export default function SearchBar({ lang }) {
  const translations = {
    en: { placeholder: "Search by Claim ID, Village..." },
    hi: { placeholder: "दावे आईडी, गाँव से खोजें..." },
  };

  return (
    <input
      type="text"
      placeholder={translations[lang].placeholder}
      className="w-full px-4 py-2 border rounded-lg shadow-sm"
    />
  );
}
