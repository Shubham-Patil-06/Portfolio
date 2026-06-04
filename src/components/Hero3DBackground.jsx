import { Suspense, lazy } from "react";
import use3DCapable from "../hooks/use3DCapable";

// Lazy-load so the heavy WebGL bundle is a separate chunk and never blocks first paint.
const Hero3D = lazy(() => import("./Hero3D"));

/* Lightweight animated CSS fallback for reduced-motion / low-power devices */
function CSSFallback() {
    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                {[...Array(20)].map((_, i) => (
                    <span
                        key={i}
                        className="absolute rounded-full bg-blue-500/60 animate-pulse"
                        style={{
                            width: Math.random() * 8 + 4,
                            height: Math.random() * 8 + 4,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default function Hero3DBackground() {
    const enabled = use3DCapable();

    if (!enabled) return <CSSFallback />;

    return (
        <div className="fixed inset-0 -z-10">
            <Suspense fallback={<CSSFallback />}>
                <Hero3D />
            </Suspense>
        </div>
    );
}
