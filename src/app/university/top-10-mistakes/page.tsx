import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';

const config = docsConfig['/university/top-10-mistakes'];

export default function Top10MistakesPage() {
    return (
        <DocViewer
            title={config.title}
            googleDocUrl={config.embedUrl}
            backHref="/university"
            backLabel="Back to GLG University"
            description={config.description}
        />
    );
}
