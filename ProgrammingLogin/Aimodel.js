// AI model creation page here 

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.googleAi_API_KEY);
const model = genAI.getGenerativeModel({model: "gemini-pro"});

module.exports = {
	model,
}
