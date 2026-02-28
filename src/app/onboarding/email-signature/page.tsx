import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';

const config = docsConfig['/onboarding/email-signature'];

export default function EmailSignaturePage() {
    return (
        <DocViewer
            title={config.title}
            googleDocUrl={config.embedUrl}
            backHref="/onboarding"
            backLabel="Back to Onboarding"
            description={config.description}
        />
    );
}
