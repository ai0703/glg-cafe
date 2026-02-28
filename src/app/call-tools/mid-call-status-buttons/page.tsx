import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';
const config = docsConfig['/call-tools/mid-call-status-buttons'];
export default function MidCallStatusPage() {
    return (
        <DocViewer title={config.title} googleDocUrl={config.embedUrl} backHref="/call-tools" backLabel="Back to Call Tools" description={config.description} />
    );
}
