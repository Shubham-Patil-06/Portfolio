import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const CATEGORIES = [
    {
        icon: "⚙️",
        title: "Backend",
        skills: ["Python", "Django", "FastAPI", "Flask", "REST API Design", "WebSocket"],
    },
    {
        icon: "🗄️",
        title: "Databases",
        skills: ["PostgreSQL", "MySQL"],
    },
    {
        icon: "🎨",
        title: "Frontend",
        skills: ["ReactJS", "JavaScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        icon: "🤖",
        title: "Data & ML",
        skills: ["TensorFlow", "Scikit-learn", "LightGBM", "LSTM", "Pandas", "NumPy"],
    },
    {
        icon: "☁️",
        title: "DevOps & Cloud",
        skills: ["AWS", "Docker", "Git", "DigitalOcean", "Netlify", "Render", "CI/CD", "Linux"],
    },
    {
        icon: "🧪",
        title: "Testing & QA",
        skills: ["PyTest", "Postman", "Selenium", "Unit Testing"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading index="02" kicker="skills" title="My Tech Stack" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {CATEGORIES.map((cat, i) => (
                        <Reveal key={cat.title} delay={(i % 3) * 0.08}>
                            <div className="card p-6 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">{cat.icon}</span>
                                    <h3 className="font-mono font-semibold text-white">{cat.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((s) => (
                                        <span key={s} className="tag">{s}</span>
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
