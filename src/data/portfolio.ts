export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  admin?: string;
  teamSize?: number;
  role?: string;
  period: string;
  category: 'web' | 'mobile' | 'fullstack';
  skills?: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  projects?: Project[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  description?: string;
}

export interface Certification {
  name: string;
  year: string;
  issuer?: string;
}

export const personalInfo = {
  name: "TRẦN MINH THẮNG",
  title: "Frontend Developer",
  email: "minhthangtran1606@gmail.com",
  phone: "0868928332",
  location: "Hà Nội",
  dateOfBirth: "16/06/2002",
  linkedin: "https://www.linkedin.com/in/minhthangtran1606/",
  github: "https://github.com/tranminhthang1606",
  summary: [
    "I have more than 2 years of experience working with Laravel, React-Nextjs, Vue-NuxtJS, Flutter Dart and nearly 2 years working for both Korean and Vietnamese companies.",
    "I also have knowledge of UI/UX, RESTful APIs, Agile and Scrum Development Model which help me develop the project sequentially.",
    "I usually spend my free time exploring new technologies to enhance my work and learn more new languages."
  ]
};

export const skills: Skill[] = [
  // Programming Languages
  { name: "JavaScript", category: "Programming Languages" },
  { name: "TypeScript", category: "Programming Languages" },
  { name: "PHP", category: "Programming Languages" },
  { name: "Java", category: "Programming Languages" },
  { name: "Dart", category: "Programming Languages" },

  // Frameworks
  { name: "ReactJS", category: "Frameworks" },
  { name: "NextJS", category: "Frameworks" },
  { name: "VueJS", category: "Frameworks" },
  { name: "NuxtJS", category: "Frameworks" },
  { name: "Laravel", category: "Frameworks" },
  { name: "Flutter", category: "Frameworks" },
  { name: "React Native", category: "Frameworks" },
  { name: "NestJS", category: "Frameworks" },

  // Libraries & Tools
  { name: "Tailwind CSS", category: "Libraries & Tools" },
  { name: "Bootstrap 5", category: "Libraries & Tools" },
  { name: "Ant Design", category: "Libraries & Tools" },
  { name: "Zustand", category: "Libraries & Tools" },
  { name: "Pinia", category: "Libraries & Tools" },
  { name: "GSAP", category: "Libraries & Tools" },
  { name: "InertiaJS", category: "Libraries & Tools" },

  // DevOps & Tools
  { name: "Docker", category: "DevOps & Tools" },
  { name: "Git", category: "DevOps & Tools" },
  { name: "Ubuntu", category: "DevOps & Tools" },
  { name: "Jenkins", category: "DevOps & Tools" },
  { name: "GitLab CI/CD", category: "DevOps & Tools" },

  // Database
  { name: "MySQL", category: "Database" },
  { name: "Firebase", category: "Database" },

  // Others
  { name: "RESTful API", category: "Others" },
  { name: "UI/UX", category: "Others" },
  { name: "Agile/Scrum", category: "Others" },
  { name: "SEO", category: "Others" },
  { name: "OOP", category: "Others" },
  { name: "SOLID", category: "Others" },
];

export const experiences: Experience[] = [
  {
    id: "cy-vietnam",
    company: "CY Vietnam Software Development Company",
    position: "Frontend Developer",
    period: "05/2024 - 08/2025",
    description: "Develop software according to company plan. Edit, update, refactor and debug code. Identify and fix software errors (debug). Collaborate with UI/UX, BA/PM and BE teams in requirement analysis.",
    technologies: ["VueJS", "Tailwind CSS", "Laravel", "Ant Design", "Axios", "InertiaJS"],
    projects: [
      {
        id: "cy-crm",
        title: "CY CRM",
        description: "Build an admin system to manage human resources, facilities and company expenses. Only company managers can log in and edit employee information, manage and export company invoices, manage facilities, and manage company budgets.",
        technologies: ["VueJS", "Tailwind CSS", "Laravel", "Ant Design", "Axios", "InertiaJS"],
        image: "/projects/cy-crm.jpg",
        teamSize: 8,
        role: "Main Dev - Directly involved in development and maintenance staffs and billing related functionality.",
        period: "05/2025 - 08/2025",
        category: "web",
        skills: ["VueJS", "Tailwind CSS", "Laravel", "Ant Design", "Axios", "InertiaJS", "PHP", "MySQL", "RESTful API", "CRUD Operations", "Admin Dashboard", "Export/Import Data"]
      },
      {
        id: "t78",
        title: "T78 - Online Exam System",
        description: "Build an online internal exam system and administrator to manage information about staff, teachers, students and student work. Includes 4 skills: listening, speaking, reading, writing with automatic and manual grading.",
        technologies: ["VueJS", "Tailwind CSS", "Pinia", "Ant Design", "Axios"],
        image: "/projects/t78.jpg",
        teamSize: 7,
        role: "Main Dev - Directly involved in management frontend projects and participate in developing project features.",
        period: "01/2025 - 06/2025",
        category: "web",
        skills: ["VueJS", "Tailwind CSS", "Pinia", "Ant Design", "Axios", "State Management", "Form Validation", "File Upload", "Real-time Updates", "Exam System", "Grading System", "User Management"]
      },
      {
        id: "cyfb",
        title: "CYFB",
        description: "Build an internal corporate social network system similar to Facebook. With similar functions to Facebook, users can update their personal page, post, comment, react posts, upload stories, send messages and video calls. Can switch back and forth between 3 languages: Vietnamese, English, Korean. The admin will manage data on posts, comments, reactions, messages and video calls.",
        technologies: ["NuxtJS", "Tailwind CSS", "NextJS", "Axios", "WebSocket", "Stringee"],
        image: "/projects/cyfb.jpg",
        teamSize: 6,
        role: "Main Dev - Directly involved in development and maintainance user profile functionality with NuxtJS and develop admin management with NextJS.",
        period: "10/2024 - 01/2025",
        category: "web",
        skills: ["NuxtJS", "NextJS", "Tailwind CSS", "Axios", "WebSocket", "Stringee", "Social Network", "Real-time Chat", "Video Calling", "Multi-language", "User Profiles", "Post Management", "Comment System", "Story Feature"]
      },
      {
        id: "heartfield-cy",
        title: "HEARTFIELD",
        description: "Store system management similar to Shopee, the project includes system administration and store administration.",
        technologies: ["TypeScript", "NextJS", "Tailwind CSS", "Zustand"],
        image: "/projects/heartfield-cy.jpg",
        teamSize: 8,
        role: "Support feature maintenance and development.",
        period: "07/2024 - 08/2024",
        category: "web",
        live: "https://shop.heartfield.co.kr/",
        github: "https://admin.heartfield.co.kr/",
        skills: ["TypeScript", "NextJS", "Tailwind CSS", "Zustand", "E-commerce", "Store Management", "Admin Dashboard", "Product Management", "Order Management", "Inventory System", "Payment Integration"]
      }
    ]
  },
  {
    id: "kztek",
    company: "KZTEK Investment and Development Joint Stock Company",
    position: "Internship PHP - Laravel",
    period: "10/2023 - 03/2024",
    description: "Configured and modified functions related to ad display in the company's electronic advertising project using Laravel, Jquery, Livewire, VueJS. Worked on small web projects assigned by the leader.",
    technologies: ["Laravel", "Jquery", "Livewire", "VueJS", "PHP"]
  },
  {
    id: "fpt-workshop",
    company: "FPT Programming Workshop",
    position: "Frontend And Backend Developer",
    period: "01/2023 - 08/2023",
    description: "Built functionality for projects based on Agile Scrum. Built projects with multiple frameworks like ReactJS, VueJS, NuxtJS, and NextJS for frontend, and Laravel for backend with SQL. Deployed projects on real hosting and handed over to customers.",
    technologies: ["ReactJS", "VueJS", "NuxtJS", "NextJS", "Laravel", "SQL"]
  }
];

export const projects: Project[] = [
  {
    id: "tmt-dating",
    title: "TMT Dating",
    description: "A Tinder-like dating chat app project. Users can like and match, chat, and video call with each other. The website allows users to switch between 3 languages: Vietnamese, English, and Korean.",
    technologies: ["NextJS", "TypeScript", "Stream", "TailwindCSS", "Supabase", "Gsap", "Zustand", "Next-intl", "Google Search Console"],
    image: "/projects/tmt-dating.jpg",
    github: "https://github.com/tranminhthang1606/TMT_Dating_App",
    live: "https://tmtdating.vercel.app/",
    teamSize: 1,
    role: "Developer",
    period: "08/2025 - Current",
    category: "web"
  },
  {
    id: "heartfield",
    title: "HEARTFIELD",
    description: "Store system management similar to Shopee, the project includes system administration and store administration.",
    technologies: ["TypeScript", "NextJS", "Tailwind CSS", "Zustand"],
    image: "/projects/heartfield.jpg",
    live: "https://shop.heartfield.co.kr/",
    admin: "https://admin.heartfield.co.kr/",
    teamSize: 8,
    role: "Support feature maintenance and development.",
    period: "07/2024 - 08/2024",
    category: "web"
  }
];

export const education: Education = {
  degree: "WEB DESIGN",
  institution: "FPT Polytechnics College",
  period: "03/2022 - 09/2024",
  gpa: "8.7/10",
  description: "Graduated with distinction"
};

export const certifications: Certification[] = [
  {
    name: "Web Frontend + React Techmaster",
    year: "2022",
    issuer: "Techmaster"
  }
];

export const references = [
  {
    name: "Nguyễn Cao Miên",
    position: "Team Lead",
    phone: "0867454162"
  },
  {
    name: "Trần Bích Liên",
    position: "Personnel Administration",
    phone: "0382065699"
  }
];
