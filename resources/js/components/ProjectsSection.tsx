import { cn } from '@/lib/utils';
import type { ProjectSection, Section, Project } from '@/types';
import { usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Eye, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ScrambleText } from './ScrambleText';
import '../../css/components/projects-section.css'; // Already imported
import en from "../../lang/en.json";
import ar from "../../lang/ar.json";

interface ProjectsSectionProps {
    projects?: Project[];
    section?: Section;
    sectionData?: ProjectSection;
}

export function ProjectsSection({ sectionData, section, projects }: ProjectsSectionProps) {
    const { locale } = usePage().props;
    const t = locale === 'ar' ? ar : en;
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    // ... (sectionData check, heading/subheading logic, selectedProject logic remains the same) ...
    const projectsList = projects || sectionData?.projects || [];
    const heading = section ? (locale === 'ar' ? section.title_ar : section.title) : sectionData?.heading || '';
    const subheading = section ? (locale === 'ar' ? section.subtitle_ar : section.subtitle) : sectionData?.subheading || '';
    const selectedProject = projectsList.find((p) => p.id === selectedId);

    // Handle body overflow when modal/lightbox is open
    useEffect(() => {
        if (selectedId || lightboxImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedId, lightboxImage]);

    if (!sectionData && !projects) return null;

    // Animation variants for section and header
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
    };

    const scrollCarousel = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = 320; // Width of project card + gap
            const currentScroll = carouselRef.current.scrollLeft;
            const newScroll = direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount;

            carouselRef.current.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.section
            ref={sectionRef}
            id="projects"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
            className={cn('projects-section', locale === 'ar' && 'text-right')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
        >
            <div className="projects-container">
                {/* Header - Use consistent header style */}
                <motion.div
                    variants={headerVariants}
                    className="projects-header"
                >
                    <ScrambleText className="scramble-heading">
                        {locale === 'ar' ? 'أعمالنا' : 'Our Portfolio'}
                    </ScrambleText>
                    <h2 className="projects-title">{heading}</h2>
                    <p className="projects-subtitle">{subheading}</p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button onClick={() => scrollCarousel('left')} className="nav-arrow nav-arrow-left">
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button onClick={() => scrollCarousel('right')} className="nav-arrow nav-arrow-right">
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Projects Carousel */}
                    <div ref={carouselRef} className={cn('projects-carousel', locale === 'ar' && 'projects-carousel-rtl')}>
                        {projectsList.map((project) => {
                            const imageSrc = project.images?.length ? `/storage/${project.images[0]}` : '/placeholder-project.jpg';
                            return (
                                // ✨ Use Framer Motion for layout animation on modal open/close
                                <motion.div
                                    key={project.id}
                                    onClick={() => setSelectedId(project.id)}
                                    className="project-card snap-center group"
                                >
                                    <div className="project-card-image-wrapper">
                                        <img
                                            src={imageSrc}
                                            alt={locale === 'ar' ? project.title_ar : project.title}
                                            className="project-card-image transition-all duration-500 group-hover:blur-xs group-hover:brightness-80"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = '/placeholder-project.jpg';
                                            }}
                                        />
                                    </div>
                                    <div className="project-card-content">
                                        <span className="project-card-badge">
                                            {/* You might want a category field here */}
                                            {t.projects.badge}
                                        </span>
                                        <h3 className="project-card-title">
                                            {locale === 'ar' ? project.title_ar : project.title}
                                        </h3>
                                        <p className="project-card-description">
                                            {locale === 'ar' ? project.description_ar : project.description}
                                        </p>
                                        <div className="project-card-meta">
                                            <div className="project-card-meta-item">
                                                <Calendar className="h-4 w-4" />
                                                <span>{project.created_at ? new Date(project.created_at).getFullYear() : new Date().getFullYear()}</span>
                                            </div>
                                            <div className="project-card-meta-item">
                                                <Eye className="h-4 w-4" />
                                                <span>{t.projects.view}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="scroll-indicator">
                    <div className="scroll-indicator-line"></div>
                    <span className="scroll-indicator-text">
                        {t.projects.scroll_indicator}
                    </span>
                    <div className="scroll-indicator-line"></div>
                </div>
            </div>

            {/* Modal & Lightbox (remains mostly the same, just uses updated CSS classes) */}
            <AnimatePresence>
                {selectedId && selectedProject && (
                    <motion.div
                        className="modal-backdrop"
                        onClick={() => setSelectedId(null)}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    >
                        <motion.div className="modal-backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />

                        {/* Modal content */}
                        <motion.div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Close button */}
                            <motion.button
                                initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
                                onClick={() => setSelectedId(null)}
                                className="modal-close-btn right-4"
                            > <X className="h-6 w-6" /> </motion.button>

                            {/* Image section */}
                            <div className="modal-image-section">
                                <motion.img
                                    src={selectedProject.images?.length ? `/storage/${selectedProject.images[0]}` : '/placeholder-project.jpg'}
                                    alt={locale === 'ar' ? selectedProject.title_ar : selectedProject.title}
                                    className="modal-image"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/placeholder-project.jpg';
                                    }}
                                />
                            </div>

                            {/* Content section */}
                            <div className="modal-content-section">
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                    <div className="modal-badge">
                                        {t.projects.badge}
                                    </div>
                                    <h3 className="modal-title">
                                        {locale === 'ar' ? selectedProject.title_ar : selectedProject.title}
                                    </h3>
                                    <p className="modal-description">
                                        {locale === 'ar' ? selectedProject.description_ar : selectedProject.description}
                                    </p>

                                    {/* Project gallery */}
                                    {selectedProject.images && selectedProject.images.length > 1 && (
                                        <div className="modal-gallery-section">
                                            <h4 className="modal-gallery-title italic antialiased font-medium">
                                                <Eye className="h-5 w-5 text-cyan-400" />
                                                {t.projects.gallery_title}
                                            </h4>
                                            <div className="modal-gallery-grid">
                                                {selectedProject.images.slice(0, 5).map((img: string, idx: number) => (
                                                    <motion.img
                                                        key={idx}
                                                        src={`/storage/${img}`}
                                                        alt={`${locale === 'ar' ? selectedProject.title_ar : selectedProject.title} - ${idx + 2}`}
                                                        className="modal-gallery-item"
                                                        onClick={() => setLightboxImage(`/storage/${img}`)}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = '/placeholder-project.jpg';
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        className="lightbox"
                        onClick={() => setLightboxImage(null)}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="lightbox-backdrop"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        />
                        {/* <motion.button
                            className="lightbox-close-btn right-6"
                            onClick={() => setLightboxImage(null)}
                            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                        >
                            <X className="h-6 w-6" />
                        </motion.button> */}
                        <motion.div
                            className="lightbox-content"
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                        >
                            <img
                                src={lightboxImage}
                                alt="Enlarged project view"
                                className="lightbox-image"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/placeholder-project.jpg';
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}
