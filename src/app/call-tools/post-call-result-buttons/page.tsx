import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';
const config = docsConfig['/call-tools/post-call-result-buttons'];
export default function PostCallResultPage() {
    return (
        <DocViewer title={config.title} googleDocUrl={config.embedUrl} backHref="/call-tools" backLabel="Back to Call Tools" description={config.description} />
    );
}
