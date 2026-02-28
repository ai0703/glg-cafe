import Link from 'next/link';
import { IMPORTANT_LINKS, NAV_ITEMS } from '@/lib/nav-config';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-obsidian)] text-[var(--color-ivory)] rounded-t-[4rem] relative z-20 mt-[-2rem] pt-20 pb-10 border-t border-[var(--color-border-subtle)]">
            <div className="container-luxury">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand & System Status */}
                    <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <Link href="/" className="inline-block link-lift mb-6">
                                <span className="font-serif text-3xl font-semibold leading-none tracking-tight text-white block">
                                    GLG <span className="italic text-[var(--color-champagne)]">Cafe</span>
                                </span>
                                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[var(--color-slate)] font-semibold mt-1 block">
                                    Global Luxury Group
                                </span>
                            </Link>
                            <p className="font-sans text-sm text-[var(--color-ivory)]/70 max-w-xs leading-relaxed mb-8">
                                The central operational hub connecting scripts, sales tools, and the GLG training methodology.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="font-mono text-[10px] text-white/80 tracking-widest uppercase">System Operational</span>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">

                        {/* Sections */}
                        <div>
                            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--color-champagne)] mb-6">
                                Modules
                            </h4>
                            <ul className="space-y-4">
                                {NAV_ITEMS.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="font-sans text-sm text-[var(--color-ivory)]/70 hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Important Links */}
                        <div>
                            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--color-champagne)] mb-6">
                                Direct Access
                            </h4>
                            <ul className="space-y-4">
                                {IMPORTANT_LINKS.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-sans text-sm text-[var(--color-ivory)]/70 hover:text-white transition-colors inline-flex items-center gap-1"
                                        >
                                            {item.title}
                                            <span className="text-[10px] opacity-50">↗</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact / Legal */}
                        <div>
                            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--color-champagne)] mb-6">
                                Support
                            </h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="mailto:support@globalluxurygroup.com" className="font-sans text-sm text-[var(--color-ivory)]/70 hover:text-white transition-colors">
                                        IT Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="font-sans text-sm text-[var(--color-ivory)]/70 hover:text-white transition-colors">
                                        Operations
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-[var(--color-ivory)]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-mono text-[10px] text-[var(--color-ivory)]/50 uppercase">
                        &copy; {currentYear} Global Luxury Group LLC. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] text-[var(--color-ivory)]/30 uppercase">
                            v2.0.0
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
