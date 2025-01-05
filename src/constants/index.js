import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Wiingy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Engineered a scalable backend architecture with Node.js, Express.js, and TypeScript, leveraging Redis to slash landing page load times by50%.",
      "Transitioned workflows to a MERN-powered web portal, eliminating manual Google Sheets processes and boosting teamproductivity by 40%.",
      "Streamlined paymentoperations byintegrating Stripe and automated email notifications, cutting transaction processing time by 30%.",
      "Streamlined paymentoperations byintegrating Stripe and automated email notifications, cutting transaction processing time by 30%.",
      "Accelerated data retrieval by 35% through SQLqueryoptimization andRediscachingimplementation. Integrated advanced scheduling solutions with Google Calendar API and React Big Calendar, achieving 100%schedulingaccuracy.",
      "Developed areal-time chat platform with Socket.io, elevating user communication efficiency and driving a 50%increaseinresponserates.",
      "Built an automated CRM system, driving a 75% surge in user engagement by automating notifications and demorequestworkflows."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Kyroc",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Dec 2023",
    points: [
      "Engineered avoice-to-text web application leveraging OpenAI APIs to automate audio-to-text conversions for summaries, emails, and social media posts.",
      "Implemented Stripe API for subscription management, enabling efficient payment processing and recurring billing functionality.",
      "Collaborated with cross-functional teams to align product development with business objectives and user requirements."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Developed a web application for student assessments, generating personalized career paths based on test results.",
      "Implemented role-based authentication,allowing students to take exams and admins to manage questions, answers, and content creation.",
      "Streamlined test creation using the RIASEC Model, reducing content development time by30%."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
