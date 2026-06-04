import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCommentDots } from "react-icons/fa";
import use3DCapable from "../hooks/use3DCapable";

const Avatar3D = lazy(() => import("./Avatar3D"));

const SECTIONS = ["home", "about", "skills", "experience", "projects", "certifications", "contact"];

const GUIDE = {
    home: "👋 Hey! I'm Shubham's guide-bot. Scroll down and I'll walk you through everything.",
    about: "📌 Meet Shubham — a backend dev who built a live algorithmic trading platform.",
    skills: "🛠️ His tech arsenal: Python, Django, FastAPI, React, ML tooling and more.",
    experience: "💼 Where he's worked — including building algostraddle.com at A Plus Topper.",
    projects: "🚀 The stuff he's shipped. AlgoStraddle is live — go check it out!",
    certifications: "🎓 Verified credentials from Coursera & freeCodeCamp.",
    contact: "📬 Liked what you saw? Tap here to reach out — he's open to work!",
};

export default function GuideAvatar() {
    const enabled = use3DCapable();
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(true);
    const [typed, setTyped] = useState("");
    const waveRef = useRef(0);

    // Track which section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting && SECTIONS.includes(e.target.id)) {
                        setActive(e.target.id);
                    }
                });
            },
            { rootMargin: "-45% 0px -45% 0px" }
        );
        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    // Wave + typewriter whenever the section changes
    useEffect(() => {
        waveRef.current = performance.now() + 1600;
        const msg = GUIDE[active] || "";
        setTyped("");
        let i = 0;
        const id = setInterval(() => {
            i++;
            setTyped(msg.slice(0, i));
            if (i >= msg.length) clearInterval(id);
        }, 18);
        return () => clearInterval(id);
    }, [active]);

    // Reopen button when minimized
    if (!open) {
        return (
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full grid place-items-center shadow-lg"
                style={{ background: "var(--ac)", color: "#062014", boxShadow: "0 0 24px rgba(0,255,136,0.5)" }}
                aria-label="Open guide"
            >
                <FaCommentDots size={20} />
            </button>
        );
    }

    return (
        <div className="fixed bottom-0 right-0 z-50 flex flex-col items-end pointer-events-none select-none">
            {/* Speech bubble */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-auto relative mr-4 mb-1 max-w-[230px] rounded-2xl p-3.5 text-[13px] leading-snug"
                    style={{
                        background: "rgba(17,17,17,0.95)",
                        border: "1px solid var(--ac)",
                        color: "var(--text)",
                        boxShadow: "0 10px 30px rgba(0,255,136,0.12)",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full grid place-items-center"
                        style={{ background: "#1a1a1a", border: "1px solid var(--bd-hover)", color: "var(--text-dim)" }}
                        aria-label="Minimize guide"
                    >
                        <FaTimes size={11} />
                    </button>
                    {active === "contact" ? (
                        <a href="#contact" className="block">
                            {typed}
                            <span className="inline-block w-1.5 h-3.5 align-middle ml-0.5 animate-pulse" style={{ background: "var(--ac)" }} />
                        </a>
                    ) : (
                        <>
                            {typed}
                            <span className="inline-block w-1.5 h-3.5 align-middle ml-0.5 animate-pulse" style={{ background: "var(--ac)" }} />
                        </>
                    )}
                    {/* little tail */}
                    <span
                        className="absolute -bottom-2 right-8 w-3 h-3 rotate-45"
                        style={{ background: "rgba(17,17,17,0.95)", borderRight: "1px solid var(--ac)", borderBottom: "1px solid var(--ac)" }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Avatar */}
            <div className="pointer-events-auto" style={{ width: 190, height: 240 }}>
                {enabled ? (
                    <Suspense fallback={null}>
                        <Avatar3D waveRef={waveRef} />
                    </Suspense>
                ) : (
                    <div className="w-full h-full grid place-items-end justify-center pb-6">
                        <div
                            className="w-20 h-20 rounded-2xl grid place-items-center text-4xl"
                            style={{ background: "#1f1f2a", border: "1px solid var(--ac)", boxShadow: "0 0 24px rgba(0,255,136,0.25)" }}
                        >
                            🤖
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
