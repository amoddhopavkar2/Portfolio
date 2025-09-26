import * as React from "react"
import "./projects.scss"

const projectsData = [
  {
    "name": "LaTeX Resume Builder – devcv.xyz",
    "url": "https://github.com/amoddhopavkar2/devcv.xyz",
    "description": [
      "Engineered a live-preview LaTeX résumé builder built with React, Node.js, and TypeScript that provides real-time preview functionality and auto-saves user changes in under 200ms.",
      "Successfully processes and exports over 500 PDFs monthly, serving thousands of users with professional resume generation capabilities and seamless user experience.",
    ],
    "githubUrl": "https://github.com/amoddhopavkar2/devcv.xyz",
    "used": [
      {"thing": "React"},
      {"thing": "Node.js"},
      {"thing": "TypeScript"},
      {"thing": "LaTeX"},
      {"thing": "PDF Generation"},
      {"thing": "Real-time Preview"},
    ]
  },
  {
    "name": "LeetCode PowerUp – Chrome Extension",
    "url": "https://github.com/amoddhopavkar2/leetcode-powerup",
    "description": [
      "Developed a Chrome extension that enhances LeetCode problem-solving experience by injecting YouTube top solutions and providing a persistent scratchpad directly into LeetCode pages.",
      "Serves over 5,000 active users and saves an average of 2 minutes per problem, significantly improving coding interview preparation efficiency and user productivity.",
    ],
    "githubUrl": "https://github.com/amoddhopavkar2/leetcode-powerup",
    "used": [
      {"thing": "Chrome Extension"},
      {"thing": "JavaScript"},
      {"thing": "DOM Manipulation"},
      {"thing": "YouTube API"},
      {"thing": "Browser Storage"},
      {"thing": "Content Scripts"},
    ]
  },
  {
    "name": "Kitchen Chronicles",
    "url": "https://amoddhopavkar-kitchenchronicles.netlify.app/search",
    "description": [
      "Designed and developed a full-stack MERN (MongoDB, Express.js, React, Node.js) web application that allows users to browse, search, and save their favorite recipes.",
      "Implemented user authentication, recipe creation and editing functionalities, and a personalized recipe feed to enhance user engagement and experience.",
    ],
    "githubUrl": "https://github.com/amoddhopavkar2/kitchen-chronicles-react-app",
    "used": [
      {"thing": "MongoDB"},
      {"thing": "Node.js"},
      {"thing": "React"},
      {"thing": "Express"},
      {"thing": "Redux.js"},
      {"thing": "REST APIs"},
    ]
  },
  {
    "name": "Collaborative Code Editor",
    "description": [
      "Engineered a real-time collaborative coding environment where multiple users can simultaneously edit and debug code, fostering teamwork and productivity.",
      "Leveraged WebSockets for instant communication and implemented syntax highlighting and code completion features to enhance the coding experience.",
    ],
    "used": [
      {"thing": "WebSockets"},
      {"thing": "Node.js"},
      {"thing": "React"},
      {"thing": "Prism.js"},
      {"thing": "Monaco Editor"},
    ]
  },
  {
    "name": "E-Inventory Management System",
    "description": [
      "Built a scalable and efficient inventory management system deployed on AWS, leveraging RDS for reliable data storage and Flask for a RESTful API backend.",
      "The system streamlines product tracking, order processing, and generates automated reports for data-driven insights.",
    ],
    "used": [
      {"thing": "Amazon Web Services (AWS)"},
      {"thing": "SQL"},
      {"thing": "Python"},
      {"thing": "Flask"},
    ]
  },
  {
    "name": "MoneyMagnet: Stock Market Portfolio Management & Simulation",
    "description": [
      "Developed a Java application adhering to the MVC architectural pattern, providing users with real-time stock information and portfolio management capabilities.",
      "Integrated the Alphavantage API for seamless data fetching and implemented comprehensive JUnit tests to ensure code quality and robustness.",
    ],
    "used": [
      {"thing": "Java"},
      {"thing": "Java - Swing"},
      {"thing": "JUnit"},
      {"thing": "REST APIs"},
      {"thing": "Agile Methodologies"},
    ]
  },
]


const Projects = () => {
  return (
    <section className="section other-projects">
      <div className="section__title">Projects</div>
      <div className="section__content">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <div className="project__name">
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
              ) : (
                <span>{project.name}</span>
              )}
            </div>
            <ul className="project__description">
              {project.description.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
            {project.githubUrl && (
              <p>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="small">
                  👨🏻‍💻 Github Source Code 👨🏻‍💻
                </a>
              </p>
            )}
            <div className="project__used">
              {project.used.map((item, itemIndex) => (
                <span key={itemIndex} className="project__used__item">{item.thing}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects