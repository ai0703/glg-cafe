'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProtocolSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Note: implementing standard ScrollTrigger pinning for sticky cards
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card') as HTMLElement[];

            cards.forEach((card, i) => {
                if (i === 0) return; // First card is static

                gsap.to(cards[i - 1], {
                    scale: 0.9,
                    opacity: 0.3,
                    filter: 'blur(10px)',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true,
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const steps = [
        {
            num: '01',
            title: 'Foundation',
            desc: 'Complete the onboarding roadmap and internalize the GLG handbook.',
            graphic: (
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
                </svg>
            )
        },
        {
            num: '02',
            title: 'Mastery',
            desc: 'Learn the 2026 scripts, study the Jordan Belfort series, and roleplay objections.',
            graphic: (
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                    <path d="M10 50 Q 30 10, 50 50 T 90 50" fill="none" stroke="currentColor" strokeWidth="1" className="animate-[pulse_2s_ease-in-out_infinite]" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
            )
        },
        {
            num: '03',
            title: 'Execution',
            desc: 'Log into Call Tools and Zoho, hit the phones, and report your EOD results.',
            graphic: (
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
                    <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" className="animate-[bounce_2s_infinite]" />
                </svg>
            )
        }
    ];

    return (
        <section ref={sectionRef} className="relative bg-[var(--color-ivory)] py-24">
            <div className="container-luxury max-w-4xl">
                <div className="mb-20 text-center">
                    <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--color-champagne)] mb-4">
                        Methodology
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-obsidian)] font-semibold mb-6">
                        The Protocol Archive
                    </h2>
                </div>

                <div className="relative flex flex-col gap-[50vh] pb-[20vh]">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="protocol-card sticky top-32 w-full h-[60vh] min-h-[400px] bg-white border border-[var(--color-border-subtle)] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-[0_30px_60px_rgba(13,13,18,0.05)] overflow-hidden"
                        >
                            {/* Graphic BG */}
                            <div className="absolute -right-20 -bottom-20 w-96 h-96 text-[var(--color-obsidian)] pointer-events-none">
                                {step.graphic}
                            </div>

                            <div className="relative z-10 flex-1">
                                <span className="font-mono text-sm md:text-base font-medium text-[var(--color-champagne)] mb-4 block">
                                    [{step.num}]
                                </span>
                                <h3 className="font-serif text-4xl md:text-5xl font-semibold text-[var(--color-obsidian)] mb-6">
                                    {step.title}
                                </h3>
                                <p className="font-sans text-lg text-[var(--color-slate)] leading-relaxed max-w-md">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
