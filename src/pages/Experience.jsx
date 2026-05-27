import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode, FaServer, FaRobot } from "react-icons/fa";
import { SiDjango, SiReact, SiPython, SiTensorflow, SiPostgresql, SiFastapi, SiDocker } from "react-icons/si";

const Experience = () => {
    const experiences = [
        {
            type: "work",
            role: "Python Django Developer",
            company: "A Plus Topper",
            duration: "June 2025 – Present · Hyderabad, India",
            description: [
                "Architected and deployed algostraddle.com — a full-featured algorithmic trading platform integrating Zerodha Kite, Flattrade, and Delta Exchange broker APIs end-to-end",
                "Engineered a high-performance Webhook Execution Engine translating TradingView alerts into sub-second broker order placements, minimising slippage during volatile market conditions",
                "Designed a horizontally scalable backend sustaining 1,000+ concurrent user sessions with zero downtime during high-frequency trading windows",
                "Built real-time Live Chart dashboards and Historical Data Analytics modules for position visualisation and backtested performance analysis",
                "Developed automated strategy execution, dynamic real-time PnL reporting, and a fully integrated backtesting engine with configurable parameters",
                "Optimised API middleware for high-frequency data polling and WebSocket stream management — reducing latency and improving trade execution reliability"
            ],
            tech: [<SiPython />, <SiDjango />, <SiFastapi />, <SiReact />, <SiPostgresql />, <SiDocker />],
            icon: <FaBriefcase className="text-blue-400" />
        },
        {
            type: "education",
            degree: "M.Sc. in Computer Science",
            institution: "Vishwakarma College of Arts, Commerce & Science, Pune",
            duration: "2023 – 2025",
            achievements: [
                "CGPA: 8.73 / 10",
                "Specialized in Machine Learning and Distributed Systems",
                "Built production-grade fintech and AI-driven platforms as part of applied coursework"
            ],
            tech: [<SiPython />, <SiTensorflow />, <FaServer />],
            icon: <FaGraduationCap className="text-purple-400" />
        },
        {
            type: "education",
            degree: "B.Sc. in Computer Science",
            institution: "Shivaji University, Kolhapur",
            duration: "2020 – 2023",
            achievements: [
                "CGPA: 9.34 / 10",
                "Strong foundation in algorithms, data structures, and software engineering principles"
            ],
            tech: [<SiPython />, <SiReact />, <SiPostgresql />],
            icon: <FaGraduationCap className="text-purple-400" />
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
                    My Journey
                </h1>
                <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Professional milestones and academic achievements that shaped my technical expertise
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 w-0.5 h-full bg-gray-700 transform -translate-x-1/2"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-start`}
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute left-1/2 w-5 h-5 rounded-full ${exp.type === "work" ? "bg-blue-500" : "bg-purple-500"} transform -translate-x-1/2 mt-6 z-10`}></div>

                        {/* Content Card */}
                        <div className={`w-full ${index % 2 === 0 ? "mr-8 pr-8" : "ml-8 pl-8"} md:w-5/12`}>
                            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-start mb-4">
                                    <div className="p-3 rounded-full bg-gray-700/50 mr-4">
                                        {exp.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">
                                            {exp.role || exp.degree}
                                        </h3>
                                        <p className={`text-lg ${exp.type === "work" ? "text-blue-300" : "text-purple-300"}`}>
                                            {exp.company || exp.institution}
                                        </p>
                                        <p className="text-sm text-gray-400">{exp.duration}</p>
                                    </div>
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {(exp.description || exp.achievements).map((item, i) => (
                                        <motion.li
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start text-gray-300"
                                        >
                                            <svg className="h-4 w-4 text-green-400 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tech, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -3 }}
                                            className="flex items-center bg-gray-700/50 px-3 py-1 rounded-full"
                                        >
                                            <span className="mr-2">{tech}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Skills Showcase */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="max-w-4xl mx-auto mt-20 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg"
            >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <FaCode className="mr-2 text-blue-400" />
                    Core Competencies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { icon: <SiPython className="text-yellow-400 text-2xl" />, name: "Python" },
                        { icon: <SiDjango className="text-green-500 text-2xl" />, name: "Django / FastAPI / Flask" },
                        { icon: <SiReact className="text-blue-400 text-2xl" />, name: "ReactJS" },
                        { icon: <FaServer className="text-purple-400 text-2xl" />, name: "REST API & WebSocket" },
                        { icon: <SiTensorflow className="text-orange-500 text-2xl" />, name: "ML · LightGBM · LSTM" },
                        { icon: <SiPostgresql className="text-blue-600 text-2xl" />, name: "PostgreSQL / MySQL" },
                        { icon: <SiDocker className="text-cyan-400 text-2xl" />, name: "Docker · AWS · CI/CD" },
                        { icon: <FaRobot className="text-pink-400 text-2xl" />, name: "Backtesting & Fintech" }
                    ].map((skill, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="flex items-center bg-gray-700/50 p-4 rounded-xl"
                        >
                            <div className="mr-3">{skill.icon}</div>
                            <span>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center mt-20"
            >
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Whether you need a full-stack developer or AI specialist, I'm ready to tackle your toughest challenges.
                </p>
                <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full text-lg font-medium text-white shadow-lg transition-all"
                >
                    Let's Build Something
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Experience;
