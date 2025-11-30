// Vercel serverless function
import OpenAI from "openai";

export default async function handler(req, res) {
  const { prompt } = req.body;
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages:[{role:"user", content: `Write a viral short-form script in sigma/brainrot style. Vibe: ${prompt}` }]
  });

  res.status(200).json({ text: completion.choices[0].message.content });
}
