import { PortfolioData } from '../types';
import luisHeadshot from '../assets/images/luis_original_beach_photo_1785242336105.jpg';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: "Luis Enrico A. Hipolito",
    title: "Virtual Assistant",
    tagline: "Empowering founders, agency owners, and busy teams with high-precision administrative, operational, data, and research support.",
    bio: "I am a detail-oriented BSIT student with experience using AI tools, Google Workspace, Microsoft Office, data entry, research, and administrative support. I enjoy learning new systems and helping businesses stay organized.",
    photoUrl: luisHeadshot,
    email: "mr.hipolito08@gmail.com",
    phone: "+1 (555) 234-8901",
    location: "Remote Worldwide",
    timezone: "EST / CST / PST Flexible",
    linkedin: "linkedin.com/in/luis-enrico-hipolito-411a85384/",
    website: "luishipolitova.com",
    hourlyRate: 12,
    availability: "Free Trial Available",
    weeklyHoursAvailable: 30,
    yearsExperience: 3,
    tasksCompleted: 450,
    hoursSavedMonthly: 120,
  },
  services: [
    {
      id: "admin-support",
      title: "Administrative & Operational Support",
      shortDesc: "Inbox zero triage, calendar management, meeting prep, and daily operational coordination.",
      detailedBullets: [
        "Email inbox filtering, tagging, draft responses, & spam elimination",
        "Multi-timezone calendar scheduling & meeting logistics",
        "Travel itineraries, flight/hotel booking & transport coordination",
        "Meeting agenda creation, live note-taking, & action item tracking",
        "Vendor coordination & monthly expense receipt categorization"
      ],
      iconName: "Briefcase",
      popular: true,
      estimatedHourlyRate: 20
    },
    {
      id: "data-entry",
      title: "Data Management & CRM Cleanup",
      shortDesc: "Accurate database management, CRM data hygiene, and automated spreadsheet reporting.",
      detailedBullets: [
        "Spreadsheet cleanup, formatting, data validation & formula auditing",
        "CRM contact entry & pipeline stage updating (HubSpot, Salesforce, Airtable)",
        "E-commerce inventory updates & order tracking management",
        "Document digitization, PDF conversion & cloud file folder structuring",
        "Lead list verification & contact info enrichment"
      ],
      iconName: "Database",
      popular: false,
      estimatedHourlyRate: 18
    },
    {
      id: "research",
      title: "Internet Research & Intelligence",
      shortDesc: "Targeted market research, competitor benchmarking, lead generation, and synthesized summary reports.",
      detailedBullets: [
        "In-depth market & industry trend analysis summaries",
        "B2B Lead generation & decision-maker contact list building",
        "Competitor pricing, product, & marketing strategy audits",
        "Software tool comparison grids & recommendation briefs",
        "Event, podcast guest, & venue research"
      ],
      iconName: "Search",
      popular: true,
      estimatedHourlyRate: 20
    },
    {
      id: "social-media",
      title: "Social Media & Content Operations",
      shortDesc: "Content scheduling, Canva graphics design, engagement monitoring, and basic video editing.",
      detailedBullets: [
        "Social media content calendar creation & post scheduling (Buffer/Later)",
        "Canva visual graphics, story templates & slide carousel design",
        "Community comment & direct message triage support",
        "Hashtag research & basic social analytics tracking",
        "Short-form video captions, transcriptions & repurposing"
      ],
      iconName: "Share2",
      popular: false,
      estimatedHourlyRate: 18
    },
    {
      id: "travel-expense",
      title: "Travel Logistics & Expense Auditing",
      shortDesc: "Hassle-free travel planning, flight bookings, and monthly expense reconciliation.",
      detailedBullets: [
        "Multi-city flight, hotel, train, & ground transport bookings",
        "Comprehensive minute-by-minute trip itineraries in Notion/Google Docs",
        "Receipt collection, categorization & expense report submission",
        "Currency conversion & credit card statement reconciliation",
        "Visa requirement checks & travel safety protocol briefing"
      ],
      iconName: "Plane",
      popular: false,
      estimatedHourlyRate: 20
    },
    {
      id: "ai-workflows",
      title: "AI-Powered Productivity & Workflows",
      shortDesc: "Leveraging ChatGPT & Gemini prompts to accelerate content drafting, meeting transcription, and workflow automation.",
      detailedBullets: [
        "Custom ChatGPT/Gemini prompt engineering for rapid document drafting",
        "Automated audio transcript summarization (Otter/Fireflies/Descript)",
        "Zapier & Make.com micro-automations for email and sheet syncs",
        "AI-assisted research synthesis & email draft polishing",
        "Knowledge base & Notion wiki architecture"
      ],
      iconName: "Sparkles",
      popular: true,
      estimatedHourlyRate: 22
    }
  ],
  skills: [
    { id: "s1", name: "Calendar & Schedule Management", category: "Core Support", level: 88, description: "Efficient alignment of multi-calendar schedules across various timezones." },
    { id: "s2", name: "Inbox Zero Triage", category: "Core Support", level: 86, description: "Structuring automated filters, priority folders, and rapid response templates." },
    { id: "s3", name: "Data Hygiene & Formatting", category: "Technical", level: 85, description: "Cleaning messy raw data, removing duplicates, and applying conditional formatting." },
    { id: "s4", name: "B2B Prospect Research", category: "Technical", level: 84, description: "Finding verified founder and decision-maker contact details using LinkedIn & Web Search." },
    { id: "s5", name: "Travel Itinerary Planning", category: "Organization", level: 87, description: "Creating seamless end-to-end trip schedules with confirmation details." },
    { id: "s6", name: "Canva Brand Design", category: "Organization", level: 82, description: "Designing clean presentations, infographics, and social media carousels." },
    { id: "s7", name: "Proactive Communication", category: "Communication", level: 89, description: "Delivering regular daily updates and flagging urgent action items early." },
    { id: "s8", name: "Strict Confidentiality & NDA", category: "Communication", level: 90, description: "Trusted handling of emails, passcodes, and confidential company details." },
    { id: "s9", name: "Prompt Engineering (AI)", category: "AI & Automation", level: 85, description: "Using ChatGPT & Gemini to synthesize documents and draft email responses." },
    { id: "s10", name: "Workflow Automation", category: "AI & Automation", level: 80, description: "Connecting Gmail, Google Sheets, Slack, and Notion using Zapier." }
  ],
  tools: [
    { id: "t1", name: "Google Workspace", category: "Productivity", iconName: "Folder", highlight: "Gmail, Docs, Sheets, Slides, Drive", proficiency: "Advanced" },
    { id: "t2", name: "Microsoft 365", category: "Productivity", iconName: "FileText", highlight: "Excel Pivot Tables, Outlook, Word", proficiency: "Advanced" },
    { id: "t3", name: "Notion", category: "Productivity", iconName: "BookOpen", highlight: "Wiki setup, Database views, Task boards", proficiency: "Advanced" },
    { id: "t4", name: "Slack & Teams", category: "Communication", iconName: "MessageSquare", highlight: "Async updates, channel management", proficiency: "Advanced" },
    { id: "t5", name: "Zoom & Calendly", category: "Communication", iconName: "Video", highlight: "Automated booking links & waiting rooms", proficiency: "Advanced" },
    { id: "t6", name: "Trello & Asana", category: "Project Management", iconName: "CheckSquare", highlight: "Kanban boards, milestone tracking", proficiency: "Advanced" },
    { id: "t7", name: "ClickUp", category: "Project Management", iconName: "Layers", highlight: "Task boards & task templates", proficiency: "Advanced" },
    { id: "t8", name: "Canva Pro", category: "Design & Content", iconName: "Image", highlight: "Brand kits, decks, social templates", proficiency: "Advanced" },
    { id: "t9", name: "ChatGPT & Gemini", category: "AI & Automation", iconName: "Bot", highlight: "Content drafting, research synthesis", proficiency: "Advanced" },
    { id: "t10", name: "Zapier & Make", category: "AI & Automation", iconName: "Zap", highlight: "Automated multi-step webhooks", proficiency: "Advanced" },
    { id: "t11", name: "Airtable", category: "Productivity", iconName: "Table", highlight: "Relational database views & forms", proficiency: "Advanced" },
    { id: "t12", name: "Loom", category: "Communication", iconName: "Camera", highlight: "SOP video walkthrough creation", proficiency: "Advanced" }
  ],
  workSamples: [
    {
      id: "crm-spreadsheet",
      title: "Sales Lead Pipeline & Revenue Tracker",
      subtitle: "Organized Google Sheets database with status tags and metric summaries.",
      category: "Spreadsheets",
      description: "Transformed an unorganized raw dump of 250+ leads into a color-coded, dynamic Google Sheet with deal stage tracking and contact categorization.",
      tags: ["Google Sheets", "CRM Hygiene", "Data Formatting", "KPI Metrics"],
      impactMetric: "Organized 250+ Lead Database",
      contentType: "spreadsheet",
      mockData: {
        totalLeads: 248,
        conversionRate: "24.5%",
        pipelineValue: "$184,500",
        leads: [
          { company: "Apex Digital Cloud", contact: "Marcus Vance", email: "m.vance@apexdigital.com", stage: "Proposal Sent", dealValue: "$24,000", probability: "80%", status: "High Priority" },
          { company: "Vanguard Partners", contact: "Sarah Chen", email: "sarah@vanguardp.io", stage: "Discovery Call", dealValue: "$15,500", probability: "50%", status: "In Progress" },
          { company: "Luminary AI Studio", contact: "David Miller", email: "d.miller@luminaryai.co", stage: "Closed Won", dealValue: "$42,000", probability: "100%", status: "Closed" },
          { company: "Horizon Retail Tech", contact: "Elena Gomez", email: "elena@horizonrt.com", stage: "Qualified Lead", dealValue: "$18,000", probability: "60%", status: "Follow Up" },
          { company: "Nexus Health Systems", contact: "Dr. James Wright", email: "wright@nexushealth.org", stage: "Negotiation", dealValue: "$35,000", probability: "90%", status: "Urgent" }
        ]
      }
    },
    {
      id: "exec-itinerary",
      title: "Multi-City Travel & Meeting Master Itinerary",
      subtitle: "Detailed travel briefing for a 4-day Tokyo & Singapore roadshow.",
      category: "Calendar & Travel",
      description: "Organized flight transfers, local driver arrangements, hotel confirmation codes, timezone shifts, and meeting agendas into a mobile-accessible digital brief.",
      tags: ["Travel Logistics", "Notion Brief", "Timezone Sync"],
      impactMetric: "Zero Meeting Delays Across 3 Timezones",
      contentType: "itinerary",
      mockData: {
        tripTitle: "Tokyo & Singapore Business Travel Roadshow",
        traveler: "Alex Rivera (Managing Partner)",
        dates: "Oct 12 - Oct 16, 2026",
        items: [
          { time: "08:30 AM JST", event: "Private Driver Pick-up at Haneda Airport", location: "Haneda Int. Airport Terminal 3", note: "Driver: Kenji (Confirmation #HND-992)" },
          { time: "10:30 AM JST", event: "Keynote Investor Meeting - SoftBank Vision Fund", location: "Shiodome City Center, Floor 28", note: "Prep document & pitch deck uploaded to Drive" },
          { time: "01:00 PM JST", event: "Business Lunch with Mitsubishi UFJ Leads", location: "Seryna Restaurant, Roppongi", note: "Dietary preference confirmed: Gluten-free" },
          { time: "06:15 PM JST", event: "Flight Departure to Singapore (JL711)", location: "Narita Airport Gate 62", note: "Business Class seat 3A, passport valid" }
        ]
      }
    },
    {
      id: "competitor-research",
      title: "Competitive Landscape & Research Report",
      subtitle: "Synthesized briefing comparing 8 top AI project management platforms.",
      category: "Research",
      description: "Conducted exhaustive research across pricing models, core feature gaps, user reviews, and market positioning to assist with strategic planning.",
      tags: ["Market Intelligence", "Briefing", "Competitive Analysis"],
      impactMetric: "Delivered Comprehensive Benchmark Report",
      contentType: "research",
      mockData: {
        topic: "AI Task Automation & PM Tools Benchmark",
        date: "July 2026",
        keyTakeaways: [
          "82% of mid-tier agencies prefer usage-based pricing over per-seat flat pricing.",
          "Zapier integration remains the #1 requested capability among agency clients.",
          "Customer support response time under 15 mins is driving 34% higher retention."
        ],
        competitors: [
          { name: "TaskFlow AI", pricing: "$19/user/mo", pros: "Native Gemini AI summaries, sleek mobile app", cons: "Limited offline cache" },
          { name: "Opus Pro PM", pricing: "$29/user/mo", pros: "Deep Jira & GitHub integration", cons: "Steep learning curve" },
          { name: "SyncSphere", pricing: "$15/user/mo", pros: "Excellent live video collaboration", cons: "Lacks automated reporting" }
        ]
      }
    },
    {
      id: "social-calendar",
      title: "Social Media Content Grid & Canva Graphics",
      subtitle: "30-day LinkedIn & Instagram content batch with graphics and copywriting.",
      category: "Social Media",
      description: "Designed multi-slide carousels in Canva, wrote engaging industry captions, researched high-intent hashtags, and scheduled all posts via Buffer.",
      tags: ["Canva Pro", "Content Strategy", "Buffer Scheduling"],
      impactMetric: "30 Days of Scheduled Content Completed",
      contentType: "social_deck",
      mockData: {
        brand: "SaaS Scaling Insights",
        posts: [
          { day: "Mon (Day 1)", platform: "LinkedIn Carousel", topic: "5 Ways Virtual Assistants Save Founders 20 Hrs/Wk", engagement: "342 Likes • 48 Reposts" },
          { day: "Wed (Day 3)", platform: "Instagram Reel Graphic", topic: "Behind the Scenes: Inbox Zero System", engagement: "1.2k Views • 89 Saves" },
          { day: "Fri (Day 5)", platform: "LinkedIn Article", topic: "How to Delegate Operational Bottlenecks", engagement: "520 Reads • 31 Comments" }
        ]
      }
    }
  ],
  testimonials: []
};

