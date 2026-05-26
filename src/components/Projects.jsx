import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import monetra from "../assets/monetra.png";
import rock from "../assets/rock.png";

const projects = [
  {
    title: "Monetra",
    description:
      "Expense tracking app with secure auth, dashboards and financial insights.",
    tech: ["MERN", "Chart.js", "REST API", "JWT"],
    github: "https://github.com/ShubhangiJha-dot/Monetra",
    live: "https://monetra-nine.vercel.app",
    image: monetra,
  },
  {
    title: "Rock Paper Scissors",
    description:
      "A classic game of rock, paper, scissors .",
    tech: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/ShubhangiJha-dot/Rock-Paper-Scissors-updated",
    live: "https://rock-paper-scissors-mocha-sigma.vercel.app/",
    image: rock,
  },
];

export default function Projects() {
    return (
        <section className="my-12">
            <h2 className="text-2xl font-bold mb-6">Projects</h2> 
            <div className="grid md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="p-6 border border-gray-300 dark:border-gray-700  
              shadow-sm hover:shadow-md
              transition rounded-lg "> 
                        <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                        />            
                        <h3 className="text-xl text-teal-600 dark:text-teal-400 font-bold mb-2">{project.title}</h3>
                        <p className=" text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((skill, i) => (
                                <span key={i} className="bg-teal-200 text-teal-800 dark:bg-teal-800 dark:text-teal-100 text-sm font-medium px-3 py-1 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-black dark:text-white hover:text-teal-500"
                            >
                                <FaGithub />
                                <span>GitHub</span>
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-black dark:text-white hover:text-teal-500"
                            >
                                <FiExternalLink />
                                <span>Live </span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}