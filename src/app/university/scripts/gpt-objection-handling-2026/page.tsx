import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';

const config = docsConfig['/university/scripts/gpt-objection-handling-2026'];

export default function GptObjectionHandlingPage() {
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
