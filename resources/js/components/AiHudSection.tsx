import { motion } from 'framer-motion';
import { ScrambleText } from './ScrambleText';
import type { Section } from '@/types';
import { getIcon } from '@/lib/icons';
import { usePage } from '@inertiajs/react';
import en from '../../lang/en.json';
import ar from '../../lang/ar.json';

interface AiHudSectionProps {
    features?: Section[];
    section?: Section;
}

export function AiHudSection({ features = [], section }: AiHudSectionProps) {
    const { locale } = usePage().props;
    const t = locale === 'ar' ? ar : en;
    
    // If no features or section provided, don't render anything
    if (!features || features.length === 0 || !section) return null;
    
    const heading = locale === 'ar' ? section.title_ar : section.title;
    const subtitle = locale === 'ar' ? section.subtitle_ar : section.subtitle;
    const coreText = t.ai.core;
  
    return (
      <section className="ai-hud-section" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="ai-hud-bg"></div>
  
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <ScrambleText className="scramble-heading">
              {heading}
            </ScrambleText>
            <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {subtitle}
            </p>
          </div>
  
          <div className="relative mt-24">
            {/* Central Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="h-32 w-32 rounded-full bg-cyan-950/50 border border-cyan-400/30 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <ScrambleText className="font-bold text-cyan-400">
                  {coreText}
                </ScrambleText>
              </motion.div>
            </div>
  
            {/* Dynamic Panels */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
              }}
            >
              {features.map((feature) => {
                const Icon = getIcon(feature.icon, 'Cog');
                const title = locale === 'ar' ? feature.title_ar : feature.title;
                const description = locale === 'ar' ? feature.description_ar : feature.description;
                
                return (
                  <motion.div
                    key={feature.id}
                    className="ai-hud-panel"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.5 },
                      },
                    }}
                  >
                    <dt className="flex items-center gap-x-4">
                      <Icon
                        className="h-10 w-10 text-primary-accent"
                        aria-hidden="true"
                      />
                      <span className="text-lg font-semibold text-secondary-accent">
                        {title}
                      </span>
                    </dt>
                    <dd className="mt-4 text-gray-300">{description}</dd>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }