import { useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import profilePhoto from "../assets/Profile.jpg";

/**
 * A hanging ID badge on a lanyard that swings like a pendulum in response
 * to cursor movement. Pivots from the hook (top-center) with an underdamped
 * spring so quick mouse moves make it sway and settle.
 */
export default function LanyardCard() {
    const pivotRef = useRef(null);
    const pivotX = useRef(0);

    // Underdamped spring → natural swinging / overshoot
    const rotate = useSpring(0, { stiffness: 90, damping: 6, mass: 1.1 });

    useEffect(() => {
        const measure = () => {
            const el = pivotRef.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            pivotX.current = r.left + r.width / 2;
        };
        measure();
        window.addEventListener("resize", measure);

        const onMove = (e) => {
            // Angle proportional to how far the cursor is from the hook
            const target = Math.max(-24, Math.min(24, (e.clientX - pivotX.current) * 0.035));
            rotate.set(target);
        };
        window.addEventListener("mousemove", onMove);

        // Little swing on load
        rotate.set(22);
        const t = setTimeout(() => rotate.set(0), 120);

        return () => {
            window.removeEventListener("resize", measure);
            window.removeEventListener("mousemove", onMove);
            clearTimeout(t);
        };
    }, [rotate]);

    return (
        <div
            ref={pivotRef}
            className="fixed top-0 left-6 xl:left-12 z-40 hidden lg:block pointer-events-none"
            style={{ width: 180 }}
        >
            <motion.div style={{ rotate, transformOrigin: "top center" }} className="flex flex-col items-center">
                {/* Hook ring */}
                <div
                    className="w-5 h-5 rounded-full border-[3px]"
                    style={{ borderColor: "var(--ac)", boxShadow: "0 0 12px rgba(0,255,136,0.5)" }}
                />
                {/* Lanyard strap */}
                <div
                    className="w-2 h-20 -mt-1"
                    style={{
                        background: "linear-gradient(180deg, var(--ac), #0a6b42)",
                        clipPath: "polygon(35% 0, 65% 0, 100% 100%, 0 100%)",
                    }}
                />
                {/* Metal clip */}
                <div className="w-10 h-4 -mt-1 rounded-sm" style={{ background: "linear-gradient(180deg,#3a3a3a,#1a1a1a)", border: "1px solid #2a2a2a" }} />

                {/* The card */}
                <div
                    className="w-44 rounded-2xl p-3 -mt-0.5"
                    style={{
                        background: "#111",
                        border: "1px solid var(--ac)",
                        boxShadow: "0 18px 40px rgba(0,0,0,0.5), 0 0 24px rgba(0,255,136,0.12)",
                    }}
                >
                    {/* header strip */}
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[9px] tracking-widest" style={{ color: "var(--ac)" }}>● DEV PASS</span>
                        <span className="font-mono text-[9px]" style={{ color: "var(--text-mute)" }}>'25</span>
                    </div>

                    <img
                        src={profilePhoto}
                        alt="Shubham Patil"
                        draggable={false}
                        className="w-full h-36 object-cover rounded-lg"
                        style={{ border: "1px solid var(--bd)" }}
                    />

                    <div className="mt-2.5 text-center">
                        <p className="font-bold text-sm leading-tight text-white">Shubham Patil</p>
                        <p className="font-mono text-[10px] mt-0.5" style={{ color: "var(--ac)" }}>
                            Python Backend Dev
                        </p>
                    </div>

                    {/* fake barcode */}
                    <div
                        className="mt-2 h-5 rounded"
                        style={{
                            background:
                                "repeating-linear-gradient(90deg,#e2e8f0 0 2px,transparent 2px 4px,#e2e8f0 4px 5px,transparent 5px 8px)",
                        }}
                    />
                    <p className="font-mono text-[8px] text-center mt-1 tracking-[0.2em]" style={{ color: "var(--text-mute)" }}>
                        ID·SP·06·2025
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
