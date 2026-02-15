const weatherTool = require('../tools/weatherTool');
const calculatorTool = require('../tools/calculatorTool');
const dbQueryTool = require('../tools/dbQueryTool');
const personalDataTool = require('../tools/personalDataTool');

const tools = {
  getWeather: weatherTool,
  calculate: calculatorTool,
  queryDatabase: dbQueryTool,
  getPersonalData: personalDataTool
};

const executeTool = async (toolCall) => {
  const functionName = toolCall.function.name;
  const args = JSON.parse(toolCall.function.arguments);

  const tool = tools[functionName];
  if (!tool) {
    return `Tool ${functionName} not found.`;
  }

  try {
    console.log(`Executing tool: ${functionName} with args:`, args);
    const result = await tool.execute(...Object.values(args));
    return result;
  } catch (error) {
    console.error(`Error executing tool ${functionName}:`, error);
    return `Error executing tool: ${error.message}`;
  }
};

module.exports = { executeTool };
