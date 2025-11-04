import { motion, useInView } from 'framer-motion';
import { Briefcase, CheckCircle, Code, Database, Globe, Layers, PenTool, Server, Wind } from 'lucide-react';
import { ScrambleText } from './ScrambleText';
import { usePage } from "@inertiajs/react";
import { useRef } from 'react';
import { Section } from "../types/index";
import { LucideIcon } from "lucide-react";
import en from '../../lang/en.json';
import ar from '../../lang/ar.json';

//PURPLE/PINK VERSION

// ... (The ServiceListItem component remains the same)
const ServiceListItem = ({ text }: { text: string }) => {
    return (
        <motion.li
            className="flex items-center gap-x-3"
            variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
        >
            <CheckCircle className="h-6 w-6 text-[#06B6D4]" aria-hidden="true" />

            <span className="text-lg text-gray-300">{text}</span>
        </motion.li>
    );
};

interface AboutSectionProps {
    sectionData?: any;
    section?: Section;
}

export function AboutSection({ sectionData, section }: AboutSectionProps) {
    const { locale } = usePage().props;
    const t = locale === 'ar' ? ar : en;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    if (!sectionData && !section) {
        return null;
    }

    const title = section ? (locale === 'ar' ? section.title_ar : section.title) : '';
    const subtitle = section ? (locale === 'ar' ? section.subtitle_ar : section.subtitle) : '';
    const description = section ? (locale === 'ar' ? section.description_ar : section.description) : '';
    
    const techLabels = {
        "fullstack": t["about.tech"]["fullstack"],
        "web": t["about.tech"]["web"],
        "uiux": t["about.tech"]["uiux"],
        "db": t["about.tech"]["db"],
        "hosting": t["about.tech"]["hosting"],
        "performance": t["about.tech"]["performance"],
        "deploy": t["about.tech"]["deploy"],
        "it": t["about.tech"]["it"]
    };
    const sectionVariants = {
        hidden: { opacity: 0 },

        visible: {
            opacity: 1,

            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.section id="about"
            ref={ref}
            dir={locale === "ar" ? "rtl" : "ltr"}
            className={`bg-[var(--color-background)] py-24 text-white sm:py-32 ${locale === "ar" ? "text-right" : "text-left"}`}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={sectionVariants}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    {/* Left Column: Tech Icon Grid - UPDATED */}
                    <motion.div variants={itemVariants} className="w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                            {Object.entries(techLabels).map(([key, label], index) => {
                                const techIcons: { [key: string]: LucideIcon } = {
                                    "fullstack": Layers,
                                    "web": Code,
                                    "uiux": PenTool,
                                    "db": Database,
                                    "hosting": Server,
                                    "performance": Wind,
                                    "deploy": Globe,
                                    "it": Briefcase,
                                };
                                const Icon = techIcons[key] || Layers;
                                return (
                                    <motion.div
                                        key={key}
                                        className="tech-icon-card flex-col gap-2 p-4"
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.5 },
                                            visible: { opacity: 1, scale: 1, transition: { delay: index * 0.05 } },
                                        }}
                                    >
                                        <div className="tech-icon-glow"></div>
                                        <Icon className="relative h-8 w-8 text-[#06B6D4]" />

                                        <p className="relative text-center text-xs font-medium text-gray-300">{label}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Column: Text Content (remains the same) */}
                    <div className="lg:pt-4">
                        <motion.div variants={itemVariants}>
                            <ScrambleText className="scramble-heading">{title}</ScrambleText>
                            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{subtitle}</p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                {description}
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-12 border-t border-white/10 pt-10">
                            <ul className="space-y-4">
                                {section && locale === 'ar' && section.service_items_ar ? (
                                    section.service_items_ar.split('\n').map((item, index) => (
                                        <ServiceListItem key={index} text={item.trim()} />
                                    ))
                                ) : section && section.service_items ? (
                                    section.service_items.split('\n').map((item, index) => (
                                        <ServiceListItem key={index} text={item.trim()} />
                                    ))
                                ) : (
                                    <>
                                        <ServiceListItem text={t["about.service_1"]} />
                                        <ServiceListItem text={t["about.service_2"]} />
                                    </>
                                )}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

