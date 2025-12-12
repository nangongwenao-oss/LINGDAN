import { GoogleGenAI, Type, Schema } from "@google/genai";
import { SpiritMetrics, SpiritLevel, LingdanResult } from "../types";

// Schema for the Alchemy output
const lingdanSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    kit: {
      type: Type.STRING,
      description: "锦囊 (Kit): Immediate actionable advice for the Event/Flow level.",
    },
    strategy: {
      type: Type.STRING,
      description: "妙计 (Strategy): Systematic solution for the Focus/Organization level.",
    },
    blueprint: {
      type: Type.STRING,
      description: "棋谱 (Blueprint): Long-term evolutionary roadmap for the Capability level.",
    },
  },
  required: ["kit", "strategy", "blueprint"],
};

export const generateLingdan = async (
  question: string,
  metrics: SpiritMetrics,
  currentLevel: SpiritLevel
): Promise<LingdanResult> => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.warn("API Key not found. Returning mock data for demonstration.");
    // Simulated delay for "Alchemy" effect
    await new Promise(resolve => setTimeout(resolve, 2500));
    return {
      kit: "立即启动快速原型测试，验证核心假设，避免资源空转。",
      strategy: "建立跨部门敏捷小组，打破信息孤岛，形成闭环反馈机制。",
      blueprint: "构建以用户价值为核心的生态护城河，从单点突破转向平台化发展。",
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `
      You are a strategic alchemist (炼丹师) for the Lingdan Platform.
      Your goal is to generate a "Spirit Pill" (Lingdan) consisting of three parts: Kit, Strategy, and Blueprint.
      
      User Context:
      - Current Question: "${question}"
      - Spirit Metrics (4 Pins): Work=${metrics.work}, Product=${metrics.product}, Commodity=${metrics.commodity}, Item=${metrics.item}
      - Current Spirit Level: ${currentLevel}
      
      Analyze the user's situation based on the "Spirit State Construction" philosophy.
      Return the advice in JSON format matching the schema.
      Language: Chinese (Simplified).
      Style: Deep, philosophical, yet practical and strategic.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: lingdanSchema,
        temperature: 0.7,
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as LingdanResult;
    } else {
      throw new Error("No response text generated");
    }
  } catch (error) {
    console.error("Alchemy failed:", error);
    // Fallback for error states to maintain UI stability
    return {
      kit: "炼丹炉火候未到 (API Error)，请检查连接。",
      strategy: "建议稍作休整，重新调配资源。",
      blueprint: "道法自然，等待更佳时机。",
    };
  }
};