import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import type { Section } from '@/types';
import { lazy, Suspense } from 'react';

// Lazy load the heavy ParticleCanvas component
const ParticleCanvas = lazy(() => import('./ParticleCanvas'));

interface ModernHeroSectionProps {
    section?: Section;
}

export function ModernHeroSection({ section }: ModernHeroSectionProps) {
    const { locale } = usePage().props;
    
    if (!section) return null;
    
    const title = locale === 'ar' ? section.title_ar : section.title;
    const description = locale === 'ar' ? section.description_ar : section.description;

    // We no longer need the mouse handlers or spring hooks here

    return (
        // 2. We don't need the 3D perspective or event handlers on this div
        <div 
            id="home" 
            className="hero-container relative flex h-screen w-full items-center justify-center overflow-hidden text-center"
        >
            {/* 3. Add the ParticleCanvas as the background - lazy loaded */}
            <Suspense fallback={null}>
                <ParticleCanvas />
            </Suspense>
            
            {/* 4. (Optional) Keep a dark gradient so particles are visible */}
            <div className="absolute inset-0 z-[-1] bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

            {/* 5. The content block no longer needs 3D rotation styles */}
            <motion.div
                className="relative z-10 flex flex-col items-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                dir={locale === "ar" ? "rtl" : "ltr"}
                style={{
                    textAlign: locale === "ar" ? "right" : "center",
                }}
            >
                <motion.h1
                    className={`text-4xl font-bold tracking-tight text-white md:text-5xl ${locale === "ar" ? "font-[Cairo] leading-relaxed" : ""}`}
                >
                    {title}
                </motion.h1>

                <motion.p
                    className={`aurora-text mt-4 py-2 max-w-3xl text-xl font-semibold md:text-4xl ${locale === "ar" ? "font-[Cairo]" : ""}`}
                    style={{
                        direction: locale === "ar" ? "rtl" : "ltr",
                        textAlign: locale === "ar" ? "right" : "center",
                    }}
                >
                    {description}
                </motion.p>

                <motion.div
                    className={`mt-10 flex items-center gap-x-4 ${locale === "ar" ? "flex-row-reverse" : ""}`}
                >
                    {/* Primary Button */}
                    <Link href="/contact" className="btn-primary-modern group">
                        <span className="btn-sheen"></span>
                        <span className="btn-content group-hover:bg-opacity-0">
                            {locale === "ar" ? "حجز اتصال" : "Book a Call"}
                        </span>
                    </Link>

                    {/* Secondary Button */}
                    <Link href="/services" className="btn-secondary-modern group">
                        {locale === "ar" ? "استكشف المزيد" : "Explore More"}
                        <MoveRight
                            className={`btn-icon transition-transform ${locale === "ar" ? "-rotate-180" : "group-hover:translate-x-1.5"
                                }`}
                        />
                    </Link>
                </motion.div>

            </motion.div>
        </div>
    );
}