import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BreadcrumbProps {
    backHref: string;
    backLabel: string;
}

export default function Breadcrumb({ backHref, backLabel }: BreadcrumbProps) {
    return (
        <div className="pt-24 md:pt-32 mb-4">
            <Link
                href={backHref}
                className="inline-flex items-center gap-2 font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                {backLabel}
            </Link>
        </div>
    );
}
