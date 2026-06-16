import "dotenv/config";
import { groq } from "./src/lib/groq.js";

const response = await groq.chat.completions.create({
 model: "llama-3.3-70b-versatile",
  messages: [
    {
      role: "user",
      content: "Say Hello",
    },
  ],
});

console.log(response.choices[0].message.content);