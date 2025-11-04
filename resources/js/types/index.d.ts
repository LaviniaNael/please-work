import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
export interface Feature {
    id: number;
    title: string;
    title_ar?: string;
    slug?: string;
    slug_ar?: string;
    description: string;
    description_ar?: string;
    icon?: string;
    is_published?: boolean;
    images?: string[] | null;
}

export interface Service {
    id: number;
    title: string;
    title_ar?: string;
    subtitle: string;
    subtitle_ar?: string;
    slug: string;
    slug_ar?: string;
    description: string;
    description_ar?: string;
    icon: string;
    is_published?: boolean;
    images?: string[] | null;
}

export interface FormData {
    fullName: string;
    email: string;
    message: string;
    phone: string;
}
interface PhoneNumberInputProps {
    value: string;
    onChange: (
        value: string,
        countryData: CountryData,
        formattedValue: string,
    ) => void;
}
export interface Project {
    id: number;
    title: string;
    title_ar: string;
    subtitle?: string;
    subtitle_ar?: string;
    description: string;
    description_ar: string;
    is_published: boolean;
    images: string[];
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}

export interface ProjectSection {
    heading: string;
    subheading: string;
    projects: Project[];
}
export interface Faq {
    id: number;
    question: string;
    answer: string;
    question_ar?: string;
    answer_ar?: string;
}
export interface AiCapability {
    id: number;
    icon: string;
    title: string;
    title_ar?: string;
    description: string;
    description_ar?: string;
}

export interface Section {
    id: number;
    title: string;
    title_ar: string;
    slug: string;
    type: string; // 'page', 'ai-feature', or 'whyus-feature'
    subtitle?: string;
    subtitle_ar?: string;
    description?: string;
    description_ar?: string;
    service_items?: string;
    service_items_ar?: string;
    icon?: string;
    img?: string;
}

export interface SectionData {
    hero?: Section;
    about?: Section;
    services?: Section;
    whyus?: Section;
    contact?: Section;
    projects?: Section;
    faq?: Section;
    ai?: Section;
}

type TechKey =
  | "fullstack"
  | "web"
  | "uiux"
  | "db"
  | "hosting"
  | "performance"
  | "deploy"
  | "it";

export interface NavItem {
    title: string;
    href: string;
}
  