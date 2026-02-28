import Breadcrumb from '@/components/Breadcrumb';
import SectionCard from '@/components/SectionCard';

export default function CallToolsPage() {
    return (
        <div className="page-content">
            <div className="container-luxury py-8">
                <Breadcrumb backHref="/" backLabel="Back to Home" />
            </div>

            <div className="container-luxury pb-20">
                <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
                    Tools
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-text)] mb-3">
                    Call Tools Dialer
                </h1>
                <p className="font-sans text-sm text-[var(--color-text-muted)] mb-8">
                    Everything you need to use the Call Tools power dialer
                </p>
                <div className="w-24 h-[1px] bg-[var(--color-gold)] mb-12" />

                <div className="grid sm:grid-cols-2 gap-4">
                    <SectionCard
                        icon="⚡"
                        title="Power Dialer Instructions"
                        description="How to use the power dialer effectively"
                        href="/call-tools/power-dialer-instructions"
                    />
                    <SectionCard
                        icon="🔄"
                        title="Mid Call Status Buttons"
                        description="Guide to the mid-call status button options"
                        href="/call-tools/mid-call-status-buttons"
                    />
                    <SectionCard
                        icon="✅"
                        title="Post Call Result Buttons"
                        description="How to log results after each call"
                        href="/call-tools/post-call-result-buttons"
                    />
                    <SectionCard
                        icon="❓"
                        title="Call Tools FAQs"
                        description="Frequently asked questions about Call Tools"
                        href="/call-tools/call-tools-faqs"
                    />
                    <SectionCard
                        icon="📊"
                        title="EOD Report (Help Steve)"
                        description="End-of-day reporting instructions"
                        href="/call-tools/eod-report"
                    />
                </div>
            </div>
        </div>
    );
}
