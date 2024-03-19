import React from "react";



export const projectsData = [




    {
      slug: "movie-app",
      title: "Movie App",
      description:
        "A dynamic web app for users to browse, search and bookmark movies.",
      overview:
        "In the course of this project, we developed a web application using React, geared towards helping users discover and save their favorite movies. We harnessed the power of external APIs, particularly TMDB, a movie database, to fetch and display a vast collection of movies. This allowed our users to explore a wide range of films conveniently. This connection to an external data source expanded the capabilities of our app and enriched the content available to our users. Additionally, to enable users to save their favorite movies, we integrated Redux for state management. This 'Favorites' feature allowed users to curate a personal collection of beloved films efficiently. In essence, this project offered me valuable insights into leveraging external APIs, using Redux for state management, and enhancing the user experience with thoughtful design. It was a great opportunity to apply my technical skills to a real-world project and learn more about creating user-friendly web applications. This version provides a more detailed description of the project and the technologies used, emphasizing the learning experience and technical aspects.",
      tags: ["Vite", "React", "Redux", "Tailwind", "Rest Api", "Figma", "GitHub"],
      imageUrl: dbMovie,
      accordionImage2: movieSearch,
      accordionImage1: movieHover,
      highlights:
        "This project allowed me to improve my front-end development skills as I delved into tools like React components, Vite, and Tailwind CSS to create efficient and maintainable code. It also highlighted the significance of teamwork, clear communication, and project management, as we met our deadlines successfully. I gained valuable insights into using Rest APIs for the first time during this journey, broadening my knowledge and capabilities.To make the user experience more engaging and intuitive, we implemented a search feature that enables users to find specific movies easily. The application was designed with the user in mind, aiming to provide a user-friendly platform that enhances the enjoyment of watching movies. One of the notable technical aspects of this project was the use of Axios to fetch data from TMDB.",
      cat: "featured",
      liveSite: "https://duygukoksal.com/movie-app/",
      gitHub: "https://github.com/duyguca/movie-app/",
      development:
        "This project commenced with the creation of a Photoshop design, where each element was intricately fashioned with multiple layers to exemplify interactivity. The layers were meticulously organized and color-coded for enhanced visibility and understanding. Within a collaborative duo, we distributed tasks by component and page. I took charge of my assignments and collaborated with teammates when assistance was required. To facilitate our learning curve, we arranged group coding sessions, especially beneficial since most of us were new to React. My primary focus was on developing the single movies page, managing both the logic and styling aspects.",
      whatILearned:
        "This code uses Axios in a React Vite project to interact with The Movie Database API. It configures an Axios client for making requests and includes functions to fetch popular and top-rated movies.Key Features:Modular Axios Configuration: AxiosClient represents a pre-configured Axios client, allowing easy management of settings like base URL, timeout, and headers.Async Functions for API Calls: getPopularMovies and getTopRatedMovies use async/await to make asynchronous API requests, ensuring responsiveness during data retrieval.Commented Code for Clarity: Each function includes comments explaining its purpose and the expected return value, enhancing code readability and user understanding.This code snippet demonstrates a well-structured and documented Axios client, making API interactions in the project robust and maintainable.",
      id: 1,
      code: `
      import axios from "axios";
      const AxiosClient = axios.create({
        baseURL: "https://api.themoviedb.org/3",
        timeout: 8000,
        headers: {
          Accept: "application/json",
          Authorization: \` \$\{import.meta.env.VITE_ACCESS_TOKEN\}\`,
        },
      });
  
      // API Call
      export const getPopularMovies = async () => {
        const response = await AxiosClient.get("/movie/popular");
        return response.data;
      };
  
      export const getTopRatedMovies = async () => {
        const response = await AxiosClient.get("/movie/top_rated");
        return response.data;
      };
    `,
    },
    {
      slug: "portfolio-website",
      title: "My Portfolio",
      description:
        "My portfolio showcases my best works, highlighting my skills in front-end development and UX design using Next.js.",
      overview:
        "My portfolio is more than just a showcase; it's a dynamic space where each project showcases creativity and technical finesse. Using Next.js and Tailwind CSS, I've created visually stunning presentations and ensured an engaging user journey. Plus, you can switch between dark and light modes for a personalized browsing experience. Dive in and explore, where every project reflects my commitment to both style and functionality.",
      tags: [, "Next.js", "Tailwind", "GitHub"],
      imageUrl: portfolio,
      accordionImage2: portfolioTabSection,
      accordionImage1: portfolioSkills,
      highlights:
        "I crafted my portfolio with the aim of highlighting my journey in both development and design. I iteratively improved development functions and refined my designs. By dedicating time to mastering Next.js and Tailwind CSS, my intention was to not only fulfill the current purpose of the website but also to establish a foundation for future growth and enhanced interactivity.",
      whatILearned:
        "Bright themes can be particularly challenging, especially when working in a dark room or for users with vision issues exacerbated by extreme light or dark themes. The implementation of the dark-light mode option was a crucial and highly effective aspect of this project, offering users the flexibility to choose based on their preferences and needs.",
      development:
        "In developing my portfolio project using Next.js and Tailwind CSS, I embraced an iterative approach, constantly refining and enhancing the features and design elements. Leveraging the power of Next.js allowed for efficient component-based development, while Tailwind CSS facilitated a streamlined and responsive styling process. The use of these technologies not only provided a robust foundation but also allowed for seamless integration of new projects and updates, ensuring a dynamic and visually appealing portfolio.",
      id: 5,
      cat: "featured",
      liveSite: "https://duygukoksal.com/",
      gitHub: "https://github.com/duyguca/portfolio-website",
      code: `
      import React, { useEffect, useState, createContext, useContext } from "react";
      const ThemeContext = createContext(null);
      export default function ThemeContextProvider({ children }) {
      const [theme, setTheme] = useState("light");
      const toggleTheme = () => {
      if (theme === "light") {
        setTheme("dark");
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    };
    
    `,
    },
    {
      slug: "hi-low-game",
      title: "Hi-Low Game",
      description:
        "A guessing game where players try to guess a number within a range, receiving hints whether the correct number is higher or lower than their guesses.",
      tags: ["Html5", "Css3", "JavaScript", "jQuery", "Figma", "GitHub"],
      imageUrl: hiLow,
      accordionImage2: hiLowVictory,
      accordionImage1: hiLowTwoPlayers,
      cat: "fun",
      liveSite: "https://duygukoksal.com/hi-low/",
      id: 3,
      overview:
        "Embarking on the journey of creating a JavaScript game infused me with excitement. In the project's development phase, I meticulously crafted a game plan, outlining each step with anticipation. Leveraging my background in mathematics, I envisioned a numbers-centric game and brought to life the Hi-Low Game, a thrilling number guessing experience. Elevating the project further, I seamlessly incorporated Object-Oriented Programming (OOP) alongside JavaScript and jQuery, enriching both the functionality and appeal of the game.",
      tags: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      highlights:
        "Animated Timer Background: Leveraging jQuery and requestAnimationFrame() to craft a visually appealing and dynamic background, adding an animated layer to the game.Original Concept: Opting for an original game concept, challenging conventional norms, and infusing a fresh perspective into the gaming experience.Artistic Exploration: Utilizing SVGator and Adobe Illustrator to breathe life into game characters, injecting a sense of charm and playfulness.",
      cat: "fun",
      gitHub: "https://github.com/duyguca/hi-low-game",
      development:
        " Development this project involved a strategic blend of technical foresight, creative innovation, and a user-centric approach. The result is a meticulously crafted game that not only meets its technical objectives but also provides a captivating and memorable experience for its users.",
      whatILearned:
        "Integrating Object-Oriented Programming (OOP) and JavaScript into my coding journey has been transformative:Enhanced Problem-Solving: OOP sharpened my problem-solving skills, breaking down tasks effectively.Code Organization: JavaScript's OOP features improved code readability and scalability.Flexibility: OOP's emphasis on inheritance offered adaptable coding solutions.Collaboration: Standardized code structures facilitated seamless collaboration within teams.JavaScript's Versatility: The versatility of JavaScript empowered dynamic and interactive project elements.Iterative Learning: Each project served as a stepping stone, fostering continuous learning and skill refinement.In essence, this journey has not only expanded my technical abilities but has also deepened my appreciation for the dynamic synergy of OOP and JavaScript in creating robust and scalable code.",
      code: `
     const victoryScreenHTML = (game) => {
    const players = game.players;
    const maxNumberOfLives = Number(
      game.difficultyLevels[game.currentDifficultyLevel].numberOfAttempt
    );
  
    const winners = [];
  
    let finalMessage = null;
    console.log({ players });
    if (players.length === 2) {
      if (players[0].status === "failed" && players[1].status === "success") {
        winners.push(players[1]);
      } else if (
        players[0].status === "success" &&
        players[1].status === "failed"
      ) {
        winners.push(players[0]);
      } else {
        if (players[0].numberOfAttempt > players[1].numberOfAttempt) {
          winners.push(players[0]);
        } else if (players[0].numberOfAttempt < players[1].numberOfAttempt) {
          winners.push(players[1]);
        } else if (players[0].numberOfAttempt === players[1].numberOfAttempt) {
          winners.push(players[0], players[1]);
        }
      }
    } else {
      winners.push(players[0]);
    }
    `,
    },
    {
      slug: "Code-Challenge-Project",
      title: "Food Explorer",
      description:
        "A mockup turned into a  website when a team of four, collaborated to build a prototype website utilizing HTML, SCSS, and JS.",
      tags: ["Html5", "Css3", "JavaScript", "jQuery", "Figma", "GitHub"],
      imageUrl: foodExplorer1,
      accordionImage2: foodExplorer2,
      accordionImage1: foodExplorerMobile,
      cat: "all",
      id: 4,
      overview:
        "Food Explorer, a collaborative project crafted by a team of four, was developed using HTML, SCSS, and JS to replicate a designated mockup design. This website stands as a showcase of our proficiency in building both functional and aesthetically pleasing web applications.",
      tags: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      highlights:
        "The main goal of this project is to develop a website named Food Explorer that closely mirrors the given mockup design. The website aims to showcase our expertise in employing HTML5, SCSS, and JS to create web applications that are not only functional but also visually appealing. Furthermore, teamwork and collaboration are integral to the project, necessitating active contributions from all team members for its successful culmination.",
      cat: "fun",
      gitHub: "https://github.com/sasuke631/Code-Challenge-Project",
      liveSite: "https://duygukoksal.com/food-explorer/",
      development:
        "I took charge of developing the header and ensuring its responsiveness, incorporating a hamburger menu and social media icons. Throughout the development phase, I consistently applied the BEM notation in SASS to organize CSS classes into distinct blocks, elements, and modifiers. This approach facilitates better codebase management and maintenance.",
      whatILearned:
        "ChatGPTEngaging in a project reinforced the significance of teamwork and collaboration for me. Through collaboration, I gained valuable insights from diverse perspectives and harnessed the strengths of each team member. Additionally, I honed my skills in HTML, SCSS, and JS, with a particular focus on implementing the BEM notation and crafting responsive designs using mixins and media queries.",
      code: `
       @media screen and (min-width: 500px) {
          .container {
             padding: 0 1rem;
          }
          .header {
            padding: 16px 0;
            &__grid {
              height: 50px;
              grid-template-columns: repeat(12, 1fr);
              grid-template-rows: repeat(2, 1fr);
              grid-row-gap: 7px;
            }
            &__logo {
              grid-area: 1 / 1 / 2 / 8;
              display: flex;
              align-items: center;
              z-index: 100;
            }
            &__social-icons {
              display: none;
            }
            .burger-menu {
              display: none;
            }
  `,
    },
    {
      slug: "country-site-project",
      title: "Turkiye",
      description:
        "A website to explore Turkey's history, culture, and cuisine with ease. Browse, discover, and bookmark your favorite experiences.",
      tags: ["Html5", "Css3", "JavaScript", "Figma", "GitHub"],
      imageUrl: turkiye,
      accordionImage2: turkiyePlaces,
      accordionImage1: turkiyeHistory,
      cat: "fun",
      liveSite: "https://duygukoksal.com/turkiye/",
      id: 2,
      overview:
        "This project introduced me to JavaScript, where I learned to create a responsive webpage. The skills gained here influenced my later projects. Dive into Turkey's rich history with visually appealing sections, crafted using HTML5, offering an engaging journey through the nation's essence.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      highlights:
        "To make the user experience more engaging and intuitive, we implemented a search feature that enables users to find specific movies easily. The application was designed with the user in mind, aiming to provide a user-friendly platform that enhances the enjoyment of watching movies. One of the notable technical aspects of this project was the use of Axios to fetch data from TMDB.",
      cat: "fun",
      gitHub: "https://github.com/duyguca/country-site-project",
      development:
        "This project holds immense significance for me, being my inaugural solo endeavor in the professional realm. It served as a pivotal learning experience, offering insights into crafting responsive pages, optimizing UX/UI for screen readers, and executing a user-friendly website construction process, including meticulous development stages",
      whatILearned:
        "Beginnings are always of great importance. Throughout this project, I learned JavaScript while creating my first hamburger menu. The main challenge was ensuring the page's responsiveness, and I successfully used the skills I gained during this experience in subsequent projects.",
      code: `
      const toggleMenu = document.querySelector(".toggle-menu");
      toggleMenu.addEventListener("click", function () {
        const headerNav = document.querySelector(".header-nav");
        headerNav.classList.toggle("header-nav-active");
      });
    `,
    },
  ];