import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';
const config = docsConfig['/call-tools/power-dialer-instructions'];
export default function PowerDialerPage() {
    return (
        <DocViewer title={config.title} googleDocUrl={config.embedUrl} backHref="/call-tools" backLabel="Back to Call Tools" description={config.description} />
    );
}
