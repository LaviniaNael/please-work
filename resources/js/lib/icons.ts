// Centralized icon registry to avoid importing entire lucide-react library
import { 
    CheckCircle, 
    Code, 
    Database, 
    Globe, 
    Layers, 
    PenTool, 
    Server, 
    Wind, 
    Briefcase, 
    Smartphone, 
    Monitor, 
    Palette, 
    ShoppingCart, 
    Users, 
    Zap, 
    Shield, 
    Settings, 
    Star, 
    Heart, 
    Target, 
    Rocket, 
    Award, 
    TrendingUp, 
    BarChart, 
    Clock, 
    Mail, 
    Phone, 
    MapPin,
    Cog,
    ChevronLeft,
    ChevronRight,
    X,
    Eye,
    Calendar,
    MoveRight,
    Facebook,
    Linkedin,
    Twitter,
    Youtube,
    Menu,
    Send
} from 'lucide-react';

// Create a registry of commonly used icons
export const iconRegistry = {
    CheckCircle,
    Code,
    Database,
    Globe,
    Layers,
    PenTool,
    Server,
    Wind,
    Briefcase,
    Smartphone,
    Monitor,
    Palette,
    ShoppingCart,
    Users,
    Zap,
    Shield,
    Settings,
    Star,
    Heart,
    Target,
    Rocket,
    Award,
    TrendingUp,
    BarChart,
    Clock,
    Mail,
    Phone,
    MapPin,
    Cog,
    ChevronLeft,
    ChevronRight,
    X,
    Eye,
    Calendar,
    MoveRight,
    Facebook,
    Linkedin,
    Twitter,
    Youtube,
    Menu,
    Send
} as const;

export type IconName = keyof typeof iconRegistry;

// Helper function to get icon component with fallback
export function getIcon(name: string | null | undefined, fallback: IconName = 'CheckCircle') {
    if (!name) return iconRegistry[fallback];
    
    // Clean the name first
    const cleanName = name.trim();
    
    // Try different variations of the icon name
    const variations = [
        cleanName,
        cleanName.toLowerCase(),
        cleanName.charAt(0).toUpperCase() + cleanName.slice(1).toLowerCase(),
        // Convert kebab-case to PascalCase
        cleanName.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(''),
        // Convert snake_case to PascalCase
        cleanName.split('_').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(''),
        // Handle specific backend mappings
        cleanName === 'code' ? 'Code' : '',
        cleanName === 'zap' ? 'Zap' : '',
        cleanName === 'palette' ? 'Palette' : '',
        cleanName === 'award' ? 'Award' : '',
        cleanName === 'shield' ? 'Shield' : '',
        cleanName === 'users' ? 'Users' : '',
        cleanName === 'clock' ? 'Clock' : '',
        cleanName === 'target' ? 'Target' : '',
        cleanName === 'rocket' ? 'Rocket' : ''
    ].filter(Boolean); // Remove empty strings
    
    for (const variation of variations) {
        if (variation in iconRegistry) {
            return iconRegistry[variation as IconName];
        }
    }
    
    return iconRegistry[fallback];
}
