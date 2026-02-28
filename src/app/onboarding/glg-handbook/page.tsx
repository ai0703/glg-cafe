import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';

const config = docsConfig['/onboarding/glg-handbook'];

export default function GlgHandbookPage() {
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
