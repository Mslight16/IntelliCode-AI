"use client";

import { useApp } from "@/context/AppContext";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";

export default function ExplanationPanel() {
  const { explanation } = useApp();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!explanation) return;
    await navigator.clipboard.writeText(explanation);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="h-150 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b pb-3">
        <h2 className="text-xl font-semibold">
          AI Explanation
        </h2>

        <Button
          variant="outline"
          onClick={handleCopy}
          disabled={!explanation}
        >
          {copied ? "Copied ✓" : "Copy"}
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto prose max-w-none">
        {explanation ? (
          <ReactMarkdown>{explanation}</ReactMarkdown>
        ) : (
          <div className="flex h-full items-center justify-center text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                👋 Welcome to IntelliCode AI
              </h3>

              <p className="text-muted-foreground">
                Paste code into the editor and click
                <span className="font-medium"> "Explain Code" </span>
                to get a beginner-friendly explanation.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}