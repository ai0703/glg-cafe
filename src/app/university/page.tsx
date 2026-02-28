import Breadcrumb from '@/components/Breadcrumb';
import SectionCard from '@/components/SectionCard';

export default function UniversityPage() {
    return (
        <div className="page-content">
            <div className="container-luxury py-8">
                <Breadcrumb backHref="/" backLabel="Back to Home" />
            </div>

            <div className="container-luxury pb-20">
                <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
                    Training
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-text)] mb-3">
                    GLG University
                </h1>
                <p className="font-sans text-sm text-[var(--color-text-muted)] mb-8">
                    Scripts, training, and sales mastery resources
                </p>
                <div className="w-24 h-[1px] bg-[var(--color-gold)] mb-12" />

                <div className="grid sm:grid-cols-2 gap-4">
                    <SectionCard
                        icon="📝"
                        title="Scripts"
                        description="Sales scripts and objection handling"
                        href="/university/scripts"
                    />
                    <SectionCard
                        icon="🎬"
                        title="Jordan Belfort Series"
                        description="Sales mastery video series"
                        href="/university/jordan-belfort-series"
                    />
                    <SectionCard
                        icon="💡"
                        title="Gold Nuggets to Use"
                        description="Key talking points and sales tips"
                        href="/university/gold-nuggets"
                    />
                    <SectionCard
                        icon="🏁"
                        title="Start to Finish"
                        description="Complete walkthrough of the sales cycle"
                        href="/university/start-to-finish"
                    />
                    <SectionCard
                        icon="📞"
                        title="Call Process"
                        description="Step-by-step call process guide"
                        href="/university/call-process"
                    />
                    <SectionCard
                        icon="🏆"
                        title="Success Principles"
                        description="Core principles for success at GLG"
                        href="/university/success-principles"
                    />
                    <SectionCard
                        icon="🎭"
                        title="Role Play Outline"
                        description="Sales roleplay scenarios and outlines"
                        href="/university/role-play-outline"
                    />
                    <SectionCard
                        icon="⚠️"
                        title="Top 10 Mistakes"
                        description="Common mistakes to avoid in luxury sales"
                        href="/university/top-10-mistakes"
                    />
                </div>
            </div>
        </div>
    );
}
