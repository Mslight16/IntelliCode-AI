"use client";

import { useApp } from "@/context/AppContext";

export default function LanguageSelector() {
    const { language, setLanguage } = useApp();

    return (
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded px-3 py-2"
        >
            <option value="auto">Auto Detect</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="csharp">C#</option>
            <option value="go">Go</option>
            <option value="rust">Rust</option>
            <option value="php">PHP</option>
            <option value="sql">SQL</option>
            <option value="mongodb">MongoDB</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="react">React</option>
            <option value="nextjs">Next.js</option>
            <option value="nodejs">Node.js</option>
            <option value="kotlin">Kotlin</option>
            <option value="swift">Swift</option>
        </select>
    );
}