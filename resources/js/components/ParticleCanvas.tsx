import React, { useEffect, useRef } from 'react';

// You can customize these settings
const PARTICLE_COLOR = '#ffffff';
const PARTICLE_OPACITY = 0.5;
const PARTICLE_COUNT = 80;
const PARTICLE_RADIUS = 2;
const MAX_LINE_DISTANCE = 120; // How close particles need to be to connect
const MOUSE_REPEL_DISTANCE = 150; // How close the mouse needs to be to repel
const REPEL_STRENGTH = 0.5;
const VELOCITY = 0.3; // Base speed of particles

interface Particle {
    x: number;
    y: number;
    // Base velocities
    baseVx: number;
    baseVy: number;
    // Current velocities (affected by mouse)
    vx: number;
    vy: number;
    radius: number;
}

const ParticleCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });

    useEffect(() => {
        let animationFrameId: number;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];

        // Helper to set canvas size to parent container
        const resizeCanvas = () => {
            if (!canvas.parentElement) return;
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };

        // Initialize all particles
        const init = () => {
            resizeCanvas();
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    baseVx: (Math.random() - 0.5) * VELOCITY,
                    baseVy: (Math.random() - 0.5) * VELOCITY,
                    vx: (Math.random() - 0.5) * VELOCITY,
                    vy: (Math.random() - 0.5) * VELOCITY,
                    radius: PARTICLE_RADIUS,
                });
            }
        };

        // Main animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw each particle
            for (const p of particles) {
                // --- Mouse Repel Logic ---
                const dxMouse = p.x - mouseRef.current.x;
                const dyMouse = p.y - mouseRef.current.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < MOUSE_REPEL_DISTANCE) {
                    // Mouse is close, repel the particle
                    const repelForce = (1 - distMouse / MOUSE_REPEL_DISTANCE) * REPEL_STRENGTH;
                    const angle = Math.atan2(dyMouse, dxMouse);

                    p.vx = p.baseVx + Math.cos(angle) * repelForce;
                    p.vy = p.baseVy + Math.sin(angle) * repelForce;
                } else {
                    // Mouse is far, return to base velocity
                    p.vx = p.baseVx;
                    p.vy = p.baseVy;
                }

                // --- Update Position ---
                p.x += p.vx;
                p.y += p.vy;

                // --- Wall Bouncing Logic ---
                if (p.x > canvas.width + p.radius) p.x = -p.radius;
                if (p.x < -p.radius) p.x = canvas.width + p.radius;
                if (p.y > canvas.height + p.radius) p.y = -p.radius;
                if (p.y < -p.radius) p.y = canvas.height + p.radius;

                // --- Draw Particle ---
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${PARTICLE_OPACITY})`; // Use a fixed color for better performance
                ctx.fill();
            }

            // --- Draw Connection Lines ---
            ctx.strokeStyle = `rgba(255, 255, 255, ${PARTICLE_OPACITY / 2})`; // Lighter lines
            ctx.lineWidth = 0.5;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < MAX_LINE_DISTANCE) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        // --- Event Listeners ---
        const handleMouseMove = (e: MouseEvent) => {
            if (!canvas.parentElement) return;
            const rect = canvas.parentElement.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -9999, y: -9999 };
        };

        window.addEventListener('resize', init);
        // We attach mouse listeners to the parent element for better tracking
        canvas.parentElement?.addEventListener('mousemove', handleMouseMove);
        canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave);

        init();
        animate();

        // --- Cleanup ---
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', init);
            canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
            canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 z-0 h-full w-full" />;
};

export default ParticleCanvas;
