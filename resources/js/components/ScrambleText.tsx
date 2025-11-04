import { useInView } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

export function ScrambleText({ children, className }: { children: string; className?: string }) {
    const ref = useRef(null);
    // Remove `once: true` to continuously track if the component is in view
    const isInView = useInView(ref, { amount: 0.5 });
    const [text, setText] = useState(children);

    // Keep track of the interval IDs to clear them correctly
    const frameIntervalRef = useRef<number | null>(null);
    const repeatIntervalRef = useRef<number | null>(null);

    const chars = '!<>-_\\/[]{}—=+*^?#________';

    const scramble = useCallback(() => {
        let frame = 0;
        const frameRate = 6;
        const totalFrames = children.length * frameRate * 2;

        if (frameIntervalRef.current) clearInterval(frameIntervalRef.current);

        frameIntervalRef.current = window.setInterval(() => {
            let newText = '';
            for (let i = 0; i < children.length; i++) {
                const progress = (frame - i * frameRate) / frameRate;
                if (progress < 1 && progress > 0) {
                    const randomChar = chars[Math.floor(Math.random() * chars.length)];
                    newText += randomChar;
                } else {
                    newText += children[i];
                }
            }
            setText(newText);

            if (frame > totalFrames) {
                if (frameIntervalRef.current) clearInterval(frameIntervalRef.current);
                setText(children);
            }
            frame++;
        }, 30);
    }, [children]);

    useEffect(() => {
        if (isInView) {
            scramble();

            repeatIntervalRef.current = window.setInterval(scramble, 4000);
        }

        return () => {
            if (repeatIntervalRef.current) clearInterval(repeatIntervalRef.current);
            if (frameIntervalRef.current) clearInterval(frameIntervalRef.current);
        };
    }, [isInView, scramble]);

    return (
        <h2 ref={ref} className={className}>
            {text}
        </h2>
    );
}
