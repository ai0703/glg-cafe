import Link from 'next/link';

interface SectionCardProps {
    icon: string;
    title: string;
    description?: string;
    href: string;
}

export default function SectionCard({ icon, title, description, href }: SectionCardProps) {
    return (
        <Link href={href} className="section-card group">
            <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 mt-1">{icon}</span>
                <div>
                    <h3 className="font-serif text-xl font-semibold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-gold)] transition-colors">
                        {title}
                    </h3>
                    {description && (
                        <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}
