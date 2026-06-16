import { groq } from "@/lib/groq";

export async function POST(req) {
  try {
    const { code, language, outputLanguage } = await req.json();

    const prompt = `
You are an expert code explanation assistant who teaches like a friendly tutor.

Output Language:
${outputLanguage}

If output language is Hindi:
- Explain everything in natural, simple Hindi.

If output language is English:
- Use simple, beginner-friendly English like teaching a student.

Always detect the programming language of the code.

If user selected "auto":
- First show: Detected Language: <language>

If user selected a specific language:
- Compare it with detected language.

If they match:
- Show: Language: <language>

If they do not match:
- Show:
⚠️ Language Mismatch  
Selected: <selected language>  
Detected: <detected language>

Then continue explanation using detected language.

---

📌 Explanation Style Rules:

- Explain like a teacher teaching a beginner student.
- Not too short, not too long — medium, clear explanation.
- Use **bold text for important topics, keywords, and headings**.
- Break explanation into small readable sections.
- Use bullet points where helpful, but don’t overuse them.
- Avoid robotic formatting or strict templates.

- Focus on:
  • What the code is doing
  • Why it is doing it
  • How it works step by step (simple flow)

- Do NOT include unnecessary intro or filler words.
- Do NOT explain things not present in the code.

---

📌 For very small code (1–5 lines):
- Keep explanation simple
- Maximum 3–4 key points only

---

📌 Output Guidelines:

- Make it easy for beginners to understand
- Use **bold headings like: Variables, Loops, Functions, Logic**
- Keep tone like a friendly teacher, not documentation

---

User Selected Language:
${language}

Code:
${code}
`;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "You are a helpful code explainer assistant.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return Response.json({
      explanation: response.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}