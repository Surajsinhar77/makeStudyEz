const express = require('express');
const port = 8000;
const app = express();
const { model } = require('./ProgrammingLogin/Aimodel.js');
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const prompt = req.query.question;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const answerText = response.text();
        res.json({ answer: answerText });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
});

app.listen(port, () => console.log("Server listening on http://localhost:", port));
