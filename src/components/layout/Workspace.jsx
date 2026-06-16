"use client";

import CodeEditor from "../editor/CodeEditor";
import ExplanationPanel from "../explanation/ExplanationPanel";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function Workspace() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10">
      {/* App Header */}
      <div className="mb-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-4">
          ⚡ AI Powered Code Explainer
        </div>

        {/* Title */}
        <h1 className={`text-4xl font-bold tracking-tight ${jetbrainsMono.className}`}>
          <span className="bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">&lt; </span>
          IntelliCode{" "}
          <span className="bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI
          </span>{" "}
          <span className="bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            /&gt;
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground mt-3 text-sm">
          Explain code in seconds using AI — simple, fast, and beginner friendly
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-2 gap-6  px-6 ">

        <Card>
          <CardContent>
            <CodeEditor />
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <ExplanationPanel />
          </CardContent>
        </Card>

      </div>
    </div>
  );
}