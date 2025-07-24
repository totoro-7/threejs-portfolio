const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Personal",
    link: "#personal",
  },
];

const words = [
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Cloud", imgPath: "/images/cloud.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Cloud", imgPath: "/images/cloud.svg" },
];

const counterItems = [
  { value: 2026, suffix: "June", title: " Bachelor's Degree", label: "Nanyang Technological University - Information Engineering and Media" },
  { value: 2025, suffix: "March", title: " Exchange Semester", label: "Technical University of Munich - Computation, Information and Technology" },
  { value: 2022, suffix: "Feb", title: " Cambridge A levels", label: "Victoria Junior College - Physics, Chemistry, Math, Economics" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/ai.png",
    title: "Artificial Intelligence & Machine Learning",
    desc: [
      "TUM - Introduction to Deep Learning",
      "NTU - Introduction to Data Science and Artificial Intelligence",
      "Freecodecamp - Machine Learning with Python.",
    ],
  },
  {
    imgPath: "/images/webdevv.png",
    title: "Web Development",
    desc: [
      "Youtube - 3D Web Developer Portfolio with React, Three JS & GSAP | JSM",
      "Youtube - HTML & CSS Full Course - Beginner to Pro | SuperSimpleDev",
      "Udemy - React JS For Beginners",
    ],
  },
  {
    imgPath: "/images/network.png",
    title: "Network & Cyber Security",
    desc: [
      "TUM - Network Security",
      "NTU - Computer Communications",
    ],
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python & AI/ML",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Figma Design",
    modelPath: "/models/figma.glb",
    scale: 2.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & SCM",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Technologies used: Tensorflow, Keras, Jenkins, Robot Framework, AWS, NAS, Bitbucket, Github, Bash, Python.",
    imgPath: "/images/Razer.png",
    logoPath: "/images/Razer_logo.png",
    title: "Software Engineer (Automation QA) Intern",
    date: "March 2025 - August 2025",
    responsibilities: [
      "Developed image and video recognition pipelines for automated functional tests.",
      "Setup a Network Attached Storage (NAS) to store and retrieve trained AI models.",
      "Automated user interface (UI) and functional tests with Jenkins, Robot Framework & Selenium.",
    ],
  },
  {
    review: "Technologies used: DBeaver, PTC ThingWorx, Figma, Jira, OutSystems, PostgreSQL, Python, JavaScript, Excel",
    imgPath: "/images/HMGICS.jpg",
    logoPath: "/images/hyundai.png",
    title: "Digital Transformation Intern",
    date: "May 2024 - September 2024",
    responsibilities: [
      "Developed a full-stacked issues reporting system including admin panel with the team using PTC tools.",
      "Worked with frontend and data engineers and integrated backend functionalities.",
      "Developed a simple proof-of-concept mobile application mockup with Outsystems.",
    ],
  },
  {
    review: "Technologies used: Google Analytics, Facebook Ads Manager, Microsoft Power BI, Jupyter Notebook, Python",
    imgPath: "/images/EAST.png",
    logoPath: "/images/EAST_Logo.png",
    title: "Data and Media Intern",
    date: "February 2022 - July 2022",
    responsibilities: [
      "Created dashboards on Power BI and Google Dashboards for client companies.",
      "Monitored and tracked social media metrics and interactions, updated client's websites.",
      "Collated data to formulate into weekly and monthly reports.",
    ],
  },
];

// const expLogos = [
//   {
//     name: "logo1",
//     imgPath: "/images/logo1.png",
//   },
//   {
//     name: "logo2",
//     imgPath: "/images/logo2.png",
//   },
//   {
//     name: "logo3",
//     imgPath: "/images/logo3.png",
//   },
// ];

const personal = [
    {
    name: "[ Research & Dev ] FYP",
    mentions: "August 2025 -  Present",
    review:
      "Final Year Project | Robot Manipulation using Advanced Deep Learning Technique. The project involves enhancing the robotic system's ability to perceive new environment and perform actions to achieve specific tasks. Technologies include Linux/ ROS and deep learning frameworks.",
    imgPath: "/images/astar.png",
  },
  {
    name: "Research & Dev | Lab2Life",
    mentions: "January 2025 -  Present",
    review:
      "As a team, we pitched for Garage@EEE's innovator project with a figma prototype and attained fundings up to $2500. The end product would be an (Android) app guiding users through capturing images indoors and displaying best location matches.",
    imgPath: "/images/garage_eee_logo.jpg",
  },
  {
    name: "Research | RAP",
    mentions: "February 2024",
    review:
      "In a Research Apprenticeship Program, my partner and I attained first runner-up. We looked into RFID (Radio-Frequency Identification) and their security, presenting our findings to a board of professors and researchers.",
    imgPath: "/images/NTU.jpg",
  },
  // {
  //   name: "[ Web Dev ] Garage@EEE",
  //   mentions: "October 2024 - June 2025",
  //   review:
  //     "I developed a new ' Tinkering Projects ' page for Garage@EEE's official webpage, integrating the backend through Google Appscripts and contributed to Navbar dropdown functionality and ' Tinkering ' section within the Homepage.",
  //   imgPath: "/images/garage_eee_logo.jpg",
  // },
  {
    name: "Interests",
    mentions: "2022 - 2024",
    review:
      "I am into FPS games like Valorant, and occasionally osu! I try to learn new hands-on skills, such as piano, painting and sketching whenever I can. Currently I am getting into running; and maintaining my streak in Strava.",
    imgPath: "/images/valo-neon.png",
  },
  {
    name: "Sports & Performing Arts",
    mentions: "2016 - Present",
    review:
      "I was part of Chinese Orchestra & achieved distinction for SYF 2017 & SYF 2019. Being part of NTU's HOCC (Hall Olympiad Closing Ceremony) dance competition, we emerged first among 23 halls! I also took part in sports - VJc's female basketball, recreational volleyball, bouldering & archery.",
    imgPath: "/images/syf.png",
  },
  {
    name: "Hall & Faculty",
    mentions: "2022 - 2024",
    review:
      "My biggest takeaway from hall was being part of Strawberry Stretch, which got me into dance! I was also the main programmer for my hall's Freshman Orientation Program for 2 years, and part of the creatives (Branding & Marketing - BnM) team for a faculty event.",
    imgPath: "/images/strawberry.jpg",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  // },
  // {
  //   name: "gmail",
  //   imgPath: "/images/inbox.png",
  // },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url:"https://www.linkedin.com/in/yin-yu-tan-a1034a14b",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  // expLogos,
  personal,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
