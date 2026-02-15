// My Personal Data
const personalInfo = {
  basicInfo: {
    name: "Himanshu Ratnakar",
    birthday: "1993-06-05",
    age: 32,
    email: "himanshu.rat@gmail.com",
    location: {
      country: "India",
      timezone: "Asia/Kolkata"
    }
  },

  professional: {
    title: "MERN Stack Developer",
    experienceYears: 5,
    currentFocus: "Building scalable AI-powered web applications",
    skills: {
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB", "MS SQL"],
      tools: ["Git", "Postman", "VS Code"]
    },
    learningGoals: [
      "System Design",
      "AI Agent Architecture",
      "Performance Optimization",
      "Advanced SQL Query Tuning"
    ]
  },

  interests: {
    hobbies: ["Cooking", "Reading", "Portrait Drawing", "Coding"],
    favoriteFood: ["Dal Chawal", "Bhindi"],
    techInterests: ["Artificial Intelligence", "Web Performance", "Automation"]
  },

  personalityTraits: [
    "Analytical",
    "Problem Solver",
    "Detail Oriented",
    "Continuous Learner"
  ],

  socialLinks: {
    github: "https://github.com/thunder-himanshu",
    linkedin: "https://linkedin.com/in/himanshu-ratnakar-94744432/",
    portfolio: "https://himanshu-ratnakar1234.netlify.app/"
  },

  aiPreferences: {
    preferredExplanationStyle: "Detailed and technical",
    interviewPreparationLevel: "5 years experience",
    codingStyle: "Clean and optimized"
  }
};

/**
 * Get user's personal information
 * @param {string} category - Category of information to retrieve (basicInfo, professional, interests, personalityTraits, socialLinks, aiPreferences, or 'all')
 * @returns {string} JSON string containing the requested information
 */
const getPersonalData = async (category) => {
  if (category === 'all') {
    return JSON.stringify(personalInfo, null, 2);
  }
  
  if (personalInfo[category]) {
    return JSON.stringify({ [category]: personalInfo[category] }, null, 2);
  }
  
  return `Category '${category}' not found. Available categories: basicInfo, professional, interests, personalityTraits, socialLinks, aiPreferences, or use 'all' for complete information.`;
};

module.exports = {
  name: 'getPersonalData',
  description: 'Get information about Himanshu Ratnakar, the user. Use this tool to retrieve personal information, professional background, skills, interests, or preferences.',
  parameters: {
    type: 'object',
    properties: {
      category: {
        type: 'string',
        description: "Category of information to retrieve. Options: 'basicInfo' (name, age, email, location), 'professional' (title, skills, experience, learning goals), 'interests' (hobbies, food, tech interests), 'personalityTraits', 'socialLinks' (GitHub, LinkedIn, portfolio), 'aiPreferences' (explanation style, coding style), or 'all' for complete information",
        enum: ['basicInfo', 'professional', 'interests', 'personalityTraits', 'socialLinks', 'aiPreferences', 'all']
      }
    },
    required: ['category']
  },
  execute: getPersonalData
};
