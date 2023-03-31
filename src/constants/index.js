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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "3D/2D Artist",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Davius proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Davius does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Davius optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Twitter",
    description:
      "The Offical Street Wise Media Twitter Page",
    tags: [
      {
        name: "3DArtist",
        color: "blue-text-gradient",
      },
      {
        name: "WEB3DEV",
        color: "green-text-gradient",
      },
      {
        name: "NFTs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://twitter.com/strwisemedia",
  },
  {
    name: "YouTube",
    description:
      "The Official Street Wise Media YouTube Channel.",
    tags: [
      {
        name: "VideoGraphy",
        color: "blue-text-gradient",
      },
      {
        name: "MotionGraphics",
        color: "green-text-gradient",
      },
      {
        name: "Vlog",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://youtube.com/strwisemedia",
  },
  {
    name: "Facebook",
    description:
      "The Official Street Wise Media Facebook Page.",
    tags: [
      {
        name: "Personal",
        color: "blue-text-gradient",
      },
      {
        name: "Human",
        color: "green-text-gradient",
      },
      {
        name: "Life",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.facebook.com/StreetWiseMedia/",
  },
];

export { services, technologies, experiences, testimonials, projects };
