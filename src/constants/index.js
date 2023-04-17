import {
  logo,
  github,
  menu,
  close,
  coffee,
  colorchart,
  keyboard,
  puzzle,
  // tech
  bootstrap,
  css,
  // docker,
  figma,
  git,
  githubdark,
  html,
  javascript,
  jquery,
  // mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  // experiences
  edx,
  // projects
  cheatsheet,
  horiseon,
  passwordgenerator,
  preworkstudyguide,
  readmeoutput,
  teamprofile,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
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
      title: "Frontend Developer",
      icon: keyboard,
    },
    {
      title: "Problem Solver",
      icon: puzzle,
    },
    {
      title: "Content Creator",
      icon: colorchart,
    },
    {
      title: "Coffee Drinker",
      icon: coffee,
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
      name: "jQuery",
      icon: jquery,
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
      name: "bootstrap",
      icon: bootstrap,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "GitHub",
      icon: githubdark,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Bootcamp",
      company_name: "edX",
      icon: edx,
      iconBg: "#383E56",
      date: "Nov 2022 - March 2023",
      points: [
        "Learnt HTML, CSS and JavaScript fundamentals.",
        "Designed & built mordern web apps using Node.js & React.js.",
        "Understanding UX design priciples.",
        "Using Git, GitHub & Netlify.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Password Generator",
      description:
        "Password Generator webpage application choses a random password combination, based on the users input and selection of characters. Javascript will run through the users choices and will select a random password combination, and will display the results on screen with the users chosen lenght and combination.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html5",
          color: "green-text-gradient",
        },
        {
          name: "css3",
          color: "pink-text-gradient",
        },
      ],
      image: passwordgenerator,
      source_code_link: "https://github.com/Chriscds/Password-Generator",
    },
    {
      name: "npm README.md Generator",
      description:
        "A node.js application, to generate a readme file for your project from the command line using npm. Create a README.md file from user input, including license badges and contact information, to save time on writing out the users initial README.md.",
      tags: [
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "markdown",
          color: "pink-text-gradient",
        },
      ],
      image: readmeoutput,
      source_code_link: "https://github.com/Chriscds/npm-readme-generator",
    },
    {
      name: "Team Profile Generator",
      description:
        "Node.js command-line application. This application will take in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
      tags: [
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "markdown",
          color: "pink-text-gradient",
        },
      ],
      image: teamprofile,
      source_code_link: "https://github.com/Chriscds/Team-Profile-Generator",
    },
    {
      name: "CSS Cheatsheet",
      description:
        "Shows how CSS Flexbox, rows, columns and grid layouts work.",
      tags: [
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "html5",
          color: "green-text-gradient",
        },
        {
          name: "css3",
          color: "pink-text-gradient",
        },
      ],
      image: cheatsheet,
      source_code_link: "https://github.com/Chriscds/CSS-Cheatsheet",
    },
    {
      name: "Prework Study Guide Webpage",
      description:
        "This Prework Study Guide was created for boot camp students who are going through and completing their Prework studies. It contains notes on HTML, CSS, Git, and Javascript.",
      tags: [
        {
          name: "html5",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css3",
          color: "pink-text-gradient",
        },
      ],
      image: preworkstudyguide,
      source_code_link: "https://github.com/Chriscds/prework-study-guide",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };