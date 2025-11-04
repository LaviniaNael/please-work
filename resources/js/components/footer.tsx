import type React from 'react';
import { Link } from '@inertiajs/react';
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'; // Social media icons
import AppLogo from './app-logo';

export function Footer() {
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
            }
        }
    };
    return (
        <footer className="bg-[#121212] px-6 py-12 text-gray-300 md:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Top section: Logo and Newsletter */}
                <div className="mb-8 flex flex-col items-center justify-between border-b border-gray-700 pb-8 md:flex-row">
                    <div className="mb-6 w-80 md:mb-0">
                        <AppLogo />
                        <p className="mt-2 tracking-wide text-gray-400">Hassle-Free Technologies</p>
                    </div>
                </div>

                {/* Middle section: Navigation Links */}
                <div className="pb-8 grid grid-cols-2 md:grid-cols-4">
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#home" onClick={handleSmoothHashClick} className="transition-colors hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" onClick={handleSmoothHashClick} className="transition-colors hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" onClick={handleSmoothHashClick} className="transition-colors hover:text-white">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" onClick={handleSmoothHashClick} className="transition-colors hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#why-procode" onClick={handleSmoothHashClick} className="transition-colors hover:text-white">
                                    Why ProCode
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" onClick={handleSmoothHashClick} className="transition-colors hover:text-white">
                                    Recent Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-semibold text-white">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="transition-colors hover:text-white">
                                <Facebook />
                            </a>
                            <a href="#" aria-label="Twitter" className="transition-colors hover:text-white">
                                <Twitter />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-white">
                                <Linkedin />
                            </a>
                            <a href="#" aria-label="YouTube" className="transition-colors hover:text-white">
                                <Youtube />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom section: Copyright */}
                <div className="text-center text-gray-200">&copy; {new Date().getFullYear()} A Digital Experience Crafted with Passion by<span className="inline-block mx-2 w-30"><AppLogo/></span></div>
            </div>
        </footer>
    );
}
