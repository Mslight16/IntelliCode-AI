"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [code, setCode] = useState("");
 const [language, setLanguage] = useState("auto");
  const [outputLanguage, setOutputLanguage] = useState("English");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        code,
        setCode,
        language,
        setLanguage,
        outputLanguage,
        setOutputLanguage,
        explanation,
        setExplanation,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}