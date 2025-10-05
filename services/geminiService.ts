import { GoogleGenAI, Type } from '@google/genai';
import { AIFeedback } from '../types';

// FIX: The API key must be obtained from process.env.API_KEY as per the guidelines.
// This also resolves the TypeScript error regarding 'import.meta.env'.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        score: {
            type: Type.INTEGER,
            description: "A score from 1 to 10 evaluating the quality of the provided text for a LinkedIn profile.",
        },
        strengths: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "An array of 2-3 strings highlighting what is good about the provided text.",
        },
        suggestions: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "An array of 2-3 actionable suggestions for improving the text.",
        },
    },
    required: ["score", "strengths", "suggestions"],
};

export const getAIFeedback = async (section: string, text: string): Promise<AIFeedback> => {
    const prompt = `As a world-class career coach and LinkedIn expert, analyze the following LinkedIn profile section: "${section}".
    The user has provided this text: "${text}".
    
    Your task is to provide a concise and constructive critique.
    - Give a score from 1 to 10.
    - List 2-3 specific strengths.
    - Offer 2-3 concrete, actionable suggestions for improvement to attract recruiters for top tech companies.
    
    Return the analysis in the specified JSON format.`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
                responseSchema: responseSchema,
            },
        });
        
        const jsonText = response.text.trim();
        const parsedJson = JSON.parse(jsonText);

        // Basic validation
        if (typeof parsedJson.score !== 'number' || !Array.isArray(parsedJson.strengths) || !Array.isArray(parsedJson.suggestions)) {
            throw new Error("Invalid JSON structure from API");
        }

        return parsedJson as AIFeedback;

    } catch (error) {
        console.error("Gemini API call failed:", error);
        throw new Error("Failed to get feedback from AI.");
    }
};