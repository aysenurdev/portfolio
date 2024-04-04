import { data } from "autoprefixer";
import React from "react";
import Image from 'next/image';
import movie2 from "../public/movie2.png";

import girlll from "../public/girlll.png";
import devimg from "../public/devimg.png";
import menu from "../public/menu.png";
import story from "../public/story.png";
import monkeybig from "../public/monkeybig.png";
import monkeys from "../public/monkeys.png";





export const projectsData = [
  {
    slug: "movie-app",
    title: "Movie App",
    description: "A dynamic web app for users to browse, search and bookmark movies.",
    overview: "In the course of this project, we developed a web application using React, geared towards helping users discover and save their favorite movies. We harnessed the power of external APIs, particularly TMDB, a movie database, to fetch and display a vast collection of movies. This allowed our users to explore a wide range of films conveniently. This connection to an external data source expanded the capabilities of our app and enriched the content available to our users. Additionally, to enable users to save their favorite movies, we integrated Redux for state management. This 'Favorites' feature allowed users to curate a personal collection of beloved films efficiently. In essence, this project offered me valuable insights into leveraging external APIs, using Redux for state management, and enhancing the user experience with thoughtful design. It was a great opportunity to apply my technical skills to a real-world project and learn more about creating user-friendly web applications. This version provides a more detailed description of the project and the technologies used, emphasizing the learning experience and technical aspects.",
    tags: ["Vite", "React", "Redux", "Scss", "Rest Api", "Figma", "GitHub"],
  
 
    accordionImage2: movie2,
    highlights: "This project allowed me to enhance my front-end development skills significantly. By diving into tools like React components, Vite, and Sass, I was able to create code that was not only efficient but also easy to maintain. Throughout this journey, I learned the importance of clear communication and project management as I successfully met deadlines on my own. Additionally, I gained valuable insights into utilizing Rest APIs for the first time, broadening my knowledge and capabilities. Implementing a search feature to enable users to find specific movies easily was a highlight, as it made the user experience more engaging and intuitive.",
    liveSite: "https://aysenur.blog/movie-react/",
    gitHub: "https://github.com/aysenurdev/movie-database-react-app/",
    development: "This project began with the creation of a Photoshop design, meticulously crafting each element with multiple layers to showcase interactivity. The layers were carefully organized and color-coded to improve visibility and comprehension. As a developer, I managed tasks by component and page, taking full ownership of my assignments. To accelerate my learning curve, I arranged solo coding sessions, which proved especially beneficial since I was new to React. My primary focus was on developing the single movie page, overseeing both the logic and styling aspects",
    whatILearned: "Through my Movies Database React project, I gained invaluable experience in utilizing APIs and mastering the art of data fetching. This project provided me with hands-on exposure to integrating external data sources seamlessly into my application, enhancing its functionality and user experience. By implementing API requests, I honed my skills in handling asynchronous operations and efficiently managing data retrieval and manipulation. ",
    id: 1,
    code: `// Your code for the Movie App project`,
    images: [
      {
        title: 'MovieApp',
        path: '/mov-poster.png',
      },
    ]
  },
  {
    slug: "portfolio-website",
    title: "My Portfolio",
    description: "My portfolio showcases my best works, highlighting my skills in front-end development and UX design using Next.js.",
    overview: "My portfolio is more than just a showcase; it's a dynamic space where each project showcases creativity and technical finesse. Using Next.js and Tailwind CSS, I've created visually stunning presentations and ensured an engaging user journey.Seamlessly blending Next.js and Tailwind CSS, my portfolio epitomizes innovation and technical prowess, captivating visitors with mesmerizing visuals and seamless navigation. It's a testament to my passion for crafting exceptional digital experiences.",
    tags: ["Next.js", "Tailwind", "GitHub"],
    accordionImage2: devimg,
    highlights: "I crafted my portfolio with the aim of highlighting my journey in both development and design. I iteratively improved development functions and refined my designs. By dedicating time to mastering Next.js and Tailwind CSS, my intention was to not only fulfill the current purpose of the website but also to establish a foundation for future growth and enhanced interactivity.",
    development: "In developing my portfolio project using Next.js and Tailwind CSS, I embraced an iterative approach, constantly refining and enhancing the features and design elements. Leveraging the power of Next.js allowed for efficient component-based development, while Tailwind CSS facilitated a streamlined and responsive styling process. The use of these technologies not only provided a robust foundation but also allowed for seamless integration of new projects and updates, ensuring a dynamic and visually appealing portfolio.",
    whatILearned: "In creating my portfolio, I delved into Tailwind CSS and Next.js, acquiring invaluable insights along the way. With Tailwind CSS, I embraced its utility classes, expediting the styling process and enhancing the overall development workflow. Exploring Next.js opened doors to server-side rendering, static site generation, and automatic code splitting, amplifying performance and SEO optimization. ",
    id: 2,
    cat: "featured",
    liveSite: "/",
    gitHub: "https://github.com/aysenurdev/portfolio",
    code: `// Your code for the Portfolio Website project`,
    images: [
      {
        title: 'title',
        path: '/girlll.png',
      }]
  },
  {
    slug: "capstone-project",
    title: "Mountaintop Burger",
    description: "The Mountaintop Burger website represents our best work as a team, demonstrating our skills in front-end development and stylish design using WooCommerce.",
    overview: "Introducing Mountaintop a culinary haven meticulously crafted with PHP, SASS, and WordPress serving as its dynamic content management system. Infused with innovation and adorned with an exquisite design, the Mountaintop website promises a seamless fusion of functionality and aesthetics, delivering an unparalleled user experience that leaves visitors spellbound.",
    tags: ["PHP", "Sass", "WooCommerce", "Wordpress"],
    accordionImage2: story,
    highlights: "Crafting the Mountaintop Burger website aimed to showcase our journey in both development and design. We iteratively enhanced development functions and refined designs for an optimal user experience. Through mastering WordPress, WooCommerce, and SASS, our goal was not only to meet current requirements but also to establish a scalable foundation for future growth and enhanced interactivity. Additionally, we incorporated Google Maps plugin and API to provide seamless navigation and location-based services for our users.",
    development: "In developing the Mountaintop Burger website using WordPress and WooCommerce, our team adopted an iterative approach, continuously refining and enhancing its features and design elements. Leveraging the versatility of WordPress and WooCommerce, we efficiently customized themes and plugins, ensuring a seamless and engaging user experience. Our use of these technologies not only laid a solid foundation but also facilitated easy integration of new functionalities and updates, resulting in a dynamic and captivating online presence for our client's business.",
    whatILearned: "The Mountain Burger website was a collaborative endeavor that provided my team and me with valuable opportunities to refine our WordPress and WooCommerce skills. Throughout the project, we focused on various aspects, including customizing a WordPress theme, selecting suitable plugins, and meticulously planning the information architecture to ensure a seamless user experience. Our goal was to create an intuitive content management system tailored to the needs of our hypothetical client. Implementing agile project management methodologies enabled us to effectively coordinate tasks, adapt to evolving requirements, and deliver a high-quality website within the specified timeline",
    id: 3,
    cat: "featured",
    liveSite: "https://mountaintop.bcitwebdeveloper.ca/",
    gitHub: "https://github.com/htpwebdesign/mountaintop-theme/",
    code: `// Your code for the Mountaintop Burger Website project`,
    images: [
      {
        title: 'title',
        path: '/menu.png',
      }]
  },
  {
    slug: "javascriptgame",
    title: "Whack a monkey!",
    description: "Utilizing the robust capabilities of JavaScript, I've crafted immersive gaming encounters that draw players into thrilling escapades, providing boundless hours of entertainment.",
    overview: "The JavaScript game project is more than just entertainment; it's a dynamic space where creativity and technical finesse shine. With JavaScript, CSS, and HTML, I've crafted engaging and immersive gaming experiences. Seamlessly blending these technologies, the game epitomizes innovation and technical prowess, captivating players with mesmerizing visuals and intuitive gameplay. It's a testament to my passion for crafting exceptional digital experiences.",
    tags: ["JavaScript", "Css", "Html", "GitHub"],
    accordionImage2: monkeys,
    highlights: "Developing the JavaScript game was an exhilarating journey into the world of interactive entertainment. With each iteration, I fine-tuned gameplay mechanics and polished the visual design to create an immersive gaming experience. Leveraging JavaScript's versatility, I crafted captivating game elements that engage players and provide endless hours of enjoyment. Additionally, I incorporated innovative features and intuitive controls to ensure a seamless and thrilling gameplay experience for users.",
    development: "In creating my JavaScript game project, I adopted an iterative strategy, continuously refining and improving its features and design elements. Harnessing the capabilities of JavaScript enabled efficient development of interactive components, while leveraging CSS ensured a smooth and responsive styling process. These technologies formed a strong foundation, enabling seamless integration of new features and updates, resulting in a dynamic and visually captivating gaming experience.",
    whatILearned: "Embarking on the JavaScript game project was an enlightening experience that deepened my understanding of game development principles. I delved into the intricacies of game logic and animation, mastering techniques to create seamless gameplay experiences. By implementing event-driven programming and game state management, I honed my skills in handling complex interactions and ensuring smooth game flow. Additionally, I gained insights into performance optimization and memory management, essential aspects of creating high-quality games. ",
    id: 4,
    cat: "featured",
    liveSite: "https://whack-a-monkey-game.vercel.app/",
    gitHub: "https://github.com/aysenurdev/whack-a-monkey-game",
    code: `// Your code for the javascript game project`,
    images: [
      {
        title: 'title',
        path: '/monkeybig.png',
      }]
  },
];

export default data;