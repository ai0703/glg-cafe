'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Playfair_Display, Inter } from 'next/font/google';

export default function HeroSection() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Setup text items for staggered animation
            gsap.set('.hero-anim', { y: 40, opacity: 0 });

            gsap.to('.hero-anim', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2, // slight delay after page load
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full h-[100dvh] flex items-end overflow-hidden pb-24 md:pb-32">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 bg-[var(--color-obsidian)]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 mix-blend-screen"
                >
                    <source src="/videos/BG4-8.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)] via-[var(--color-obsidian)]/60 to-[var(--color-obsidian)]/40" />
            </div>

            <div className="container-luxury relative z-10 w-full pt-32">
                <div className="max-w-4xl">
                    <p className="hero-anim font-sans text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-champagne)] mb-4 md:mb-6 drop-shadow-md">
                        Global Luxury Group
                    </p>
                    <h1 className="hero-anim font-sans text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-ivory)] leading-[1.1] tracking-tight mb-2 drop-shadow-xl">
                        Luxury Real Estate meets
                    </h1>
                    <h2 className="hero-anim font-serif text-6xl md:text-8xl lg:text-[110px] font-light italic text-[var(--color-ivory)] leading-none mb-10 drop-shadow-2xl">
                        Precision Sales.
                    </h2>

                    <div className="hero-anim flex flex-wrap items-center gap-6">
                        <button
                            onClick={() => {
                                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn-luxury"
                        >
                            Enter The Cafe
                        </button>
                        <p className="font-sans text-sm text-[var(--color-ivory)]/80 max-w-sm border-l border-[var(--color-border-accent)] pl-6 py-1 drop-shadow-md">
                            Your central hub for scripts, training, and operational resources.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
