import DocViewer from '@/components/DocViewer';
import { docsConfig } from '@/lib/docs-config';

const config = docsConfig['/university/role-play-outline'];

export default function RolePlayOutlinePage() {
    return (
        <DocViewer
            title={config.title}
            googleDocUrl={config.embedUrl}
            backHref="/university"
            backLabel="Back to GLG University"
            description={config.description}
        />
    );
}
