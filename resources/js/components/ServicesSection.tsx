import { cn } from '@/lib/utils';
import type { Section, Service } from '@/types';
import { usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import parse, { domToReact } from 'html-react-parser';
import type { ComponentType } from 'react';
import { ScrambleText } from './ScrambleText';
import { iconRegistry, getIcon } from '@/lib/icons';

type LucideComponentProps = { className?: string; 'aria-hidden'?: boolean };
type LucideComponent = ComponentType<LucideComponentProps>;

// ✅ Normalize icon names from backend
function normalizeIconName(name?: string): string | undefined {
    if (!name) return undefined;
    const cleaned = String(name).trim();
    if (!cleaned) return undefined;
    if (cleaned in iconRegistry) return cleaned;
    const words = cleaned
        .replace(/[-_]+/g, ' ')
        .replace(/[^a-zA-Z0-9 ]+/g, ' ')
        .split(' ')
        .filter(Boolean);
    if (words.length === 0) return undefined;
    const pascal = words.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
    return pascal || undefined;
}

interface ShowcaseSectionProps {
    services?: Service[];
    section?: Section;
}

export function Services({ services = [], section }: ShowcaseSectionProps) {
    const { locale } = usePage().props;

    // Only show section header if backend data exists
    const heading = section ? (locale === 'ar' ? section.title_ar : section.title) : '';
    const title = section ? (locale === 'ar' ? section.subtitle_ar : section.subtitle) : '';
    const description = section ? (locale === 'ar' ? section.description_ar : section.description) : '';

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.section
            id="services"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
            className={cn('services-section transition-all duration-300', locale === 'ar' ? 'rtl text-right' : 'ltr text-left')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="services-container">
                <div
                    className={cn(
                        'services-layout-grid flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-start',
                        locale === 'ar' && 'flex-row-reverse text-right',
                    )}
                >
                    {/* ✅ Text Side */}
                    <motion.div
                        variants={cardVariants}
                        className={cn('services-text-content max-w-lg space-y-4 self-start lg:sticky lg:top-24', locale === 'ar' && 'text-right')}
                    >
                        <ScrambleText className="scramble-heading">{heading}</ScrambleText>
                        <p className="services-title">{title}</p>
                        <p className="services-description">{description}</p>
                    </motion.div>

                    {/* ✅ Cards Side */}
                    <div className="services-cards-wrapper w-full">
                        <dl
                            className={cn(
                                'services-cards-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
                                locale === 'ar' && 'flex-row-reverse',
                            )}
                        >
                            {services.map((service) => {
                                const iconName = normalizeIconName(service.icon);
                                const IconComp: LucideComponent = getIcon(iconName, 'CheckCircle') as LucideComponent;

                                return (
                                    <motion.div
                                        key={service.id}
                                        variants={cardVariants}
                                        className={cn(
                                            'service-card group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:bg-slate-800/40',
                                            locale === 'ar' && 'text-right',
                                        )}
                                    >
                                        <span className="card-sheen"></span>
                                        <dt
                                            className={cn(
                                                'service-card-title flex items-center gap-3 text-lg font-semibold',
                                                locale === 'ar' && 'flex-row-reverse justify-end',
                                            )}
                                        >
                                            <IconComp className="service-card-icon h-6 w-6 text-cyan-600" aria-hidden={true} />
                                            {locale === 'en' ? service.title : (service as any).title_ar}
                                        </dt>
                                        <dd className="service-card-body mt-2 text-gray-700 dark:text-gray-300">
                                            <div className="service-card-description">
                                                {parse(locale === 'en' ? (service.description ?? '') : ((service as any).description_ar ?? ''), {
                                                    replace: (domNode: any) => {
                                                        if (domNode && domNode.type === 'tag' && domNode.name === 'li') {
                                                            return (
                                                                <li className="mt-3 flex items-start gap-2">
                                                                    {(() => {
                                                                        const CheckCircleIcon = iconRegistry.CheckCircle;
                                                                        return <CheckCircleIcon className="h-9 w-9 text-cyan-600" aria-hidden={true} />;
                                                                    })()}
                                                                    {domToReact(domNode.children)}
                                                                </li>
                                                            );
                                                        }
                                                        if (domNode && domNode.type === 'tag' && domNode.name === 'p') {
                                                            return <p className="text-gray-700 dark:text-gray-300">{domToReact(domNode.children)}</p>;
                                                        }
                                                        return undefined;
                                                    },
                                                })}
                                            </div>
                                        </dd>
                                    </motion.div>
                                );
                            })}
                        </dl>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
