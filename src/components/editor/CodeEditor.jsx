"use client";

import { useApp } from "@/context/AppContext";
import ExplainButton from "./ExplainButton";
import LanguageSelector from "./LanguageSelector";
import Editor from "@monaco-editor/react";
import OutputLanguageSelector from "./OutputLanguageSelector";

export default function CodeEditor() {
  const { code, setCode, language } = useApp();

  const monacoLanguageMap = {
    auto: "javascript",
    javascript: "javascript",
    typescript: "typescript",
    python: "python",
    java: "java",
    c: "c",
    cpp: "cpp",
    csharp: "csharp",
    go: "go",
    rust: "rust",
    php: "php",
    sql: "sql",
    mongodb: "json",
    html: "html",
    css: "css",
    react: "javascript",
    nextjs: "javascript",
    nodejs: "javascript",
    kotlin: "kotlin",
    swift: "swift",
  };

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-3">
          <LanguageSelector />
          <OutputLanguageSelector />
        </div>

        <ExplainButton />
      </div>

      {/* Hint */}
      <p className="text-sm text-muted-foreground mb-2">
        Paste your code below and click "Explain Code"
      </p>
      <Editor
        height="450px"
        language={monacoLanguageMap[language] || "javascript"}
        value={code ?? ""}
        onChange={(value) => setCode(value ?? "")}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          automaticLayout: true,
        }}
      />
    </div>
  );
}