import Breadcrumb from '@/components/Breadcrumb';
import { IMPORTANT_LINKS } from '@/lib/nav-config';
import { ExternalLink } from 'lucide-react';

export default function ImportantLinksPage() {
    return (
        <div className="page-content">
            <div className="container-luxury py-8">
                <Breadcrumb backHref="/" backLabel="Back to Home" />
            </div>

            <div className="container-luxury pb-20">
                <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-champagne)] mb-3">
                    Resources
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-ivory)] mb-3">
                    Important Links
                </h1>
                <p className="font-sans text-sm text-[var(--color-ivory)]/70 mb-8">
                    Quick reference links for commonly used tools
                </p>
                <div className="w-24 h-[1px] bg-[var(--color-champagne)] mb-12" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {IMPORTANT_LINKS.map((link) => (
                        <a
                            key={link.title}
                            href={'href' in link ? (link as any).href : (link as any).url}
                            target={(('href' in link ? (link as any).href : (link as any).url) || '').startsWith('/') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="bg-[var(--color-slate)] border border-[var(--color-border-subtle)] hover:border-[var(--color-champagne)] rounded-2xl p-6 group flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-2xl"
                        >
                            <div className="flex-1">
                                <h3 className="font-sans text-lg font-semibold text-[var(--color-ivory)] group-hover:text-[var(--color-champagne)] transition-colors">
                                    {link.title}
                                </h3>
                            </div>
                            <ExternalLink className="w-4 h-4 text-[var(--color-ivory)]/50 group-hover:text-[var(--color-champagne)] transition-colors flex-shrink-0" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
