import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';

const config = docsConfig['/university/call-process'];

export default function CallProcessPage() {
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
