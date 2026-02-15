const mongoose = require('mongoose');

// This tool allows the agent to query the database.
// For security, we might restrict what it can query.
// Here we'll allow it to count users or conversations as an example.

const queryDatabase = async (queryType) => {
  try {
    if (queryType === 'count_conversations') {
      const count = await mongoose.model('Conversation').countDocuments();
      return `There are ${count} conversations in the database.`;
    }
    // Add more query types as needed
    return `Query type "${queryType}" is not supported.`;
  } catch (error) {
    return `Database query failed: ${error.message}`;
  }
};

module.exports = {
  name: 'queryDatabase',
  description: 'Query the database for specific information.',
  parameters: {
    type: 'object',
    properties: {
      queryType: {
        type: 'string',
        enum: ['count_conversations'],
        description: 'The type of query to perform.'
      }
    },
    required: ['queryType']
  },
  execute: queryDatabase
};
