import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const WORK = [
    {
        role: "Python Django Developer",
        company: "A Plus Topper",
        date: "Jun 2025 — Present",
        location: "Hyderabad, India",
        points: [
            "Architected and deployed algostraddle.com — a full-featured algorithmic trading platform with live/historical charting and real-time market data, integrating Zerodha Kite, Flattrade, and Delta Exchange broker APIs end-to-end.",
            "Engineered a high-performance Webhook Execution Engine translating TradingView strategy alerts into sub-second broker order placements, minimising slippage during volatile markets.",
            "Designed a horizontally scalable backend sustaining 1,000+ concurrent user sessions with zero downtime during high-frequency trading windows.",
            "Built real-time Live Chart dashboards, Historical Data Analytics, automated PnL reporting, and a fully integrated backtesting engine with configurable parameters.",
            "Optimised API middleware for high-frequency data polling and WebSocket stream management — reducing latency and improving trade execution reliability.",
        ],
        tags: ["Python", "Django", "FastAPI", "WebSocket", "PostgreSQL", "Docker"],
    },
];

const EDUCATION = [
    {
        role: "M.Sc. in Computer Science",
        company: "Vishwakarma College of Arts, Commerce & Science, Pune",
        date: "2023 — 2025",
        location: "CGPA: 8.73 / 10",
    },
    {
        role: "B.Sc. in Computer Science",
        company: "Shivaji University, Kolhapur",
        date: "2020 — 2023",
        location: "CGPA: 9.34 / 10",
    },
];

function Entry({ item, work }) {
    return (
        <div className="card p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                    <h3 className="text-lg font-bold text-white">
                        {item.role}{" "}
                        <span className="accent font-mono text-base">@ {item.company}</span>
                    </h3>
                    <p className="font-mono text-xs mt-1" style={{ color: "var(--text-mute)" }}>
                        {item.location}
                    </p>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full border" style={{ borderColor: "var(--bd)", color: "var(--text-dim)" }}>
                    {item.date}
                </span>
            </div>

            {item.points && (
                <ul className="mt-5 space-y-2.5">
                    {item.points.map((p, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                            <span className="accent mt-1 font-mono shrink-0">▹</span>
                            <span>{p}</span>
                        </li>
                    ))}
                </ul>
            )}

            {item.tags && (
                <div className="flex flex-wrap gap-2 mt-5">
                    {item.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading index="03" kicker="experience" title="Where I've Worked" />

                <div className="space-y-5">
                    {WORK.map((w, i) => (
                        <Reveal key={i}>
                            <Entry item={w} work />
                        </Reveal>
                    ))}
                </div>

                <div className="flex items-center gap-3 mt-16 mb-6">
                    <FaGraduationCap className="accent" />
                    <h3 className="font-mono text-lg font-semibold text-white">Education</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                    {EDUCATION.map((e, i) => (
                        <Reveal key={i} delay={i * 0.08}>
                            <Entry item={e} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
