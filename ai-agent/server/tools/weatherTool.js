const axios = require('axios');

const getWeather = async (location) => {
  // In a real app, use a weather API like OpenWeatherMap.
  // For this demo, we'll return mock data locally or use a free API if available without key (wttr.in).
  try {
    const response = await axios.get(`https://wttr.in/${location}?format=%C+%t`);
    return `The weather in ${location} is ${response.data.trim()}.`;
  } catch (error) {
    return `Could not fetch weather for ${location}.`;
  }
};

module.exports = {
  name: 'getWeather',
  description: 'Get the current weather for a specific location.',
  parameters: {
    type: 'object',
    properties: {
      location: {
        type: 'string',
        description: 'The city and state, e.g. San Francisco, CA'
      }
    },
    required: ['location']
  },
  execute: getWeather
};
