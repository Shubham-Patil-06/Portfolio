import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile, FaDatabase } from "react-icons/fa";
import { SiDjango, SiReact, SiTailwindcss, SiPython, SiPostgresql, SiTensorflow } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "ChopChop - Food Delivery App",
      description: "Full-stack food delivery platform with integrated digital wallet payments",
      features: [
        "Real-time order tracking",
        "Restaurant management dashboard",
        "Secure payment processing"
      ],
      tech: [
        { icon: <SiReact className="text-blue-400" />, name: "React" },
        { icon: <SiDjango className="text-green-500" />, name: "Django" },
        { icon: <SiPostgresql className="text-blue-600" />, name: "PostgreSQL" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com/Shubham-Patil-06/ChopChop", label: "Code" },
        { icon: <FaExternalLinkAlt />, url: "https://chopchopfooddelivery.netlify.app/", label: "Live Demo" }
      ],
      category: "fullstack"
    },
    {
      title: "Movie Recommender System",
      description: "AI-powered recommendation engine for OTT platforms",
      features: [
        "Content-based filtering",
        "Collaborative filtering",
        "Personalized suggestions"
      ],
      tech: [
        { icon: <SiPython className="text-yellow-400" />, name: "Python" },
        { icon: <SiTensorflow className="text-orange-500" />, name: "TensorFlow" },
        { icon: <FaDatabase className="text-blue-300" />, name: "Neo4j" }
      ],
      links: [
        { icon: <FaGithub />, url: "#", label: "Code" },
        { icon: <FaExternalLinkAlt />, url: "#", label: "Case Study" }
      ],
      category: "ai"
    },
    {
      title: "Restme - API Service",
      description: "Scalable REST API service for mobile applications",
      features: [
        "JWT Authentication",
        "Rate limiting",
        "Automated documentation"
      ],
      tech: [
        { icon: <FaServer className="text-purple-400" />, name: "Node.js" },
        { icon: <FaDatabase className="text-green-400" />, name: "MongoDB" },
        { icon: <SiPython className="text-yellow-400" />, name: "Python" }
      ],
      links: [
        { icon: <FaGithub />, url: "#", label: "Code" },
        { icon: <FaExternalLinkAlt />, url: "#", label: "API Docs" }
      ],
      category: "backend"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          My Projects
        </h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Here's a collection of my professional work. Each project represents real-world problem solving with modern technologies.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Project Header */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                {project.category === "ai" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-900/50 text-purple-300">
                    AI/ML
                  </span>
                )}
                {project.category === "fullstack" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/50 text-blue-300">
                    Full Stack
                  </span>
                )}
                {project.category === "backend" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900/50 text-green-300">
                    Backend
                  </span>
                )}
              </div>
              <p className="mt-2 text-gray-300">{project.description}</p>
            </div>

            {/* Project Features */}
            <div className="p-6 border-b border-gray-700">
              <h4 className="text-sm font-semibold text-blue-400 mb-3">KEY FEATURES</h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-4 w-4 text-green-400 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="p-6 border-b border-gray-700">
              <h4 className="text-sm font-semibold text-blue-400 mb-3">TECH STACK</h4>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <div key={i} className="flex items-center bg-gray-700/50 px-3 py-1 rounded-full">
                    <span className="mr-2">{tech.icon}</span>
                    <span className="text-xs font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Footer */}
            <div className="p-6 flex justify-between items-center">
              <div className="flex space-x-3">
                {project.links.map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    {link.icon}
                    <span className="ml-2">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Like what you see?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          I'm available for freelance work and full-time positions. Let's build something amazing together.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-medium text-white shadow-lg transition-all"
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Projects;