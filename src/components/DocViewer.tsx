'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface DocViewerProps {
    title: string;
    googleDocUrl: string;
    backHref: string;
    backLabel: string;
    description?: string;
}

export default function DocViewer({ title, googleDocUrl, backHref, backLabel, description }: DocViewerProps) {
    return (
        <div className="page-content">
            {/* Breadcrumb / Back Button */}
            <div className="container-luxury py-6">
                <Link
                    href={backHref}
                    className="inline-flex items-center gap-2 font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    {backLabel}
                </Link>
            </div>

            {/* Title Bar */}
            <div className="container-luxury pb-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-2">
                            {title}
                        </h1>
                        {description && (
                            <p className="font-sans text-sm text-[var(--color-text-muted)]">{description}</p>
                        )}
                    </div>
                    <a
                        href={googleDocUrl.replace('/pub?embedded=true', '/edit')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Open in Google Docs
                    </a>
                </div>
                <div className="w-full h-[1px] bg-[var(--color-border-gold)] mt-4" />
            </div>

            {/* Iframe Container */}
            <div className="container-luxury pb-12">
                <div
                    className="relative w-full rounded overflow-hidden"
                    style={{
                        border: '1px solid rgba(201, 168, 76, 0.4)',
                        background: '#111111',
                    }}
                >
                    {/* Loading shimmer */}
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-8 h-8 border-2 border-[var(--color-gold)] border-t-transparent rounded-full animate-spin" />
                            <span className="font-sans text-xs text-[var(--color-text-muted)] tracking-wider uppercase">Loading document…</span>
                        </div>
                    </div>

                    <iframe
                        src={googleDocUrl}
                        title={title}
                        className="relative z-10 w-full bg-white"
                        style={{
                            height: 'calc(100vh - 200px)',
                            minHeight: '500px',
                        }}
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
}
