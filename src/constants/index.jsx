import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import project1 from "../assets/profile-pictures/user1.jpg";
import project2 from "../assets/profile-pictures/user2.jpg";
import project3 from "../assets/profile-pictures/user3.jpg";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const testimonials = [
  {
    user: "Tech Lead",
    company: "Interactive UIs with React.js",
    image: project1,
    text: "Priyanka has demonstrated outstanding proficiency in React.js, delivering dynamic user interfaces that are both visually appealing and highly responsive. Her expertise in building modular components makes her a valuable asset to any development team.",
  },
  {
    user: "Senior Developer",
    company: "Frontend Optimization",
    image: project2,
    text: "Priyanka's ability to optimize frontend performance using best practices such as lazy loading and bundle size reduction significantly enhanced our application's user experience. Her attention to detail and commitment to delivering fast, scalable solutions is impressive.",
  },
  {
    user: "Project Manager",
    company: "API Integration Expertise",
    image: project3,
    text: "With Priyanka's help, we were able to seamlessly integrate multiple APIs into our web platform, allowing for dynamic content updates and real-time data management. Her technical skills in handling complex data flows were essential for the success of the project.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "React.js Expertise",
    description:
      "With 3.5 years of experience in React.js development, I specialize in building scalable and efficient web applications with clean, maintainable code.",
  },
  {
    icon: <Fingerprint />,
    text: "Modern JavaScript",
    description:
      "My deep understanding of JavaScript ES6+ features allows me to write optimized, readable, and maintainable code, following best practices.",
  },
  {
    icon: <ShieldHalf />,
    text: "Responsive Design",
    description:
      "I create responsive, user-friendly interfaces that work seamlessly across devices, ensuring a consistent and engaging experience.",
  },
  {
    icon: <BatteryCharging />,
    text: "Performance Optimization",
    description:
      "Through techniques like lazy loading and code splitting, I ensure fast load times and smooth interactions for web applications.",
  },
  {
    icon: <PlugZap />,
    text: "Collaborative Development",
    description:
      "I have a strong background in collaborating with cross-functional teams, utilizing tools like Git, Jira, and Agile methodologies.",
  },
  {
    icon: <GlobeLock />,
    text: "API Integration",
    description:
      "Proficient in integrating RESTful APIs, I enhance application functionality through dynamic data handling and seamless backend communication.",
  },
];

export const checklistItems = [
  {
    title: "Component-Based Architecture",
    description:
      "Built reusable, modular components for scalable and maintainable web applications using React.js.",
  },
  {
    title: "State Management Expertise",
    description:
      "Implemented Redux and Context API to efficiently manage the state in large-scale applications, ensuring predictable data flow.",
  },
  {
    title: "Performance Tuning",
    description:
      "Optimized web applications for speed by minimizing bundle size, enabling lazy loading, and using code splitting strategies.",
  },
  {
    title: "Responsive Web Design",
    description:
      "Ensured cross-platform compatibility and responsiveness for a wide range of devices by adhering to modern design principles.",
  },
];

export const pricingOptions = [
  {
    title: "Freelance",
    price: "$30/hr",
    features: [
      "Custom Frontend Development",
      "API Integration",
      "UI/UX Optimization",
      "Performance Enhancement",
    ],
  },
  {
    title: "Full Project",
    price: "Custom Quote",
    features: [
      "End-to-End Development",
      "React.js Applications",
      "Responsive Design",
      "Continuous Support",
    ],
  },
  {
    title: "Consultation",
    price: "$100",
    features: [
      "1 Hour Consultation",
      "Technical Advice",
      "Performance Review",
      "Best Practices Overview",
    ],
  },
];

export const resourcesLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
];

export const platformLinks = [
  { href: "/", text: "Features" },
  { href: "/projects", text: "My Projects" },
  { href: "/about", text: "About Me" },
  { href: "/contact", text: "Contact" },
];

export const communityLinks = [
  { href: "/events", text: "Events" },
  { href: "/meetups", text: "Meetups" },
  { href: "/conferences", text: "Conferences" },
  { href: "/hackathons", text: "Hackathons" },
];
