export const personalInfo = {
  basicInfo: {
    name: "Himanshu Ratnakar",
    birthday: "1993-06-05",
    age: 32,
    email: "himanshu.rat@gmail.com",
    phone: +919458704529, 
    location: {
      city: "Greater Noida",
      country: "India",
      timezone: "Asia/Kolkata",
      workPreference: "Remote / Hybrid"
    },
    availability: {
      openToWork: true,
      freelanceAvailable: true,
      relocation: false
    }
  },

  professional: {
    title: "AI MERN Stack Developer",
    experienceYears: 5,
    seniorityLevel: "Mid-Level Software Engineer",

    summary:
      "MERN stack developer specializing in scalable web applications and AI-powered solutions. Strong focus on performance optimization, clean architecture, and real-world problem solving.",

    currentFocus: [
      "AI Agent Development",
      "Scalable Backend Systems",
      "Full-stack SaaS Applications",
      "Performance Optimization"
    ],

    expertiseAreas: [
      "Frontend Architecture",
      "REST API Design",
      "Authentication & Authorization (JWT, Refresh Tokens)",
      "State Management",
      "Component Optimization",
      "Database Design",
      "System Debugging"
    ],

    skills: {
      frontend: [
        "React",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "React Hooks",
        "React Router v6",
        "Context API"
      ],

      backend: [
        "Node.js",
        "Express.js",
        "REST API Development",
        "Middleware Architecture",
        "Authentication Systems",
        "File Upload Handling"
      ],

      database: [
        "MongoDB",
        "Mongoose ODM",
        "MS SQL",
        "Query Optimization",
        "Indexing Strategies"
      ],

      tools: [
        "Git",
        "Postman",
        "VS Code",
        "Chrome DevTools",
        "NPM",
        "Vite"
      ],

      devPractices: [
        "Clean Code",
        "Reusable Component Design",
        "Modular Architecture",
        "Performance Profiling",
        "Code Refactoring"
      ]
    },

    metrics: {
      projectsCompleted: 20, // Adjust if needed
      largestTeamWorkedWith: 5,
      productionDeployments: 10,
      apiIntegrationsDone: 15
    },

    learningGoals: [
      "System Design (Low-Level & High-Level)",
      "AI Agent Architecture",
      "LLM Integration",
      "Microservices Architecture",
      "Advanced SQL Query Tuning",
      "Cloud Deployment (AWS)"
    ]
  },

  projects: [
    {
      name: "AI Portfolio Assistant",
      description:
        "Interactive AI chatbot integrated into personal portfolio to answer questions about skills, projects, and experience.",
      techStack: ["React", "Node.js", "AI API"],
      highlights: [
        "Context-aware responses",
        "Custom knowledge base",
        "Frontend chat UI",
        "Optimized prompt engineering"
      ],
      type: "Personal Project"
    },
    {
      name: "Authentication System with Refresh Tokens",
      description:
        "Secure login system with access tokens, refresh tokens, protected routes, and role-based authorization.",
      techStack: ["React", "Node.js", "MongoDB"],
      highlights: [
        "JWT implementation",
        "Token rotation",
        "Secure route guards",
        "Session persistence"
      ],
      type: "Backend Focused"
    }
  ],

  interests: {
    hobbies: [
      "Cooking",
      "Reading",
      "Portrait Drawing",
      "Problem Solving",
      "Coding Challenges"
    ],

    favoriteFood: ["Dal Chawal", "Bhindi"],

    techInterests: [
      "Artificial Intelligence",
      "AI Agents",
      "Web Performance",
      "Automation",
      "System Architecture"
    ]
  },

  personalityTraits: [
    "Analytical Thinker",
    "Problem Solver",
    "Detail Oriented",
    "Continuous Learner",
    "Logical Decision Maker",
    "Performance Focused"
  ],

  workingStyle: {
    preferredExplanationStyle: "Detailed and technical",
    communicationStyle: "Direct and structured",
    debuggingApproach: [
      "Reproduce issue",
      "Isolate component",
      "Analyze logs",
      "Optimize solution"
    ],
    codingStyle: "Clean, modular, optimized"
  },

  careerGoals: {
    shortTerm:
      "Become proficient in AI agent architecture and system design.",
    longTerm:
      "Build scalable AI-powered SaaS platforms and transition into Senior/Lead Engineer role."
  },

  socialLinks: {
    github: "https://github.com/thunder-himanshu",
    linkedin: "https://linkedin.com/in/himanshu-ratnakar-94744432/",
    portfolio: "https://himanshu-ratnakar1234.netlify.app/"
  },

  aiAssistantConfig: {
    knowledgeScope:
      "Respond only using provided personal and professional data. Avoid general unrelated knowledge.",
    tone: "Professional and helpful",
    answerDepth: "Detailed and structured",
    fallbackMessage:
      "I only have information related to Himanshu's profile, skills, and projects."
  }
};
