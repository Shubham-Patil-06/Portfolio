import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaRobot } from "react-icons/fa";
import { SiDjango, SiReact, SiTailwindcss, SiPython } from "react-icons/si";
import profilePhoto from "../assets/profile.jpg";

const LandingPage = () => {
    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            await controls.start({ opacity: 1, y: 0 });
            await controls.start({
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.5 }
            });
        };
        sequence();
    }, [controls]);

    const techStack = [
        { icon: <SiReact size={24} />, name: "React" },
        { icon: <SiDjango size={24} />, name: "Django" },
        { icon: <SiPython size={24} />, name: "Python" },
        { icon: <SiTailwindcss size={24} />, name: "Tailwind" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden opacity-20">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-blue-500 rounded-full"
                        style={{
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, (Math.random() - 0.5) * 100],
                            x: [0, (Math.random() - 0.5) * 100],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    className="flex flex-col lg:flex-row items-center justify-between gap-12"
                >
                    {/* Profile Section */}
                    <div className="flex-1">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative mb-8"
                        >
                            <div className="absolute -inset-2 bg-blue-500 rounded-full blur opacity-75 animate-pulse"></div>
                            <img
                                src={profilePhoto}
                                alt="Shubham Prabhakar Patil"
                                className="relative w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
                            />
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Shubham Prabhakar Patil
                        </motion.h1>

                        <motion.div
                            className="flex items-center mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="h-1 w-16 bg-blue-400 mr-4"></div>
                            <h2 className="text-2xl text-blue-300">Full Stack Developer</h2>
                        </motion.div>

                        <motion.p
                            className="text-lg mb-8 max-w-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            Building digital experiences that matter. Specializing in ReactJS, Django,
                            and Machine Learning solutions that solve real-world problems.
                        </motion.p>

                        <motion.div
                            className="flex space-x-4 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            <a href="https://github.com/Shubham-Patil-06" className="social-icon">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/shubham-patil-039aa135a/" className="social-icon">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="mailto:shubham.work.06@gmail.com" className="social-icon">
                                <FaEnvelope size={24} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Tech Showcase */}
                    <div className="flex-1">
                        <motion.div
                            className="glass-card p-8 rounded-3xl shadow-2xl"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <FaCode className="mr-2 text-blue-400" />
                                My Tech Stack
                            </h3>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {techStack.map((tech, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="flex items-center p-4 bg-gray-800/50 rounded-xl"
                                    >
                                        <div className="text-blue-400 mr-3">{tech.icon}</div>
                                        <span>{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="space-y-6">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start"
                                >
                                    <FaServer className="text-green-400 mt-1 mr-3" />
                                    <div>
                                        <h4 className="font-bold">Backend Expertise</h4>
                                        <p className="text-sm opacity-80">
                                            Robust API development with Django REST Framework
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start"
                                >
                                    <FaRobot className="text-purple-400 mt-1 mr-3" />
                                    <div>
                                        <h4 className="font-bold">AI/ML Integration</h4>
                                        <p className="text-sm opacity-80">
                                            Building intelligent systems with Python
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            <a
                                href="/projects"
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-center font-medium transition-colors"
                            >
                                View My Projects
                            </a>
                            <a
                                href="/experience"
                                className="px-8 py-3 bg-transparent border border-blue-400 hover:bg-blue-900/30 rounded-full text-center font-medium transition-colors"
                            >
                                My Experience
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-3 bg-transparent border border-blue-400 hover:bg-blue-900/30 rounded-full text-center font-medium transition-colors"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LandingPage;