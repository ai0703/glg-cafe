'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '@/lib/nav-config';
import GlobalSearch from './GlobalSearch';

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Handle scroll to morph Header from transparent to glass
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check on initial load
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 py-4 md:py-6 ${isScrolled ? 'pt-4' : 'pt-6 md:pt-8'
                }`}
        >
            <div className={`mx-auto max-w-5xl rounded-full transition-all duration-500 ${isScrolled
                ? 'glass-header py-3 px-6 md:px-8 shadow-sm'
                : 'bg-transparent py-2 px-4 shadow-none'
                }`}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center link-lift relative z-50 flex-shrink-0">
                        <Image
                            src="/images/logo-glg.png"
                            alt="Global Luxury Group"
                            width={160}
                            height={48}
                            className="h-10 w-auto md:h-12 object-contain filter brightness-0 invert"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname.startsWith(item.href) && item.href !== '/';
                            const isHomeActive = pathname === '/' && item.href === '/';
                            const active = isActive || isHomeActive;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex flex-col items-center justify-center px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${active
                                        ? 'bg-[var(--color-champagne)] text-[var(--color-obsidian)]'
                                        : 'text-[var(--color-ivory)] hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-2 md:gap-4 z-50">
                        <GlobalSearch />

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 -mr-2 text-[var(--color-ivory)] relative"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 bg-[var(--color-obsidian)] border border-[var(--color-border-subtle)] rounded-2xl shadow-xl flex flex-col space-y-1 z-40">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname.startsWith(item.href) && item.href !== '/';
                        const isHomeActive = pathname === '/' && item.href === '/';
                        const active = isActive || isHomeActive;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center px-4 py-3 font-sans text-sm font-semibold uppercase tracking-[0.1em] rounded-xl transition-colors ${active
                                    ? 'text-[var(--color-obsidian)] bg-[var(--color-champagne)]'
                                    : 'text-[var(--color-ivory)] hover:bg-white/10'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </header>
    );
}
