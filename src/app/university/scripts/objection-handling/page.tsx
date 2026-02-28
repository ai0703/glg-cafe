import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';

const config = docsConfig['/university/scripts/objection-handling'];

export default function ObjectionHandlingPage() {
    return (
        <DocViewer
            title={config.title}
            googleDocUrl={config.embedUrl}
            backHref="/university/scripts"
            backLabel="Back to Scripts"
            description={config.description}
        />
    );
}
