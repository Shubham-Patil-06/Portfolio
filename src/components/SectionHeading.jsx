import Reveal from "./Reveal";

export default function SectionHeading({ index, kicker, title }) {
    return (
        <Reveal>
            <div className="mb-12">
                <p className="kicker mb-3">
                    {index && <span style={{ color: "var(--text-mute)" }}>{index}. </span>}
                    {kicker}
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
                <div className="mt-4 h-px w-24" style={{ background: "var(--ac)" }} />
            </div>
        </Reveal>
    );
}
