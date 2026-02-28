import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';
const config = docsConfig['/call-tools/eod-report'];
export default function EodReportPage() {
    return (
        <DocViewer title={config.title} googleDocUrl={config.embedUrl} backHref="/call-tools" backLabel="Back to Call Tools" description={config.description} />
    );
}
