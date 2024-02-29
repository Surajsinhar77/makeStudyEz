
const API_KEY = 'AIzaSyBSrzzUVqXy4SfsMMpHANG4wr2KqVPAluw';
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({model: "gemini-pro"});

module.exports = {
	model,
}


