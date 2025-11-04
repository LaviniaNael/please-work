import { AboutSection } from '@/components/AboutSection';
import { CustomNav } from '@/components/custom-nav';
import { Footer } from '@/components/footer';
import { ModernHeroSection } from '@/components/HeroSection';
import { Services } from '@/components/ServicesSection';
import { Head } from '@inertiajs/react';
// import {WhyUs} from '@/components/WhyUs';
import { AiHudSection } from '@/components/AiHudSection';
import { ChatFaq } from '@/components/ChatFaq';
import { ContactUs } from '@/components/ContactUs';
import { ProjectsSection } from '@/components/ProjectsSection';
import { WhyUsNew } from '@/components/WhyUsNew';
import type { Faq, Feature, Project, Section, SectionData, Service } from '@/types';

export default function MyPage({
    services = [],
    features = [],
    projects = [],
    faqs = [],
    aiFeatures = [],
    whyUsFeatures = [],
    sections = {},
}: {
    services: Service[];
    features: Feature[];
    projects: Project[];
    faqs: Faq[];
    aiFeatures: Section[];
    whyUsFeatures: Feature[];
    sections: SectionData;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Head title="Procode" />

            <CustomNav />
            <main className="flex-1">
                <ModernHeroSection section={sections.hero} />
                <AboutSection section={sections.about} />
                <Services services={services} section={sections.services} />
                {/* <WhyUs /> */}
                <WhyUsNew section={sections.whyus} features={whyUsFeatures} />
                <ContactUs section={sections.contact} />
                <ProjectsSection projects={projects} section={sections.projects} />
                <ChatFaq faqs={faqs} section={sections.faq} />
                <AiHudSection features={aiFeatures} section={sections.ai} />
            </main>
            <Footer />
        </div>
    );
}
