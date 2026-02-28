import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';

const config = docsConfig['/university/jordan-belfort-series'];

export default function JordanBelfortPage() {
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
