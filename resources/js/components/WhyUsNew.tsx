import type { Feature, Section } from '@/types';
import { usePage } from '@inertiajs/react';
import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';
import { Autoplay, EffectCards, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ar from '../../lang/ar.json';
import en from '../../lang/en.json';
import { ScrambleText } from './ScrambleText';
import { getIcon } from '@/lib/icons';

// Icon mapping function using centralized registry
const getIconComponent = (iconName: string | null | undefined) => {
    return getIcon(iconName, 'CheckCircle');
};

const cardColors = [
    {
        background: 'from-purple-950/40 to-purple-800/20',
        border: 'border-purple-300/20',
        icon: 'text-purple-300',
    },
    {
        background: 'from-cyan-950/40 to-cyan-800/20',
        border: 'border-cyan-300/20',
        icon: 'text-cyan-300',
    },
    {
        background: 'from-emerald-950/40 to-emerald-800/20',
        border: 'border-emerald-300/20',
        icon: 'text-emerald-300',
    },
    {
        background: 'from-amber-950/40 to-amber-800/20',
        border: 'border-amber-300/20',
        icon: 'text-amber-300',
    },
];

// Default fallback features if none provided from backend
const defaultFeatures = [
    {
        title: 'Expertise',
        description: 'Our team brings years of experience delivering professional solutions.',
        icon: 'Award',
    },
    {
        title: '24/7 Support',
        description: 'We’re always here to help, any time of day or night.',
        icon: 'Headphones',
    },
    {
        title: 'Top Security',
        description: 'Your data and privacy are protected with industry-leading standards.',
        icon: 'Shield',
    },
    {
        title: 'High Performance',
        description: 'Optimized systems built for speed, reliability, and scalability.',
        icon: 'Zap',
    },
];

interface WhyUsNewProps {
    section?: Section;
    features?: Feature[];
}

export const WhyUsNew: React.FC<WhyUsNewProps> = ({ section, features = [] }) => {
    const { locale } = usePage().props;
    const t = locale === 'ar' ? ar : en;

    // Use backend features if available, otherwise use defaults
    const displayFeatures = features.length > 0 ? features : defaultFeatures;

    const title = section ? (locale === 'ar' ? section.title_ar : section.title) : 'Why Choose Us';
    const subtitle = section ? (locale === 'ar' ? section.subtitle_ar : section.subtitle) : 'What Makes Us Different';
    const description = section
        ? locale === 'ar'
            ? section.description_ar
            : section.description
        : 'Discover why clients trust us to bring their ideas to life. We deliver high-quality digital solutions powered by creativity, innovation, and reliability.';
    return (
        <section className="overflow-hidden bg-[var(--color-background)] py-24 text-white sm:py-32">
            {/* Content container with proper alignment */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Content container */}
                <div
                    className={`relative z-10 flex w-full flex-col items-center justify-between gap-8 px-10 md:gap-12 ${locale === 'ar' ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                    {/* LEFT TEXT */}
                    <div className={`max-w-[460px] px-4 text-white ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
                        <ScrambleText className="scramble-heading">{title}</ScrambleText>
                        <h2 className="my-6 text-3xl font-bold tracking-tight sm:text-4xl">{subtitle}</h2>

                        <p className="my-6 text-lg leading-8 text-gray-300">{description}</p>
                        <button
                            className={`group relative mt-4 overflow-hidden rounded-md border border-cyan-500/40 bg-gray-900/80 px-8 py-3 font-semibold text-cyan-400 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60 hover:bg-gray-800/90 hover:shadow-2xl hover:shadow-cyan-500/25 ${locale === 'ar' ? 'mr-0 ml-auto' : 'mr-auto ml-0'}`}
                        >
                            {/* Tech grid background effect */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_25%,rgba(6,182,212,0.05)_50%,transparent_50%,transparent_75%,rgba(6,182,212,0.05)_75%)] bg-[length:20px_20px]"></div>
                            </div>

                            {/* Scanning line effect */}
                            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>

                            {/* Corner accent lights */}
                            <div className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <div className="animation-delay-100 absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <div className="animation-delay-200 absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            <div className="animation-delay-300 absolute right-0 bottom-0 h-2 w-2 border-r-2 border-b-2 border-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                            {/* Circuit-like border effect */}
                            <div className="absolute inset-0 rounded-md border border-cyan-500/30 opacity-0 transition-opacity duration-100 group-hover:border-cyan-400/80 group-hover:opacity-100"></div>

                            {/* Button content */}
                            <span className="relative z-10 flex items-center gap-2 text-cyan-300 transition-colors duration-100 group-hover:text-cyan-100">
                                <span className="text-sm tracking-wider">{t['why.button']}</span>
                                <svg
                                    className="h-4 w-4 transform transition-all duration-100 group-hover:translate-x-1 group-hover:text-cyan-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>

                            {/* Data stream effect */}
                            <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </button>
                    </div>

                    {/* RIGHT SWIPER (feature cards) */}
                    <div className="flex flex-col items-center">
                        <div className="h-[400px] w-[300px] py-12 md:mx-10 lg:mx-25">
                            <Swiper
                                effect="cards"
                                grabCursor={true}
                                loop={displayFeatures.length > 1}
                                speed={500}
                                mousewheel={{ invert: false }}
                                autoplay={{
                                    delay: 500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                    waitForTransition: true,
                                }}
                                loopAdditionalSlides={displayFeatures.length}
                                allowTouchMove={true}
                                initialSlide={0}
                                modules={[EffectCards, Mousewheel, Autoplay]}
                                className="h-full"
                            >
                                {displayFeatures.map((feature, i) => {
                                    // Handle both Feature type (from backend) and default feature type
                                    const featureIcon = (feature as Feature).icon || (feature as any).icon;
                                    const Icon = getIconComponent(featureIcon);

                                    const featureTitle =
                                        locale === 'ar' && (feature as Feature).title_ar
                                            ? (feature as Feature).title_ar
                                            : (feature as Feature).title || (feature as any).title;
                                    const featureDescription =
                                        locale === 'ar' && (feature as Feature).description_ar
                                            ? (feature as Feature).description_ar
                                            : (feature as Feature).description || (feature as any).description;

                                    const colors = cardColors[i % cardColors.length];
                                    return (
                                        <SwiperSlide
                                            key={(feature as Feature).id || i}
                                            className={`relative flex flex-col items-center justify-center rounded-xl bg-gradient-to-br ${colors.background} border-2 ${colors.border} p-8 text-center text-white shadow-[0_15px_50px_rgba(0,0,0,0.3)] backdrop-blur-lg`}
                                        >
                                            <div className="flex flex-col items-center justify-center">
                                                <Icon className={`mb-4 h-12 w-12 ${colors.icon}`} />
                                                <h3 className="mb-2 text-center text-xl font-semibold">{featureTitle}</h3>
                                            </div>
                                            <p className="text-center text-sm leading-relaxed text-gray-300">{featureDescription}</p>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                        <p className="mt-2 text-center text-xs text-white/30">{t['why.drag_text']}</p>
                    </div>
                </div>
            </div>

            {/* Tailwind keyframes */}
            <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
          }
          100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
          }
        }

        @keyframes gelatine {
          0%,100% { transform: scale(1,1); }
          25% { transform: scale(0.9,1.1); }
          50% { transform: scale(1.1,0.9); }
          75% { transform: scale(0.95,1.05); }
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .bg-clip-border {
          -webkit-background-clip: border-box;
          background-clip: border-box;
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        /* Tech button specific styles */
        .tech-button-grid {
          background-image: linear-gradient(45deg, transparent 25%, rgba(6, 182, 212, 0.05) 25%, rgba(6, 182, 212, 0.05) 50%, transparent 50%, transparent 75%, rgba(6, 182, 212, 0.05) 75%);
          background-size: 20px 20px;
        }
      `}</style>
        </section>
    );
};
