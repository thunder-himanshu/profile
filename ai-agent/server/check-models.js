require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  try {
    console.log('Fetching available models...\n');
    
    // List all available models
    const models = await genAI.listModels();
    
    console.log('Available models:');
    console.log('='.repeat(80));
    
    for await (const model of models) {
      console.log(`\nModel: ${model.name}`);
      console.log(`Display Name: ${model.displayName}`);
      console.log(`Description: ${model.description}`);
      console.log(`Supported Methods: ${model.supportedGenerationMethods.join(', ')}`);
      console.log('-'.repeat(80));
    }
  } catch (error) {
    console.error('Error listing models:', error.message);
    console.error('Full error:', error);
  }
}

listModels();
