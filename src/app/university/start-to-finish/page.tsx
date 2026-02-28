import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';

const config = docsConfig['/university/start-to-finish'];

export default function StartToFinishPage() {
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
