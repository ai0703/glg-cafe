export interface DocConfig {
    id: string;
    title: string;
    editUrl: string;
    embedUrl: string;
    description?: string;
}

// Helper to convert Google Doc edit URL to embed URL
const toEmbed = (url: string) => url.replace('/edit?tab=t.', '/preview?tab=t.'); // Preview is cleaner than pub, but let's stick to preview if user was using edit links

// The links from the user's `doc links.txt`
export const docsConfig: Record<string, DocConfig> = {
    // --- ONBOARDING ---
    '/onboarding/glg-handbook': {
        id: 'glg-handbook',
        title: 'GLG Handbook',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.63hnsa4ss6av#heading=h.jyg8917wytjq',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.63hnsa4ss6av',
        description: 'Company policies, culture, and expectations.',
    },
    '/onboarding/bookmark-setup': {
        id: 'bookmark-setup',
        title: 'Bookmark Bar Setup',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.idav5ed0y1kf#heading=h.a4j0y3yim9si',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.idav5ed0y1kf',
        description: 'How to set up your browser bookmarks for GLG.',
    },
    '/onboarding/email-signature': {
        id: 'email-signature',
        title: 'Email Signature',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.yioha7ivkhaj',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.yioha7ivkhaj',
        description: 'Standard email signature setup instructions.',
    },

    // --- UNIVERSITY (SCRIPTS) ---
    '/university/scripts/original-2026': {
        id: 'original-2026',
        title: '2026 Original Script',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.mmon40rq1m6i#heading=h.2t7ovd8jclgy',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.mmon40rq1m6i',
    },
    '/university/scripts/objection-handling': {
        id: 'objection-handling',
        title: 'GLG Objection Handling',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.b523aapwey3k',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.b523aapwey3k',
    },
    '/university/scripts/gpt-objection-handling-2026': {
        id: 'gpt-objection-handling-2026',
        title: '2026 GPT Objection Handling',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.3z0duuf934rk',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.3z0duuf934rk',
    },

    // --- UNIVERSITY ---
    '/university/jordan-belfort-series': {
        id: 'jordan-belfort-series',
        title: 'Jordan Belfort Series',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.dawznle0tt4u',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.dawznle0tt4u',
    },
    '/university/gold-nuggets': {
        id: 'gold-nuggets',
        title: 'Gold Nuggets to Use',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.tre0mzxk234v',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.tre0mzxk234v',
    },
    '/university/start-to-finish': {
        id: 'start-to-finish',
        title: 'Start to Finish',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.rj7uii3f31zd',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.rj7uii3f31zd',
    },
    '/university/call-process': {
        id: 'call-process',
        title: 'Call Process',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.r1xlv74bfzmq',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.r1xlv74bfzmq',
    },
    '/university/success-principles': {
        id: 'success-principles',
        title: 'Success Principles',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.xzcmtxru0whe',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.xzcmtxru0whe',
    },
    '/university/role-play-outline': {
        id: 'role-play-outline',
        title: 'Roleplay Outline',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.0',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.0',
    },
    '/university/top-10-mistakes': {
        id: 'top-10-mistakes',
        title: 'Top 10 Mistakes',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.x9pwac3jy54t',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.x9pwac3jy54t',
    },

    // --- CALL TOOLS ---
    '/call-tools/power-dialer-instructions': {
        id: 'power-dialer-instructions',
        title: 'Power Dial Instruct',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.emhqr9y2ri8r',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.emhqr9y2ri8r',
    },
    '/call-tools/mid-call-status-buttons': {
        id: 'mid-call-status-buttons',
        title: 'Mid Call Status Buttons',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.w3nv8hripbkm',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.w3nv8hripbkm',
    },
    '/call-tools/post-call-result-buttons': {
        id: 'post-call-result-buttons',
        title: 'Post Call Result Buttons',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.ss8dw2d2np0f',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.ss8dw2d2np0f',
    },
    '/call-tools/call-tools-faqs': {
        id: 'call-tools-faqs',
        title: 'CallTools FAQs',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.k9loekqbh1ur',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.k9loekqbh1ur',
    },
    '/call-tools/eod-report': {
        id: 'eod-report',
        title: 'Help Steve: EOD Link',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.ycrn1kdvuz3d',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.ycrn1kdvuz3d',
    },

    // --- ZOHO ---
    '/zoho/deal-stages': {
        id: 'deal-stages',
        title: 'Deal Stages',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.vhd0hprh1rw7',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.vhd0hprh1rw7',
    },
    '/zoho/zoho-apps': {
        id: 'zoho-apps',
        title: 'Your Zoho Apps',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.d40ti9ogka2',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.d40ti9ogka2',
    },
    '/zoho/zoho-faqs': {
        id: 'zoho-faqs',
        title: 'Zoho One CRM FAQs',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.vczqujblthu5',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.vczqujblthu5',
    },

    // --- REALTORS ---
    '/realtors/research-realtors': {
        id: 'research-realtors',
        title: 'Research Realtors',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.y1jyrfgzif6x',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.y1jyrfgzif6x',
    },
    '/realtors/realtor-qa': {
        id: 'realtor-qa',
        title: 'Realtor Q&A',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.dzupg1tpmzg7',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.dzupg1tpmzg7',
    },
    '/realtors/realtor-roster': {
        id: 'realtor-roster',
        title: 'Realtor Roster',
        editUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/edit?tab=t.l29ofsigtgld',
        embedUrl: 'https://docs.google.com/document/d/11J9UxgtgdQ_kb0_1itIjZRRhAtuTIaIoeShxc_a8JCc/preview?tab=t.l29ofsigtgld',
    },
};
