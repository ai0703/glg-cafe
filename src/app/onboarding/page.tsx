import Breadcrumb from '@/components/Breadcrumb';
import SectionCard from '@/components/SectionCard';

export default function OnboardingPage() {
    return (
        <div className="page-content">
            <div className="container-luxury py-8">
                <Breadcrumb backHref="/" backLabel="Back to Home" />
            </div>

            <div className="container-luxury pb-20">
                <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
                    Onboarding
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-text)] mb-3">
                    Onboarding Roadmap
                </h1>
                <p className="font-sans text-sm text-[var(--color-text-muted)] mb-8">
                    Your first 10 days at GLG
                </p>
                <div className="w-24 h-[1px] bg-[var(--color-gold)] mb-12" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SectionCard
                        icon="📖"
                        title="GLG Handbook"
                        description="Company policies, culture, and expectations."
                        href="/onboarding/glg-handbook"
                    />
                    <SectionCard
                        icon="🔖"
                        title="Bookmark Bar Setup"
                        description="How to set up your browser bookmarks for GLG."
                        href="/onboarding/bookmark-setup"
                    />
                    <SectionCard
                        icon="✉️"
                        title="Email Signature"
                        description="Standard email signature setup instructions."
                        href="/onboarding/email-signature"
                    />
                </div>
            </div>
        </div>
    );
}
