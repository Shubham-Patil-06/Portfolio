import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { FaCertificate } from "react-icons/fa";

const CERTS = [
    { name: "Python for Everybody", issuer: "Coursera", year: "2024" },
    { name: "Full Stack Web Development", issuer: "freeCodeCamp", year: "2024" },
];

export default function Certifications() {
    return (
        <section id="certifications" className="relative py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading index="05" kicker="certifications" title="Credentials" />

                <div className="grid sm:grid-cols-2 gap-5">
                    {CERTS.map((c, i) => (
                        <Reveal key={c.name} delay={i * 0.08}>
                            <div className="card p-6 flex items-center gap-4">
                                <span className="w-11 h-11 grid place-items-center rounded-lg shrink-0" style={{ background: "rgba(0,255,136,0.08)", color: "var(--ac)" }}>
                                    <FaCertificate />
                                </span>
                                <div>
                                    <h3 className="font-semibold text-white">{c.name}</h3>
                                    <p className="font-mono text-xs mt-0.5" style={{ color: "var(--text-mute)" }}>
                                        {c.issuer} · {c.year}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
