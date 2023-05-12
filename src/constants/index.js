import {
  logo,
  demo,
  github,
  githubicon,
  linkedinicon,
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
  cdssketch,
  edx,
  // projects
  cheatsheet,
  horiseon,
  passwordgenerator,
  preworkstudyguide,
  readmeoutput,
  teamprofile,
  checkitdesignservices,
  findmyband,
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
        "Designed & built modern web apps using Node.js & React.js.",
        "Understanding UX design priciples.",
        "Using Git, GitHub & Netlify.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Checkit Design Services",
      icon: cdssketch,
      iconBg: "#383E56",
      date: "Nov 2021 - Present",
      points: [
        "Designing and deploying bespoke websites.",
        "Gaining knowledge Bootstrap 5.",
        "Understanding HTML5 structures.",
        "Deploying via FTP.",
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
          color: "yellow-text-gradient",
        },
        {
          name: "html5",
          color: "pink-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "purple-text-gradient",
        },
      ],
      image: passwordgenerator,
      demo_link: "https://chriscds.github.io/Password-Generator/",
      source_code_link: "https://github.com/Chriscds/Password-Generator",
    },
    {
      name: "npm README.md Generator",
      description:
        "A node.js application, to generate a readme file for your project from the command line using npm. Create a README.md file from user input, including license badges and contact information, to save time on writing out the users initial README.md.",
      tags: [
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "markdown",
          color: "orange-text-gradient",
        },
      ],
      image: readmeoutput,
      demo_link: "https://drive.google.com/file/d/11YReBi5jf6As_MxEWijV8UBV0V3YqOL-/view",
      source_code_link: "https://github.com/Chriscds/npm-readme-generator",
    },
    {
      name: "Find My Band",
      description:
        "Find My Band is a Web application project to search for your favourite musicans, their upcoming event venues, along with map and directions for the users chosen venue. Using three API's, the web application will return the results from your inputted search, with an events carousel from the chosen artist, map of the chosen venue complete with directions.",
      tags: [
        {
          name: "html5",
          color: "pink-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
      image: findmyband,
      demo_link: "https://jayclay922.github.io/Find-My-Band/index.html",
      source_code_link: "https://github.com/JayClay922/Find-My-Band",
    },
    {
      name: "Team Profile Generator",
      description:
        "Node.js command-line application. This application will take in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
      tags: [
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "markdown",
          color: "orange-text-gradient",
        },
      ],
      image: teamprofile,
      demo_link: "https://github.com/Chriscds/Team-Profile-Generator/blob/main/assets/team-profile-input.png",
      source_code_link: "https://github.com/Chriscds/Team-Profile-Generator",
    },
    {
      name: "CSS Cheatsheet",
      description:
        "Shows how CSS Flexbox, rows, columns and grid layouts work.",
      tags: [
        {
          name: "bootstrap",
          color: "purple-text-gradient",
        },
        {
          name: "html5",
          color: "pink-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
      ],
      image: cheatsheet,
      demo_link: "https://chriscds.github.io/CSS-Cheatsheet/index.html",
      source_code_link: "https://github.com/Chriscds/CSS-Cheatsheet",
    },
    {
      name: "Prework Study Guide Webpage",
      description:
        "This Prework Study Guide was created for boot camp students who are going through and completing their Prework studies. It contains notes on HTML, CSS, Git, and Javascript.",
      tags: [
        {
          name: "html5",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
      ],
      image: preworkstudyguide,
      demo_link: "https://chriscds.github.io/prework-study-guide/",
      source_code_link: "https://github.com/Chriscds/prework-study-guide",
    },
    {
      name: "Refactoring work", 
      description:
        "Refactor work for a marketing website application Horiseon. It contains information about the company, and what they do to forfill Search Engine Optimization, Online Reputation Managment, and Social Media Marketing.",
      tags: [
        {
          name: "html5",
          color: "pink-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },
      ],
      image: horiseon,
      demo_link: "https://chriscds.github.io/mod1-ass-horiseon/starter/",
      source_code_link: "https://github.com/Chriscds/mod1-ass-horiseon",
    },
    {
      name: "Checkit Design Services",
      description:
        "A html and boostrap website, with css animation.",
      tags: [
        {
          name: "html5",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "bootstrap",
          color: "purple-text-gradient",
        },
        {
          name: "css3",
          color: "blue-text-gradient",
        },

      ],
      image: checkitdesignservices,
      demo_link: "https://www.checkitdesignservices.com/",
      source_code_link: "https://www.checkitdesignservices.com/",
    },
    // {
    //   name: "",
    //   description:
    //     "",
    //   tags: [
    //     {
    //       name: "",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: ,
    //   demo_link: "",
    //   source_code_link: "",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };