import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { Globe, Menu, X } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { NavItem } from '../types/index';
import AppLogo from './app-logo';

// Lightweight navigation without heavy JSON imports
const getNavItems = (locale: string): NavItem[] => {
    if (locale === 'ar') {
        return [
            { title: 'الرئيسية', href: '#home' },
            { title: 'من نحن', href: '#about' },
            { title: 'خدماتنا', href: '#services' },
            { title: 'لماذا نحن', href: '#why-procode' },
            { title: 'تواصل معنا', href: '#contact' },
        ];
    }
    return [
        { title: 'Home', href: '#home' },
        { title: 'About', href: '#about' },
        { title: 'Services', href: '#services' },
        { title: 'Why Us', href: '#why-procode' },
        { title: 'Contact', href: '#contact' },
    ];
};

export function CustomNav() {
    const { locale } = usePage().props;
    const navItems = getNavItems(locale as string);

    const { url } = usePage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMenuClosing, setIsMenuClosing] = useState(false);
    const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

    const closeMobileMenu = () => {
        setIsMenuClosing(true);
        setTimeout(() => {
            setIsMobileMenuOpen(false);
            setShouldRenderMenu(false);
            setIsMenuClosing(false);
        }, 300); // Match animation duration
    };

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true);
        setShouldRenderMenu(true);
    };

    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    };

    const handleSmoothHashClick = (e: React.MouseEvent) => {
        const target = e.currentTarget as HTMLAnchorElement;
        const href = target.getAttribute('href');
        if (!href) return;
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.slice(1);
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, '', href);
                // Close mobile menu after navigating
                closeMobileMenu();
            }
        }
    };
    const targetLang = locale === 'ar' ? 'en' : 'ar';
    let route;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const href = typeof route === 'function' ? route('locale.switch', targetLang) : `/locale/${targetLang}`;

    return (
        <nav className="custom-nav" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <div className="custom-nav-container">
                <div className="custom-nav-inner">
                    <Link href="/" className="custom-nav-logo">
                        <AppLogo />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="desktop-nav">
                        {navItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                onClick={handleSmoothHashClick}
                                className={cn('desktop-nav-link', url === item.href && 'desktop-nav-link--active')}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="desktop-nav-actions">
                        {/*<button className="lang-switcher">*/}
                        {/*    <Globe className="mr-2 h-5 w-5" />*/}
                        {/*    AR*/}
                        {/*</button>*/}
                        <Link href={href} method="post" as="button" className="lang-switcher">
                            <Globe className="mr-2 h-5 w-5" />
                            {locale === 'ar' ? 'AR' : 'EN'}
                        </Link>
                        {/*TODO navigate to contact Us*/}
                        
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="mobile-menu-button-container">
                        <button
                            onClick={toggleMobileMenu}
                            className="mobile-menu-button"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">
                                {isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            </span>
                            {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            {shouldRenderMenu && (
                <div 
                    className={cn(
                        'mobile-menu-backdrop',
                        isMenuClosing ? 'backdrop-closing' : 'backdrop-opening'
                    )}
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu Panel */}
            {shouldRenderMenu && (
                <div 
                    className={cn(
                        'mobile-menu-panel',
                        isMenuClosing ? 'menu-closing' : 'menu-opening'
                    )}
                    id="mobile-menu"
                    data-locale={locale}
                    dir={locale === 'ar' ? 'rtl' : 'ltr'}
                >
                    <div className="mobile-menu-links">
                        {navItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                onClick={handleSmoothHashClick}
                                className={cn('mobile-nav-link', url === item.href && 'mobile-nav-link--active')}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <div className="mobile-menu-actions">
                        
                        <Link href={href} method="post" as="button" className="mobile-lang-switcher">
                            <Globe className="h-5 w-5" />
                            <span>{locale === 'ar' ? 'عربي' : 'English'}</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
