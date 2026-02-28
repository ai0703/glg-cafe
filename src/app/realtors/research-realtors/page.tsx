import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';
const config = docsConfig['/realtors/research-realtors'];
export default function ResearchRealtorsPage() {
    return (
        <DocViewer title={config.title} googleDocUrl={config.embedUrl} backHref="/realtors" backLabel="Back to Realtors" description={config.description} />
    );
}
