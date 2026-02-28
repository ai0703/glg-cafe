import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';

const config = docsConfig['/university/scripts/original-2026'];

export default function Original2026Page() {
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
