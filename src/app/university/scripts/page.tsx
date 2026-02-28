import Breadcrumb from '@/components/Breadcrumb';
import SectionCard from '@/components/SectionCard';

export default function ScriptsPage() {
    return (
        <div className="page-content">
            <div className="container-luxury py-8">
                <Breadcrumb backHref="/university" backLabel="Back to GLG University" />
            </div>

            <div className="container-luxury pb-20">
                <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
                    University → Scripts
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-text)] mb-3">
                    Scripts
                </h1>
                <p className="font-sans text-sm text-[var(--color-text-muted)] mb-8">
                    Sales scripts and objection handling resources
                </p>
                <div className="w-24 h-[1px] bg-[var(--color-gold)] mb-12" />

                <div className="grid sm:grid-cols-2 gap-4">
                    <SectionCard
                        icon="📄"
                        title="2026 Original Script"
                        description="The original 2026 sales script"
                        href="/university/scripts/original-2026"
                    />
                    <SectionCard
                        icon="🛡️"
                        title="GLG Objection Handling"
                        description="Objection handling techniques and rebuttals"
                        href="/university/scripts/objection-handling"
                    />
                    <SectionCard
                        icon="🤖"
                        title="2026 GPT Objection Handling"
                        description="AI-powered objection handling for 2026"
                        href="/university/scripts/gpt-objection-handling-2026"
                    />
                </div>
            </div>
        </div>
    );
}
