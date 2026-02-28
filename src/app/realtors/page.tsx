import Breadcrumb from '@/components/Breadcrumb';
import SectionCard from '@/components/SectionCard';

export default function RealtorsPage() {
    return (
        <div className="page-content">
            <div className="container-luxury py-8">
                <Breadcrumb backHref="/" backLabel="Back to Home" />
            </div>

            <div className="container-luxury pb-20">
                <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
                    Realtors
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-text)] mb-3">
                    Realtors
                </h1>
                <p className="font-sans text-sm text-[var(--color-text-muted)] mb-8">
                    Resources for working with realtors
                </p>
                <div className="w-24 h-[1px] bg-[var(--color-gold)] mb-12" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SectionCard
                        icon="🔍"
                        title="Research Realtors"
                        description="How to research and vet realtors"
                        href="/realtors/research-realtors"
                    />
                    <SectionCard
                        icon="💬"
                        title="Realtor Q&A"
                        description="Common questions and answers for realtors"
                        href="/realtors/realtor-qa"
                    />
                    <SectionCard
                        icon="📋"
                        title="Realtor Roster"
                        description="Current realtor partner directory"
                        href="/realtors/realtor-roster"
                    />
                </div>
            </div>
        </div>
    );
}
