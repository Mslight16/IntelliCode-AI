"use client";

import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/button";


export default function ExplainButton() {
  const {
    code,
    language,
    outputLanguage,
    setExplanation,
    loading,
    setLoading,
  } = useApp();

  const handleExplain = async () => {
    if (!code.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          language,
          outputLanguage,
        }),
      });

      const data = await response.json();

      setExplanation(data.explanation);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <Button
      onClick={handleExplain}
      disabled={loading || !code.trim()}
    >
      {loading ? "Generating..." : "Explain Code"}
    </Button>
  );
}