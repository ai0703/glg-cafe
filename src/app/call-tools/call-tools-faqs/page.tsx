import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';
const config = docsConfig['/call-tools/call-tools-faqs'];
export default function CallToolsFaqsPage() {
    return (
        <DocViewer title={config.title} googleDocUrl={config.embedUrl} backHref="/call-tools" backLabel="Back to Call Tools" description={config.description} />
    );
}
