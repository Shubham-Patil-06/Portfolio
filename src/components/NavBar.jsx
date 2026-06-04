import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";

const LINKS = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("about");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        LINKS.forEach((l) => {
            const el = document.getElementById(l.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <header
            className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
            style={{
                background: scrolled ? "hsla(0,0%,4%,0.9)" : "transparent",
                borderBottom: `1px solid ${scrolled ? "var(--bd)" : "transparent"}`,
                backdropFilter: scrolled ? "blur(12px)" : "none",
            }}
        >
            <nav className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
                <a href="#home" className="flex items-center gap-2">
                    <span
                        className="font-mono font-bold text-base w-10 h-10 flex items-center justify-center rounded-lg border leading-none whitespace-nowrap tracking-tight"
                        style={{ borderColor: "var(--bd-hover)" }}
                    >
                        <span className="accent">S</span>P
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-1">
                    {LINKS.map((l) => (
                        <a
                            key={l.id}
                            href={`#${l.id}`}
                            className="font-mono text-sm px-3 py-2 rounded-md transition-colors hover:text-white"
                            style={{ color: active === l.id ? "var(--ac)" : "var(--text-dim)" }}
                        >
                            <span className="accent">#</span>
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="/Shubham_Patil_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm ml-3 px-4 py-2 rounded-md border flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                        style={{ borderColor: "var(--ac)", color: "var(--ac)" }}
                    >
                        <FaFilePdf /> Resume
                    </a>
                </div>

                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    <span className="w-6 h-0.5 transition-all" style={{ background: "var(--ac)", transform: open ? "rotate(45deg) translateY(8px)" : "none" }} />
                    <span className="w-6 h-0.5 transition-all" style={{ background: "var(--ac)", opacity: open ? 0 : 1 }} />
                    <span className="w-6 h-0.5 transition-all" style={{ background: "var(--ac)", transform: open ? "rotate(-45deg) translateY(-8px)" : "none" }} />
                </button>
            </nav>

            {open && (
                <div className="md:hidden border-t" style={{ borderColor: "var(--bd)", background: "hsla(0,0%,4%,0.97)" }}>
                    <div className="px-6 py-4 flex flex-col gap-1">
                        {LINKS.map((l) => (
                            <a
                                key={l.id}
                                href={`#${l.id}`}
                                onClick={() => setOpen(false)}
                                className="font-mono text-sm py-2"
                                style={{ color: active === l.id ? "var(--ac)" : "var(--text-dim)" }}
                            >
                                <span className="accent">#</span>
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="/Shubham_Patil_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-sm py-2 flex items-center gap-2"
                            style={{ color: "var(--ac)" }}
                        >
                            <FaFilePdf /> Resume
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
