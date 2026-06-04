import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PROJECTS = [
    {
        title: "AlgoStraddle",
        subtitle: "Algorithmic Trading Platform",
        description:
            "Live algorithmic trading platform handling 1,000+ concurrent requests with sub-second order execution across Zerodha Kite, Flattrade, and Delta Exchange. Webhook engine turns TradingView alerts into instant broker orders, with real-time charts, automated PnL, and a configurable backtesting engine.",
        badges: ["1,000+ req", "Sub-second exec"],
        tags: ["Python", "Django", "FastAPI", "WebSocket", "PostgreSQL"],
        links: [{ icon: <FaExternalLinkAlt />, url: "https://algostraddle.com", label: "Live" }],
        featured: true,
    },
    {
        title: "MandiMind",
        subtitle: "AI Agricultural Price Intelligence",
        description:
            "AI-driven mandi price aggregation platform for Indian farmers, FPOs, and commodity traders. Normalises government AgMarkNet data across thousands of mandis and uses a LightGBM + LSTM ensemble for short-term forecasting and seasonal trend analysis, with programmatic SEO at scale.",
        badges: ["LightGBM + LSTM", "Programmatic SEO"],
        tags: ["Python", "Django", "LightGBM", "LSTM", "PostgreSQL"],
        links: [{ icon: <FaGithub />, url: "#", label: "Code" }],
    },
    {
        title: "ChopChop",
        subtitle: "Full-Stack Food Delivery",
        description:
            "Production-ready food delivery platform with OTP + JWT authentication, real-time order tracking, cart management, and Razorpay payment integration with webhook-based confirmation. Backend query optimisation and caching cut average API response time by ~35%.",
        badges: ["~35% faster APIs", "Razorpay"],
        tags: ["ReactJS", "Django", "PostgreSQL", "Tailwind CSS"],
        links: [
            { icon: <FaGithub />, url: "https://github.com/Shubham-Patil-06/ChopChop", label: "Code" },
            { icon: <FaExternalLinkAlt />, url: "https://chopchopfooddelivery.netlify.app/", label: "Live" },
        ],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading index="04" kicker="projects" title="Things I've Built" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {PROJECTS.map((p, i) => (
                        <Reveal key={p.title} delay={(i % 3) * 0.1}>
                            <div className={`card p-6 h-full flex flex-col ${p.featured ? "md:col-span-2 lg:col-span-1" : ""}`}>
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex flex-wrap gap-2">
                                        {p.badges.map((b) => (
                                            <span key={b} className="font-mono text-[10px] px-2 py-1 rounded" style={{ background: "rgba(0,255,136,0.08)", color: "var(--ac)" }}>
                                                {b}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3 text-base shrink-0" style={{ color: "var(--text-mute)" }}>
                                        {p.links.map((l, j) => (
                                            <a key={j} href={l.url} target="_blank" rel="noopener noreferrer" title={l.label} className="hover:text-[var(--ac)] transition-colors">
                                                {l.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                                <p className="font-mono text-xs mt-0.5 mb-3 accent">{p.subtitle}</p>
                                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-dim)" }}>
                                    {p.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-5">
                                    {p.tags.map((t) => (
                                        <span key={t} className="font-mono text-[11px]" style={{ color: "var(--text-mute)" }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
