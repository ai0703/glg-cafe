import Breadcrumb from '@/components/Breadcrumb';
import SectionCard from '@/components/SectionCard';

export default function ZohoPage() {
    return (
        <div className="page-content">
            <div className="container-luxury py-8">
                <Breadcrumb backHref="/" backLabel="Back to Home" />
            </div>

            <div className="container-luxury pb-20">
                <p className="font-sans text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">
                    CRM
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-[var(--color-text)] mb-3">
                    Zoho One CRM
                </h1>
                <p className="font-sans text-sm text-[var(--color-text-muted)] mb-8">
                    CRM reference for deal stages, apps, and FAQs
                </p>
                <div className="w-24 h-[1px] bg-[var(--color-gold)] mb-12" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SectionCard
                        icon="📈"
                        title="Deal Stages"
                        description="Pipeline deal stage definitions"
                        href="/zoho/deal-stages"
                    />
                    <SectionCard
                        icon="📱"
                        title="Your Zoho Apps"
                        description="Overview of Zoho apps used by GLG"
                        href="/zoho/zoho-apps"
                    />
                    <SectionCard
                        icon="❓"
                        title="Zoho One CRM FAQ"
                        description="Frequently asked questions about Zoho CRM"
                        href="/zoho/zoho-faqs"
                    />
                </div>
            </div>
        </div>
    );
}
