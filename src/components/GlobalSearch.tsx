'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, ChevronRight } from 'lucide-react';
import { docsConfig } from '@/lib/docs-config';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function GlobalSearch() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // Convert docsConfig object to an array for searching
    const searchableDocs = Object.entries(docsConfig).map(([path, doc]) => ({
        path,
        ...doc,
    }));

    // Filter based on query
    const filteredDocs = searchableDocs.filter((doc) => {
        const searchStr = `${doc.title} ${doc.description || ''} ${doc.path}`.toLowerCase();
        return searchStr.includes(query.toLowerCase());
    });

    // Keyboard shortcut (Cmd/Ctrl + K) to open
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            setQuery(''); // Reset query on close
        }
    }, [isOpen]);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Search Trigger Button (Desktop / Mobile) */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 text-[var(--color-ivory)] hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Search documents"
            >
                <Search size={20} />
                <span className="hidden md:inline-block font-sans text-xs tracking-wider opacity-60 font-medium">
                    <span className="opacity-0 lg:opacity-100 transition-opacity">Search</span> <kbd className="font-mono bg-white/10 px-1.5 py-0.5 rounded ml-1 text-[10px]">⌘K</kbd>
                </span>
            </button>

            {/* Search Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 animate-in fade-in duration-200">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

                    <div className="relative w-full max-w-2xl bg-[var(--color-obsidian)] border border-[var(--color-border-subtle)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh] animate-in slide-in-from-bottom-4 duration-300">
                        {/* Search Input Header */}
                        <div className="flex items-center px-4 py-4 border-b border-[var(--color-border-subtle)] bg-[var(--color-slate)]">
                            <Search className="w-5 h-5 text-[var(--color-ivory)]/50 shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search scripts, documents, guides..."
                                className="flex-1 bg-transparent border-none outline-none text-[var(--color-ivory)] px-4 font-sans text-lg placeholder:text-[var(--color-ivory)]/30"
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 rounded bg-black/20 text-[var(--color-ivory)]/60 hover:text-[var(--color-champagne)] transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Search Results */}
                        <div className="overflow-y-auto flex-1 p-2">
                            {filteredDocs.length > 0 ? (
                                <div className="space-y-1">
                                    {filteredDocs.map((doc) => {
                                        // Extract category from path for display (e.g. /university/scripts -> University)
                                        const pathParts = doc.path.split('/').filter(Boolean);
                                        const category = pathParts[0]?.charAt(0).toUpperCase() + pathParts[0]?.slice(1) || 'General';

                                        return (
                                            <button
                                                key={doc.id}
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    router.push(doc.path);
                                                }}
                                                className="w-full text-left group flex items-center gap-4 p-4 rounded-xl hover:bg-[var(--color-slate)] transition-colors"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-[var(--color-obsidian)] border border-[var(--color-border-subtle)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-champagne)] transition-colors">
                                                    <FileText className="w-5 h-5 text-[var(--color-ivory)]/60 group-hover:text-[var(--color-champagne)] transition-colors" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="font-sans text-[10px] font-semibold tracking-wider uppercase text-[var(--color-champagne)]">
                                                            {category}
                                                        </span>
                                                    </div>
                                                    <h4 className="font-sans text-base font-medium text-[var(--color-ivory)] truncate">
                                                        {doc.title}
                                                    </h4>
                                                    {doc.description && (
                                                        <p className="font-sans text-xs text-[var(--color-ivory)]/50 truncate mt-1">
                                                            {doc.description}
                                                        </p>
                                                    )}
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-[var(--color-ivory)]/20 group-hover:text-[var(--color-champagne)] transition-colors shrink-0" />
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="px-6 py-12 text-center">
                                    <Search className="w-12 h-12 text-[var(--color-ivory)]/10 mx-auto mb-4" />
                                    <p className="font-sans text-[var(--color-ivory)]/60">No results found for "{query}"</p>
                                    <p className="font-sans text-xs text-[var(--color-ivory)]/40 mt-2">Try searching for "Objection Handling" or "Zoho"</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="px-4 py-3 bg-[var(--color-slate)] border-t border-[var(--color-border-subtle)] flex justify-between items-center shrink-0">
                            <span className="font-sans text-[10px] text-[var(--color-ivory)]/40">
                                Powered by GLG Internal Indexing
                            </span>
                            <div className="flex items-center gap-2 font-sans text-[10px] text-[var(--color-ivory)]/40">
                                <span>Navigate with arrows</span>
                                <span>Select with Enter</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
