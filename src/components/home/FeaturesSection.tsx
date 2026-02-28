'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { FileText, PhoneCall, RefreshCcw } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Typewriter state
    const [typedText, setTypedText] = useState('');
    const fullText = "Updating CRM Pipeline... > Syncing Deal Stages... > Lead Contacted.";

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section Entrance
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            });

            // Shuffler Animation (Card 1)
            const tl = gsap.timeline({ repeat: -1 });
            tl.to('.shuffler-1', { y: -10, scale: 0.95, opacity: 0.7, zIndex: 1, duration: 1, ease: 'power2.inOut', delay: 2 })
                .to('.shuffler-2', { y: 0, scale: 1, opacity: 1, zIndex: 3, duration: 1, ease: 'power2.inOut' }, '<')
                .to('.shuffler-3', { y: 10, scale: 0.95, opacity: 0.7, zIndex: 2, duration: 1, ease: 'power2.inOut' }, '<');

        }, sectionRef);

        // Typewriter effect (Card 2)
        let i = 0;
        const typingInterval = setInterval(() => {
            setTypedText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) i = 0; // loop
        }, 100);

        return () => {
            ctx.revert();
            clearInterval(typingInterval);
        };
    }, []);

    return (
        <section id="features" ref={sectionRef} className="section-padding bg-[var(--color-obsidian)] relative z-10">
            <div className="container-luxury">
                <div className="mb-16">
                    <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--color-champagne)] mb-4">
                        System Modules
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ivory)] font-semibold mb-6">
                        Interactive Functional Artifacts
                    </h2>
                    <div className="w-24 h-[2px] bg-[var(--color-champagne)]" />
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Card 1: Diagnostic Shuffler (University & Scripts) */}
                    <Link href="/university" className="feature-card section-card group flex flex-col justify-between min-h-[400px]">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <FileText className="w-6 h-6 text-[var(--color-champagne)]" />
                                <h3 className="font-sans font-semibold text-lg text-[var(--color-ivory)]">Scripts & Training</h3>
                            </div>
                            <p className="font-sans text-sm text-[var(--color-ivory)]/70 mb-8">
                                Master the precision sales cycle with certified GLG University resources.
                            </p>
                        </div>

                        <div className="relative h-40 w-full flex items-center justify-center">
                            <div className="shuffler-3 absolute w-[80%] bg-[var(--color-obsidian)] border border-[var(--color-border-subtle)] p-4 rounded-xl shadow-sm z-10 scale-95 translate-y-2 opacity-70">
                                <p className="font-sans text-xs font-medium text-[var(--color-ivory)]/50">GLG Objection Handling</p>
                            </div>
                            <div className="shuffler-2 absolute w-[85%] bg-[#1A1A1A] border border-[var(--color-border-subtle)] p-4 rounded-xl shadow-md z-20 scale-95 -translate-y-2 opacity-80">
                                <p className="font-sans text-xs font-medium text-[var(--color-ivory)]/80">2026 GPT Objections</p>
                            </div>
                            <div className="shuffler-1 absolute w-[90%] bg-[var(--color-slate)] border border-[var(--color-champagne)] p-4 rounded-xl shadow-lg z-30">
                                <p className="font-sans text-sm font-semibold text-[var(--color-ivory)]">2026 Original Script</p>
                                <div className="w-1/2 h-1 bg-[var(--color-champagne)] mt-2 rounded-full" />
                            </div>
                        </div>
                    </Link>

                    {/* Card 2: Telemetry Typewriter (Zoho CRM) */}
                    <Link href="/zoho" className="feature-card section-card group flex flex-col justify-between min-h-[400px]">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <RefreshCcw className="w-6 h-6 text-[var(--color-champagne)]" />
                                    <h3 className="font-sans font-semibold text-lg text-[var(--color-ivory)]">Zoho One CRM</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                    </span>
                                    <span className="font-sans text-[9px] uppercase tracking-wider text-[var(--color-ivory)]/50 font-semibold">Live Feed</span>
                                </div>
                            </div>
                            <p className="font-sans text-sm text-[var(--color-ivory)]/70 mb-8">
                                Deal stages, integrations, and CRM mastery for operational efficiency.
                            </p>
                        </div>

                        <div className="bg-[#0D0D12] rounded-xl p-5 h-40 border border-[#2A2A35] shadow-inner font-mono text-xs leading-relaxed overflow-hidden">
                            <p className="text-[#C9A84C] opacity-60 mb-2">// Server connection established</p>
                            <p className="text-white">
                                {typedText}<span className="inline-block w-2.5 h-3.5 bg-[var(--color-champagne)] animate-pulse ml-1 align-middle" />
                            </p>
                        </div>
                    </Link>

                    {/* Card 3: Cursor Protocol Scheduler (Call Tools) */}
                    <Link href="/call-tools" className="feature-card section-card group flex flex-col justify-between min-h-[400px]">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <PhoneCall className="w-6 h-6 text-[var(--color-champagne)]" />
                                <h3 className="font-sans font-semibold text-lg text-[var(--color-ivory)]">Call Tools Dialer</h3>
                            </div>
                            <p className="font-sans text-sm text-[var(--color-ivory)]/70 mb-8">
                                Power dialer instructions, mid-call status buttons, and EOD reporting.
                            </p>
                        </div>

                        <div className="bg-[var(--color-obsidian)] border border-[var(--color-border-subtle)] rounded-xl p-4 h-40">
                            <div className="grid grid-cols-5 gap-2 mb-4">
                                {['M', 'T', 'W', 'T', 'F'].map((day, index) => (
                                    <div key={index} className="text-center font-sans text-[10px] font-semibold text-[var(--color-ivory)]/50">{day}</div>
                                ))}
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {[...Array(10)].map((_, i) => (
                                    <div key={i} className={`h-6 rounded flex items-center justify-center text-[10px] font-mono
                    ${i === 2 || i === 7 ? 'bg-[var(--color-champagne)] text-[var(--color-obsidian)] shadow-md' : 'bg-[var(--color-slate)] border border-[var(--color-border-subtle)] text-transparent'}
                  `}>
                                        {i === 2 || i === 7 ? '14' : '.'}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
