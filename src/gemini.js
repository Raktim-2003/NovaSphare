import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyBPu_SCklbZVi45k93cGy_YYiK3xpMF_eE";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Use "gemini-pro" if needed
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 100,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const result = await model.generateContent({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig,
    });

    const response = await result.response;
    const text = await response.text();  // ✅ FIXED: capture text
    console.log("Gemini Response:\n", text);
    return text; // ✅ FIXED: return it for use in context
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I couldn't process that.";
  }
}

export default run;
