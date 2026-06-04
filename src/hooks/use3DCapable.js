import { useEffect, useState } from "react";

/**
 * Decides whether heavy WebGL 3D should run.
 * Returns false when:
 *  - the user prefers reduced motion
 *  - the device looks low-powered (few CPU cores / coarse pointer + small screen)
 *  - WebGL is unavailable
 * This lets every 3D scene fall back to a lightweight CSS experience.
 */
export default function use3DCapable() {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reducedMotion) {
            setEnabled(false);
            return;
        }

        // WebGL support probe
        let webglOk = false;
        try {
            const canvas = document.createElement("canvas");
            webglOk = !!(
                window.WebGLRenderingContext &&
                (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
            );
        } catch {
            webglOk = false;
        }
        if (!webglOk) {
            setEnabled(false);
            return;
        }

        // Crude low-power heuristic: phones with coarse pointers + low core counts
        const cores = navigator.hardwareConcurrency || 4;
        const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
        const smallScreen = window.innerWidth < 768;
        const lowPower = coarsePointer && smallScreen && cores <= 4;

        setEnabled(!lowPower);
    }, []);

    return enabled;
}
