import Reveal from "../components/Reveal";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const SOCIALS = [
    { icon: <FaGithub />, url: "https://github.com/Shubham-Patil-06" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/shubhampatil-python-developer" },
    { icon: <FaEnvelope />, url: "mailto:shubham.patil.work06@gmail.com" },
];

export default function Contact() {
    return (
        <section id="contact" className="relative py-28 px-6 overflow-hidden">
            <div className="glow-orb" style={{ background: "#00ff88", width: 360, height: 360, bottom: "-10%", left: "50%", transform: "translateX(-50%)" }} />

            <div className="max-w-2xl mx-auto text-center relative z-10">
                <Reveal>
                    <p className="kicker mb-4">06. what's next</p>
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Get In Touch</h2>
                    <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                        I'm currently open to backend and full-stack opportunities, freelance work, and technical
                        collaborations. Whether you have a question or just want to say hi, my inbox is always open.
                    </p>

                    <a
                        href="mailto:shubham.patil.work06@gmail.com"
                        className="btn-primary inline-block mt-9"
                    >
                        Say Hello
                    </a>

                    <div className="mt-12 flex flex-col items-center gap-3 font-mono text-sm" style={{ color: "var(--text-dim)" }}>
                        <a href="mailto:shubham.patil.work06@gmail.com" className="flex items-center gap-2 hover:text-[var(--ac)] transition-colors">
                            <FaEnvelope className="accent" /> shubham.patil.work06@gmail.com
                        </a>
                        <a href="tel:+918788804767" className="flex items-center gap-2 hover:text-[var(--ac)] transition-colors">
                            <FaPhone className="accent" /> +91 87888 04767
                        </a>
                        <span className="flex items-center gap-2">
                            <FaMapMarkerAlt className="accent" /> Hyderabad, India
                        </span>
                    </div>

                    <div className="mt-10 flex justify-center gap-5 text-2xl" style={{ color: "var(--text-mute)" }}>
                        {SOCIALS.map((s, i) => (
                            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ac)] hover:-translate-y-1 transition-all">
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </Reveal>

                <footer className="mt-20 font-mono text-xs" style={{ color: "var(--text-mute)" }}>
                    Designed & built by Shubham Patil · © {new Date().getFullYear()}
                </footer>
            </div>
        </section>
    );
}
