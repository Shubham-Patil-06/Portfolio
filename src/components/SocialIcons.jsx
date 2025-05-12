import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
    const socials = [
        { icon: <FaGithub />, url: "https://github.com/Shubham-Patil-06"},
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/shubham-patil-039aa135a/"},
        { icon: <FaEnvelope />, url: "mailto:shubham.work.06@gmail.com"}
    ];

    return (
        <div className="flex space-x-4">
            { socials.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel = "noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-2xl hover:text-blue-400 transition">
                        {social.icon}
                    </motion.a>
            ))}
        </div>
    )
}

export default SocialIcons;