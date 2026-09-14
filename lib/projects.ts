export type ProjectGroup = 'products' | 'extensions' | 'open-source'

export type ProjectLink = {
  label: string
  href: string
  /** Renders as the filled button with the Chrome logo. */
  chrome?: boolean
}

export type ProjectStat = {
  value: string
  label: string
  /** Renders the value in the accent colour. */
  accent?: boolean
}

export type Project = {
  id: string
  title: string
  /** The small mono line above the title. */
  label: string
  description: string
  /** Optional second paragraph, set apart in italics. */
  note?: string
  group: ProjectGroup
  stats: ProjectStat[]
  tech: string[]
  links: ProjectLink[]
  /** Shown on the home page. Everything shows on /work. */
  featured?: boolean
}

export const PROJECT_GROUP_TITLES: Record<ProjectGroup, string> = {
  products: 'Products',
  extensions: 'Browser extensions',
  'open-source': 'Open source',
}

export const PROJECT_GROUP_NOTES: Record<ProjectGroup, string> = {
  products: 'Live apps and protocols, built end to end.',
  extensions: 'Two extensions published in the Chrome Web Store.',
  'open-source': 'Plugins and patches that run on other people machines.',
}

export const projects: Project[] = [
  {
    id: 'basepaint-market',
    title: 'BasePaint Market',
    label: '2025 · LIVE ON BASE MAINNET',
    description:
      'The first specialized marketplace for trading complete BasePaint year collections on Base L2. Enables buying and selling complete sets (365 NFTs) in a single atomic transaction. Something impossible on OpenSea or Blur.',
    group: 'products',
    featured: true,
    stats: [
      { value: '3,767', label: 'Automated Tests' },
      { value: '9.0/10', label: 'Audit Score', accent: true },
      { value: '365', label: 'NFTs per Bundle' },
      { value: '0', label: 'Critical Issues' },
    ],
    tech: ['Solidity', 'Next.js 14', 'Node.js', 'PostgreSQL', 'RainbowKit', 'Base L2'],
    links: [{ label: 'Visit Site', href: 'https://basepaint.market' }],
  },
  {
    id: 'missing-days',
    title: 'Missing Days',
    label: '2026 · BASEPAINT YEAR 3 HACKATHON WINNER, FOR COLLECTORS',
    description:
      'A BasePaint profile for any address. Paste a wallet and see which daily canvases it owns and, the useful part, which days are missing from each set, which of those gaps are scarce, and what it painted. No wallet connect, no keys, no database: every number comes from BasePaint\u2019s public indexer.',
    note: 'Judges: \u201cClean, simple and instantly useful to visualize and complete a collection.\u201d Given away CC0 so it can fold back into BasePaint itself.',
    group: 'products',
    featured: true,
    stats: [
      { value: '1st', label: 'FOR COLLECTORS', accent: true },
      { value: '32', label: 'Projects Entered' },
      { value: '0', label: 'Backend or Keys' },
      { value: 'CC0', label: 'Public Good' },
    ],
    tech: ['Next.js 16', 'React 19', 'viem', 'Vercel', 'BasePaint Indexer', 'CC0'],
    links: [
      { label: 'Visit Site', href: 'https://missing-days.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/devacc8/missing-days' },
      { label: 'Winners Announcement', href: 'https://x.com/basepaint_xyz/status/2089728694852190523' },
    ],
  },
  {
    id: 'curfew',
    title: 'Curfew',
    label: '2026 · CHROME EXTENSION',
    description:
      'Daily time budgets for the distraction sites you choose, enforced at the network level. Relaxing a rule costs a solved puzzle instead of a click, so the decision stays deliberate. Local-only: no accounts, no analytics, and no network layer of its own.',
    group: 'extensions',
    featured: true,
    stats: [
      { value: '0', label: 'Network Requests' },
      { value: 'Per-site', label: 'Permissions', accent: true },
      { value: '200', label: 'Unit Tests' },
      { value: 'MIT', label: 'Open Source' },
    ],
    tech: ['TypeScript', 'Manifest V3', 'Chrome APIs', 'Declarative Net Request', 'No Tracking'],
    links: [
      { label: 'Install Extension', href: 'https://chromewebstore.google.com/detail/curfew/obnikdokealeimpbhfbjhpdmfcgbgcje', chrome: true },
      { label: 'GitHub', href: 'https://github.com/devacc8/curfew-extension' },
    ],
  },
  {
    id: 'skilltax',
    title: 'SkillTax',
    label: '2026 · LIVE ON SOLANA DEVNET',
    description:
      'Trustless peer-to-peer skill-wagering on Solana. Two players stake USDC on their own 1v1 match (Brawl Stars, Chess.com, Lichess), the result is auto-verified through the game\u2019s API, and an on-chain escrow pays the winner. No house, no screenshots, no disputes. The contract has no instruction to ban winning players.',
    group: 'products',
    stats: [
      { value: '95%', label: 'To Winner' },
      { value: '2s', label: 'Passkey Login', accent: true },
      { value: '3', label: 'Games Live' },
      { value: '0', label: 'SOL Needed' },
    ],
    tech: ['Solana', 'Anchor', 'Rust', 'Next.js 15', 'tRPC', 'Privy'],
    links: [{ label: 'Visit Site', href: 'https://skilltax.gg' }],
  },
  {
    id: 'coinpeek',
    title: 'CoinPeek',
    label: '2020-2026 · CHROME EXTENSION',
    description:
      'Chrome extension for instant crypto monitoring. Shows Bitcoin price right on the toolbar badge, plus ETH prices, network gas fees, and a smart BTC/ETH/USD converter. Automatic updates every 60 seconds with minimal resource usage.',
    group: 'extensions',
    stats: [
      { value: '50KB', label: 'Lightweight' },
      { value: '5', label: 'API Integrations', accent: true },
      { value: '3', label: 'Fallback APIs' },
      { value: 'MIT', label: 'Open Source' },
    ],
    tech: ['JavaScript', 'Chrome APIs', 'Manifest V3', 'CoinGecko', 'Owlracle', 'mempool.space'],
    links: [
      { label: 'Install Extension', href: 'https://chromewebstore.google.com/detail/coinpeek-bitcoin-price-ba/konlmcdlofpoegdkbjocdfojejmfkfbo', chrome: true },
      { label: 'GitHub', href: 'https://github.com/devacc8/coinpeek' },
    ],
  },
  {
    id: 'avaxlens',
    title: 'AvaxLens',
    label: '2026 · LIVE ON AVALANCHE',
    description:
      'Free smart contract analytics for Avalanche C-Chain. Paste any contract address and get instant insights: transaction volume, gas usage, function breakdown, and error logs. No signup, no API key, no SQL required.',
    group: 'products',
    stats: [
      { value: '$0', label: 'Free Forever' },
      { value: '10s', label: 'Time to Insights', accent: true },
      { value: 'ABI', label: 'Auto Decoding' },
      { value: '0', label: 'Setup Required' },
    ],
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Recharts', 'viem', 'Avalanche'],
    links: [
      { label: 'Visit Site', href: 'https://avaxlens.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/devacc8/avaxlens' },
    ],
  },
  {
    id: 'dsh-billing-badge',
    title: 'DSH Billing Badge',
    label: '2026 · DEEPSEEK HARNESS PLUGIN',
    description:
      'Billing season and account balance for the DeepSeek Harness web GUI. A pill in the composer statistics row, right after the native cache-hit reading, shows a peak or off-peak dot with a countdown to the next switch, and opens a panel that splits the balance into granted and topped up in the currency the API reports.',
    note: 'Listed in the community catalogs, including awesome-deepseekharness and the Harness Registry, which verified the manifest and the install.',
    group: 'open-source',
    stats: [
      { value: '30', label: 'Tests' },
      { value: '0', label: 'Dependencies', accent: true },
      { value: 'npm', label: 'Published' },
      { value: 'MIT', label: 'License' },
    ],
    tech: ['JavaScript', 'ESM', 'DeepSeek Harness', 'npm', 'MIT'],
    links: [
      { label: 'GitHub', href: 'https://github.com/devacc8/dsh-billing-badge' },
      { label: 'npm', href: 'https://www.npmjs.com/package/dsh-billing-badge' },
    ],
  },
  {
    id: 'dsh-file-explorer',
    title: 'DSH File Explorer',
    label: '2026 · DEEPSEEK HARNESS PLUGIN',
    description:
      'A vendored, hardened fork of a community file explorer for the DeepSeek Harness web GUI: a file tree with a tabbed preview, search, sorting and in-panel editing. Every path, reads included, is confined to a registered workspace root, and external programs launch argv-only.',
    group: 'open-source',
    stats: [
      { value: '41', label: 'Tests' },
      { value: '11', label: 'Patches', accent: true },
      { value: '3', label: 'Upstream PRs' },
      { value: 'MIT', label: 'License' },
    ],
    tech: ['TypeScript', 'DeepSeek Harness', 'Security hardening', 'MIT'],
    links: [{ label: 'GitHub', href: 'https://github.com/devacc8/dsh-file-explorer' }],
  },
]

export type TimelineEntry = {
  year: string
  title: string
  detail: string
}

export const timeline: TimelineEntry[] = [
  {
    year: '2020',
    title: 'PoolTogether Special Prize, ETHGlobal ETHOnline',
    detail: 'Meme coin pools for the no-loss lottery protocol, in Solidity against Chainlink.',
  },
  {
    year: '2025',
    title: 'BasePaint Market goes live on Base mainnet',
    detail: 'Atomic 365-NFT bundles, 3,767 automated tests, 9.0/10 audit score, built solo end to end.',
  },
  {
    year: '2026',
    title: 'Missing Days wins BasePaint Year 3, category FOR COLLECTORS',
    detail: 'Shipped inside the one-week window, released CC0 so it can fold back into BasePaint.',
  },
  {
    year: '2026',
    title: 'SkillTax MVP on Solana devnet',
    detail: 'USDC escrow, passkey onboarding, results verified through the game APIs. Colosseum Frontier.',
  },
  {
    year: '2026',
    title: 'CoinPeek and Curfew published in the Chrome Web Store',
    detail: 'Two extensions live, both MIT, both local-first by design.',
  },
  {
    year: '2026',
    title: 'DeepSeek Harness plugins published on npm',
    detail: 'A billing season chip and a hardened file explorer, listed in the community catalogs.',
  },
]

export type Capability = {
  title: string
  detail: string
  href: string
}

export const capabilities: Capability[] = [
  {
    title: 'Smart contracts',
    detail: 'EVM and Solana: escrow, marketplaces, approvals, audits, 3,700+ tests on one codebase.',
    href: '/ai-agent',
  },
  {
    title: 'Fullstack product work',
    detail: 'Next.js, Node, PostgreSQL, TypeScript. From the schema to the pixel, one person.',
    href: '/ai-chatbot',
  },
  {
    title: 'AI-assisted delivery',
    detail: 'Chatbots, agents and writing pipelines built on models, with the harness around them.',
    href: '/content-writing',
  },
]
