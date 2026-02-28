'use client';

import CompanyCalendar from '@/components/CompanyCalendar';

export default function CalendarSection() {
    return (
        <section className="bg-[var(--color-obsidian)] py-24 pb-32">
            <div className="container-luxury max-w-7xl">
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-1 lg:sticky lg:top-32">
                        <p className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--color-champagne)] mb-4">
                            Global Schedule
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ivory)] font-semibold mb-6">
                            Company Calendar
                        </h2>
                        <p className="font-sans text-lg text-[var(--color-ivory)]/70 mb-8">
                            Stay synchronized with the latest training sessions, company meetings, and core operational deadlines.
                        </p>
                        <div className="w-24 h-[2px] bg-[var(--color-champagne)] mb-8" />

                        {/* Premium Info Box */}
                        <div className="bg-[var(--color-slate)] border border-[var(--color-border-subtle)] rounded-2xl p-8 shadow-2xl relative overflow-hidden group hover:border-[var(--color-champagne)] transition-colors duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-champagne)]/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-[var(--color-champagne)]/10" />
                            <h3 className="font-sans font-semibold text-lg text-[var(--color-ivory)] mb-2 relative z-10">
                                Calendar Modifications
                            </h3>
                            <p className="font-sans text-sm text-[var(--color-ivory)]/60 mb-6 relative z-10">
                                Access is restricted. Consult with leadership or operations to request additions to the master schedule.
                            </p>
                            <a href="#" className="font-sans text-sm font-semibold text-[var(--color-champagne)] gold-accent inline-block relative z-10">
                                Request Access →
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-[2rem] overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-slate)] min-h-[500px] h-[70vh] max-h-[900px] relative z-10 transition-transform duration-500 hover:scale-[1.01]">
                        {/* The actual CompanyCalendar component handles the specific Google Embed */}
                        <CompanyCalendar />
                    </div>
                </div>
            </div>
        </section>
    );
}
