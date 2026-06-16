"use client";

import { useApp } from "@/context/AppContext";

export default function OutputLanguageSelector() {
  const { outputLanguage, setOutputLanguage } = useApp();

  return (
    <select
      value={outputLanguage}
      onChange={(e) => setOutputLanguage(e.target.value)}
      className="border rounded px-3 py-2"
    >
      <option value="English">English</option>
      <option value="Hindi">Hindi</option>
      <option value="Spanish">Spanish</option>
      <option value="French">French</option>
      <option value="German">German</option>
      <option value="mandarin">Mandarin</option>
    </select>
  );
}