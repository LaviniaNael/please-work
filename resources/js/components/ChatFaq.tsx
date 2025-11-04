import type { Faq, Section } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ScrambleText } from './ScrambleText';
import en from '../../lang/en.json';
import ar from '../../lang/ar.json';
import { usePage } from "@inertiajs/react";

const AnimatedAnswer = ({ text }: { text: string }) => {
    const letters = Array.from(text);
    return (
        <motion.p
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.015 } },
            }}
        >
            {letters.map((char, index) => (
                <motion.span key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                    {char}
                </motion.span>
            ))}
        </motion.p>
    );
};

interface ChatFaqProps {
    faqs?: Faq[];
    section?: Section;
}

export function ChatFaq({ faqs = [], section }: ChatFaqProps) {
    const [conversation, setConversation] = useState<{ type: 'q' | 'a'; text: string }[]>([]);
    const [isAnswering, setIsAnswering] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const { locale } = usePage().props;
    const t = locale === 'ar' ? ar : en;

    const checkScrollability = useCallback(() => {
        const el = scrollContainerRef.current;
        if (el) {
            const hasOverflow = el.scrollWidth > el.clientWidth;
            setCanScrollLeft(el.scrollLeft > 0);
            setCanScrollRight(hasOverflow && el.scrollLeft < el.scrollWidth - el.clientWidth);
        }
    }, []);

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (!el) return;

        const timer = setTimeout(() => {
            checkScrollability();
        }, 100);

        window.addEventListener('resize', checkScrollability);
        el.addEventListener('scroll', checkScrollability);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkScrollability);
            el.removeEventListener('scroll', checkScrollability);
        };
    }, [checkScrollability]);

    // Reset conversation when language changes
    useEffect(() => {
        setConversation([]);
        setIsAnswering(false);
    }, [locale]);

    const handleScroll = (direction: 'left' | 'right') => {
        const el = scrollContainerRef.current;
        if (el) {
            const scrollAmount = direction === 'left' ? -el.clientWidth / 2 : el.clientWidth / 2;
            el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleQuestionSelect = (faq: Faq) => {
        if (isAnswering) return;
    
        setIsAnswering(true);
    
        // Select language-specific question and answer
        const questionText = locale === 'en' ? faq.question : faq.question_ar || faq.question;
        const answerText = locale === 'en' ? faq.answer : faq.answer_ar || faq.answer;
    
        setConversation([{ type: 'q', text: questionText }]);
    
        setTimeout(() => {
            setConversation((prev) => [...prev, { type: 'a', text: answerText }]);
            setIsAnswering(false);
        }, 800);
    };

    return (
        <section className="bg-[var(--color-background)] py-24 text-white sm:py-32" id="faq" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <div className="mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                {section && (
                    <div className="mb-16 text-center">
                        <ScrambleText className="scramble-heading">{locale === 'ar' ? section.title_ar : section.title}</ScrambleText>
                        <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{locale === 'ar' ? section.subtitle_ar : section.subtitle}</p>
                    </div>
                )}

                <div className="faq-chat-window">
                    <div className="faq-prompts-wrapper">
                        {/* Left Arrow */}
                        <AnimatePresence>
                            {canScrollLeft && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="faq-scroll-arrow left-2"
                                    onClick={() => handleScroll('left')}
                                    disabled={!canScrollLeft}
                                >
                                    <ChevronLeft />
                                </motion.button>
                            )}
                        </AnimatePresence>

                        {/* Questions */}
                        <div ref={scrollContainerRef} onScroll={checkScrollability} className="faq-question-prompts">
                            {faqs.map((faq) => (
                                <button key={faq.id} onClick={() => handleQuestionSelect(faq)} className="faq-prompt-button flex-shrink-0">
                                    {locale === 'en' ? faq.question : faq.question_ar}
                                </button>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <AnimatePresence>
                            {canScrollRight && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="faq-scroll-arrow right-2"
                                    onClick={() => handleScroll('right')}
                                    disabled={!canScrollRight}
                                >
                                    <ChevronRight />
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="faq-chat-history">
                        <AnimatePresence>
                            {conversation.length === 0 && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-500" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                                    {t.faq.select_question}
                                </motion.div>
                            )}
                            {conversation.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={msg.type === 'q' ? 'chat-bubble-question' : 'chat-bubble-answer'}
                                >
                                    {msg.type === 'a' ? <AnimatedAnswer text={msg.text} /> : <p>{msg.text}</p>}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
