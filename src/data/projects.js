import eCommerce from "../assets/projects/e-commerce.png";
import zcoder from "../assets/projects/zcoder.png";
import appwrite from "../assets/projects/appwrite.png";
import snakeGame from "../assets/projects/snake-game.png";

const featuredProjects = [
  {
    id: "e-commerce",
    title: "E-Commerce App",
    description:
      "A responsive e-commerce app with dynamic product filtering, cart management, and local storage support.",
    longDescription:
      "This project focuses on building a complete e-commerce frontend with real-world interaction patterns such as product listing, filtering, cart management, and persistent state using local storage. The goal was to design a clean and intuitive shopping experience while keeping the code modular and maintainable. Through this project, I worked extensively on component structuring, state handling, and responsive UI design, simulating the core workflows of a modern e-commerce application.",
    preview: {
      type: "live",
      src: "https://e-commerce-orcin-one-33.vercel.app/"
    },
    fallbackImage: eCommerce,
    techStack: ["HTML", "JavaScript", "CSS"],
    links: {
      github: "https://github.com/Biraj-Sarkar/E-Commerce",
      live: "https://e-commerce-orcin-one-33.vercel.app/",
    },
  },
  {
    id: "zcoder",
    title: "ZCoder",
    description:
      "A custom code editor interface built for coding practice with editable components and UI logic.",
    longDescription:
      "ZCoder is a custom-built code editor interface designed to explore interactive UI behavior and component-driven design. The project emphasizes handling user input, dynamic updates, and clean layout organization within a React-based environment. By building this tool, I focused on improving my understanding of reusable components, UI responsiveness, and managing complex interactions in a structured and scalable way.",
    preview: {
      type: "live",
      src: "https://z-coder-omega.vercel.app/"
    },
    fallbackImage: zcoder,
    techStack: ["React", "UI Logic", "MongoDB"],
    links: {
      github: "https://github.com/Biraj-Sarkar/ZCoder",
      live: "https://z-coder-omega.vercel.app/"
    },
  },
  {
    id: "appwrite-blog",
    title: "AppwriteBlog",
    description:
      "A full-stack blogging platform powered by Appwrite, showcasing backend integration and frontend workflows.",
    longDescription:
      "This project is a full-stack blogging platform built using Appwrite as the backend service for authentication, database management, and file storage. It demonstrates how a modern frontend application can integrate with a backend-as-a-service to handle user-generated content securely and efficiently. The project helped me understand real-world workflows such as user authentication, protected routes, content creation, and API-driven state updates.",
    preview: {
      type: "live",
      src: "https://appwrite-blog-gold-theta.vercel.app/"
    },
    fallbackImage: appwrite,
    techStack: ["React", "Appwrite", "Tailwind"],
    links: {
      github: "https://github.com/Biraj-Sarkar/AppwriteBlog",
      live: "https://appwrite-blog-gold-theta.vercel.app/",
    },
  },
  {
    id: "snake-game",
    title: "Snake Game",
    description:
      "A responsive web-based Snake game with keyboard and mobile swipe controls, difficulty levels, and persistent scoring.",
    longDescription:
      "This project is a modern web-based implementation of the classic Snake game, built using HTML, CSS, and vanilla JavaScript. The game features a controlled start mechanism, difficulty levels, real-time score tracking, and a non-blocking game-over overlay. It supports both keyboard and mobile swipe controls, with careful handling of game state, input events, and browser behaviors such as scroll prevention during gameplay. Building this project helped me strengthen my understanding of game loops, state management, DOM manipulation, and responsive user experience design without relying on external libraries or frameworks.",
    preview: {
      type: "live",
      src: "https://snake-game-blush-nu-12.vercel.app/",
    },
    fallbackImage: snakeGame,
    techStack: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Biraj-Sarkar/Snake-Game",
      live: "https://snake-game-blush-nu-12.vercel.app/",
    },
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "A modern, responsive personal portfolio showcasing my projects, skills, and academic background.",
    longDescription:
      "This project is a personal portfolio website built to present my work, skills, and background in a clear and structured way. It features a component-driven architecture, responsive design, and smooth navigation using React Router. The Projects section follows a master–detail layout with optional live previews, while accessibility and performance were considered throughout the design. The portfolio reflects my approach to building maintainable frontend applications with clean UI and scalable structure.",
    preview: {
      type: "live",
      src: "https://portfolio-khaki-seven-34.vercel.app/",
    },
    fallbackImage: snakeGame,
    techStack: [
      "React",
      "React Router",
      "JavaScript",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/Biraj-Sarkar/Portfolio",
      live: "https://portfolio-khaki-seven-34.vercel.app/",
    },
  },
];

export default featuredProjects;