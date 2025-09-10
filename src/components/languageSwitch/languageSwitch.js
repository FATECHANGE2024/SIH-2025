"use client";
import { useState } from "react";

export default function LanguageSwitcher({ onChange }) {
  const [lang, setLang] = useState("en");

  const handleChange = (e) => {
    const newLang = e.target.value;
    setLang(newLang);
    onChange(newLang); // notify parent
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      className="border rounded px-2 py-1 text-sm"
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
    </select>
  );
}
