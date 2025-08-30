export interface Skill {
  name: string;
  level: number;
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
  teamSize?: number;
  role?: string;
  period: string;
  category: 'web' | 'mobile' | 'fullstack';
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
  { name: "JavaScript", level: 95, category: "Programming Languages" },
  { name: "TypeScript", level: 90, category: "Programming Languages" },
  { name: "PHP", level: 85, category: "Programming Languages" },
  { name: "Java", level: 75, category: "Programming Languages" },
  { name: "Dart", level: 80, category: "Programming Languages" },

  // Frameworks
  { name: "ReactJS", level: 95, category: "Frameworks" },
  { name: "NextJS", level: 90, category: "Frameworks" },
  { name: "VueJS", level: 85, category: "Frameworks" },
  { name: "NuxtJS", level: 80, category: "Frameworks" },
  { name: "Laravel", level: 85, category: "Frameworks" },
  { name: "Flutter", level: 80, category: "Frameworks" },
  { name: "React Native", level: 75, category: "Frameworks" },
  { name: "NestJS", level: 70, category: "Frameworks" },

  // Libraries & Tools
  { name: "Tailwind CSS", level: 90, category: "Libraries & Tools" },
  { name: "Bootstrap 5", level: 85, category: "Libraries & Tools" },
  { name: "Ant Design", level: 80, category: "Libraries & Tools" },
  { name: "Zustand", level: 85, category: "Libraries & Tools" },
  { name: "Pinia", level: 80, category: "Libraries & Tools" },
  { name: "GSAP", level: 75, category: "Libraries & Tools" },
  { name: "InertiaJS", level: 80, category: "Libraries & Tools" },

  // DevOps & Tools
  { name: "Docker", level: 75, category: "DevOps & Tools" },
  { name: "Git", level: 90, category: "DevOps & Tools" },
  { name: "Ubuntu", level: 80, category: "DevOps & Tools" },
  { name: "Jenkins", level: 70, category: "DevOps & Tools" },
  { name: "GitLab CI/CD", level: 75, category: "DevOps & Tools" },

  // Database
  { name: "MySQL", level: 85, category: "Database" },
  { name: "Firebase", level: 80, category: "Database" },

  // Others
  { name: "RESTful API", level: 90, category: "Others" },
  { name: "UI/UX", level: 80, category: "Others" },
  { name: "Agile/Scrum", level: 85, category: "Others" },
  { name: "SEO", level: 75, category: "Others" },
  { name: "OOP", level: 90, category: "Others" },
  { name: "SOLID", level: 85, category: "Others" },
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
        category: "web"
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
        category: "web"
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
    description: "Built an internal corporate social network system similar to Facebook. It includes functions for users to update their personal page, post, comment, react to posts, upload stories, send messages, and video calls. It supports switching between 3 languages: Vietnamese, English, and Korean.",
    technologies: ["NuxtJS", "Tailwind CSS", "NextJS", "Axios", "WebSocket", "Stringee"],
    image: "/projects/heartfield.jpg",
    live: "https://shop.heartfield.co.kr/",
    teamSize: 6,
    role: "Main Dev - Directly involved in the development and maintenance of user profile functionality with NuxtJS and the development of admin management with NextJS.",
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
