import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Real 3D perspective tilt that follows the cursor.
 * Lightweight (CSS 3D transforms, no WebGL) so it's safe on every card and mobile.
 */
export default function TiltCard({
    children,
    className = "",
    max = 14, // max tilt in degrees
    glare = true,
}) {
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), {
        stiffness: 200,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), {
        stiffness: 200,
        damping: 20,
    });

    const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
    const glareY = useTransform(y, [0, 1], ["0%", "100%"]);
    const glareBg = useTransform(
        [glareX, glareY],
        ([gx, gy]) =>
            `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.18), transparent 45%)`
    );

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
    };

    const handleLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <motion.div
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
            className={`relative ${className}`}
        >
            <div style={{ transform: "translateZ(40px)" }}>{children}</div>

            {glare && (
                <motion.div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100"
                    style={{ background: glareBg }}
                />
            )}
        </motion.div>
    );
}
