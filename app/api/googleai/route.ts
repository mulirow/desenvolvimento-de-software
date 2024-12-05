import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from 'next/server';

const config = {
  apiKey: process.env.GOOGLEAI_API_KEY || "",
};
const googleAI = new GoogleGenerativeAI(config.apiKey);
const model = googleAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
  }

  if (config.apiKey === "") {
    return NextResponse.json({ error: 'Missing GoogleAI API key' }, { status: 500 });
  }

  try {
    const { prompt } = await req.json();

    const completion = await model.generateContent(prompt);

    return NextResponse.json({ result: completion.response.text() });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred during GoogleAI completion' }, { status: 500 });
  }
}