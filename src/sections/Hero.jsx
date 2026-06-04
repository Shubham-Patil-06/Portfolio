import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24"
        >
            {/* Glow orbs */}
            <div className="glow-orb" style={{ background: "#00ff88", width: 400, height: 400, top: "-5%", left: "-5%" }} />
            <div className="glow-orb" style={{ background: "#059669", width: 350, height: 350, bottom: "0%", right: "-5%" }} />

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-mono mb-5"
                    style={{ color: "var(--ac)" }}
                >
                    {"> "}Hi, my name is
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
                >
                    Shubham Patil.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mt-2"
                    style={{ color: "var(--text-mute)" }}
                >
                    I build backend systems<br className="hidden sm:block" /> that move fast.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-7 max-w-xl text-lg leading-relaxed"
                    style={{ color: "var(--text-dim)" }}
                >
                    I'm a <span className="accent font-medium">Python Backend Developer</span> specialising in
                    high-throughput trading platforms, real-time WebSocket systems, and scalable REST APIs.
                    Currently building <span className="accent font-medium">algostraddle.com</span> — a live
                    algorithmic trading platform handling 1,000+ concurrent requests.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <a href="#projects" className="btn-primary">View My Work</a>
                    <a href="#contact" className="btn-ghost">Get In Touch</a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-10 flex items-center gap-5 text-xl"
                    style={{ color: "var(--text-mute)" }}
                >
                    <a href="https://github.com/Shubham-Patil-06" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ac)] transition-colors"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/shubhampatil-python-developer" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ac)] transition-colors"><FaLinkedin /></a>
                    <a href="mailto:shubham.patil.work06@gmail.com" className="hover:text-[var(--ac)] transition-colors"><FaEnvelope /></a>
                </motion.div>
            </div>

            <a
                href="#about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm font-mono flex flex-col items-center gap-2 animate-bounce"
                style={{ color: "var(--text-mute)" }}
            >
                <FaArrowDown />
            </a>
        </section>
    );
}
