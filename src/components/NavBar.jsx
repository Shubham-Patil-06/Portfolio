import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaCode, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profilePhoto from "../assets/avatar.png";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 left-4 right-4 z-50 bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 p-3 rounded-full mx-auto max-w-6xl shadow-xl"
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Left Side - Logo/Profile */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3"
                >
                    <div className="relative">
                        <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-30"></div>
                        <img
                            src={profilePhoto}
                            alt="Profile"
                            className="relative w-10 h-10 rounded-full object-cover border-2 border-blue-400/50"
                        />
                    </div>
                    <span className="hidden md:inline-flex items-center text-lg font-medium">
                        <FaCode className="text-blue-400 mr-2" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            Shubham
                        </span>
                    </span>
                </motion.div>

                {/* Center - Navigation Links */}
                <div className="hidden md:flex items-center space-x-1 bg-gray-800/50 px-3 py-1 rounded-full">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-4 py-2 text-sm font-medium rounded-full transition-all ${isActive
                                ? "bg-blue-600/90 text-white shadow-lg"
                                : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `px-4 py-2 text-sm font-medium rounded-full transition-all ${isActive
                                ? "bg-blue-600/90 text-white shadow-lg"
                                : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                            }`
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/experience"
                        className={({ isActive }) =>
                            `px-4 py-2 text-sm font-medium rounded-full transition-all ${isActive
                                ? "bg-blue-600/90 text-white shadow-lg"
                                : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                            }`
                        }
                    >
                        Experience
                    </NavLink>
                </div>

                {/* Right Side - Social/Call-to-Action */}
                <div className="flex items-center space-x-3">
                    <div className="hidden md:flex space-x-2">
                        <motion.a
                            href="https://github.com/Shubham-Patil-06"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all"
                        >
                            <FaGithub size={18} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/shubham-patil-039aa135a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all"
                        >
                            <FaLinkedin size={18} />
                        </motion.a>
                        {/* <motion.a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            className="p-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-full transition-all"
                        >
                            <FaTwitter size={18} />
                        </motion.a> */}
                    </div>

                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-md hidden sm:block"
                    >
                        Contact
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;