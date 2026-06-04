import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import profilePhoto from "../assets/Profile.jpg";

const METRICS = [
    { value: "1,000+", label: "Concurrent requests handled" },
    { value: "< 1s", label: "Order execution latency" },
    { value: "3", label: "Broker APIs integrated" },
    { value: "8.73", label: "M.Sc. CGPA / 10" },
];

export default function About() {
    return (
        <section id="about" className="relative py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading index="01" kicker="about-me" title="Who I Am" />

                <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12 items-start">
                    <Reveal>
                        <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--text-dim)" }}>
                            <p>
                                I'm a backend-focused software developer with production experience architecting
                                high-throughput trading platforms, real-time WebSocket systems, and scalable REST
                                APIs using <span className="accent">Python</span> (Django, FastAPI, Flask).
                            </p>
                            <p>
                                I built and deployed <span className="accent">algostraddle.com</span> — a live
                                algorithmic trading platform handling 1,000+ concurrent requests with sub-second order
                                execution, integrated across <span className="text-white">Zerodha Kite</span>,{" "}
                                <span className="text-white">Flattrade</span>, and{" "}
                                <span className="text-white">Delta Exchange</span>.
                            </p>
                            <p>
                                My work spans multi-broker API integration, automated PnL pipelines, backtesting
                                engines, and ML-driven product development. I'm passionate about fintech infrastructure
                                and data-intensive full-stack systems.
                            </p>
                            <p className="font-mono text-sm pt-2" style={{ color: "var(--text-mute)" }}>
                                📍 Hyderabad, India
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-xl opacity-30" style={{ background: "var(--ac)", filter: "blur(24px)" }} />
                            <img
                                src={profilePhoto}
                                alt="Shubham Patil"
                                className="relative rounded-xl w-full max-w-[280px] mx-auto object-cover border"
                                style={{ borderColor: "var(--bd)" }}
                            />
                        </div>
                    </Reveal>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
                    {METRICS.map((m, i) => (
                        <Reveal key={m.label} delay={i * 0.08}>
                            <div className="card p-6 h-full">
                                <div className="text-3xl font-extrabold accent font-mono">{m.value}</div>
                                <div className="mt-2 text-sm" style={{ color: "var(--text-dim)" }}>{m.label}</div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
