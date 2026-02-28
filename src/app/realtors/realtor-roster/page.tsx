import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';
const config = docsConfig['/realtors/realtor-roster'];
export default function RealtorRosterPage() {
    return (
        <DocViewer title={config.title} googleDocUrl={config.embedUrl} backHref="/realtors" backLabel="Back to Realtors" description={config.description} />
    );
}
