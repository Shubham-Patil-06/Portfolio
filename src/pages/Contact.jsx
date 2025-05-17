import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const Contact = () => {
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
                    Let's Connect
                </h1>
                <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Have a project in mind or want to discuss opportunities? Reach out through any channel below.
                </p>
            </motion.div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl"
                >
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <FaEnvelope className="text-blue-400 mr-3" />
                        Send Me a Message
                    </h3>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <motion.button
                            href="mailto:shubham.work.06@gmail.com"
                            type="submit"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-lg font-semibold text-white shadow-lg transition-all"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-8"
                >
                    {/* Direct Contact */}
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Direct Contact</h3>

                        <div className="space-y-4">
                            <motion.a
                                href="mailto:shubham.work.06@gmail.com"
                                whileHover={{ x: 5 }}
                                className="flex items-center text-gray-300 hover:text-white transition-colors"
                            >
                                <div className="p-3 mr-4 rounded-full bg-blue-900/20 text-blue-400">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p>shubham.patil.work06@gmail.com</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="tel:+918788804767"
                                whileHover={{ x: 5 }}
                                className="flex items-center text-gray-300 hover:text-white transition-colors"
                            >
                                <div className="p-3 mr-4 rounded-full bg-purple-900/20 text-purple-400">
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p>+91 87888-04767</p>
                                </div>
                            </motion.a>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center text-gray-300"
                            >
                                <div className="p-3 mr-4 rounded-full bg-green-900/20 text-green-400">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p>Pune, India</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Find Me Online</h3>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <FaGithub />, name: "GitHub", url: "https://github.com/Shubham-Patil-06", color: "bg-gray-900/20 text-gray-300" },
                                { icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/in/shubham-patil-039aa135a/", color: "bg-blue-900/20 text-blue-400" },
                                { icon: <FaEnvelope />, name: "Email", url: "mailto:shubham.work.06@gmail.com", color: "bg-red-900/20 text-red-400" },
                                { icon: <SiHackerrank />, name: "HackerRank", url: "https://leetcode.com", color: "bg-green-900/20 text-green-400" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5 }}
                                    className={`flex items-center p-4 rounded-xl ${social.color} hover:bg-opacity-40 transition-all`}
                                >
                                    <div className="text-2xl mr-3">
                                        {social.icon}
                                    </div>
                                    <span className="font-medium">{social.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Availability */}
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-white mb-4">Availability</h3>
                        <p className="text-gray-300 mb-4">
                            I'm currently available for:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                <span>Full-time positions</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                <span>Freelance projects</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                <span>Technical consultations</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
