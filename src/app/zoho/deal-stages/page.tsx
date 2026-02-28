import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';
const config = docsConfig['/zoho/deal-stages'];
export default function DealStagesPage() {
    return (
        <DocViewer title={config.title} googleDocUrl={config.embedUrl} backHref="/zoho" backLabel="Back to Zoho CRM" description={config.description} />
    );
}
