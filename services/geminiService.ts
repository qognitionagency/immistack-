import { GoogleGenAI } from "@google/genai";
import { WaitlistFormData } from "../types";

// Initialize Gemini AI
// Note: In a real production environment, this would be a backend call to hide the API key.
// For this frontend-only demo, we use the environment variable directly.
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set in the environment.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generatePersonalizedWelcome = async (data: WaitlistFormData): Promise<string> => {
  const ai = getAiClient();
  if (!ai) {
    return "Thank you for joining the waitlist. We will be in touch shortly.";
  }

  try {
    const prompt = `
      You are the AI orchestration engine for 'Immistack', a high-end SaaS platform for immigration firms.
      The user just joined the waitlist.
      
      User Details:
      - Firm Name: ${data.firmName}
      - Firm Size: ${data.firmSize}
      
      Write a short, professional, yet empathetic welcome message (max 2 sentences).
      Acknowledge their firm size specifically (e.g., if Solo, mention efficiency; if Enterprise, mention scalability).
      Mention "Speed to Approval" or "Automated Accuracy".
      Tone: Reliable, Efficient, Premium.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Welcome to the future of immigration case management.";
  } catch (error) {
    console.error("Error generating welcome message:", error);
    return "Welcome to Immistack. Your journey to automated accuracy begins now.";
  }
};