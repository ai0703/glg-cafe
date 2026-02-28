'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function PhilosophySection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal the large text on scroll
            gsap.from('.manifesto-text', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                },
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out',
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 md:py-48 bg-[#0D0D12] overflow-hidden">
            {/* Background dark organic texture / noise blend */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.15), transparent 70%)'
                }}
            />

            <div className="container-luxury relative z-10 w-full flex items-center justify-center text-center">
                <div className="max-w-5xl mx-auto">
                    <p className="manifesto-text font-sans text-sm md:text-base font-medium text-[#9A9080] mb-8 tracking-wide">
                        Most brokerages focus on: outdated volume tactics.
                    </p>
                    <div className="manifesto-text font-sans text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                        We focus on: <br />
                        <span className="font-serif italic text-[var(--color-champagne)] text-5xl md:text-7xl lg:text-[90px] font-normal leading-[1.1] block mt-4">
                            precision methodology.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
