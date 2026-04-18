export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: 'ai' | 'mobile' | 'cpp' | 'web';
  url?: string;
  status: 'completed' | 'in-progress' | 'planned';
  year?: string;
  toy?: boolean;
  openSource?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  url?: string;
  highlights?: string[];
}

export interface Venture {
  name: string;
  description: string;
  url?: string;
  founded: string;
}

export const projects: Project[] = [
  {
    title: 'Pupil',
    description: 'AI-powered flashcard hub for deep learning. Generates, organizes, and adapts cards to your knowledge gaps with spaced repetition.',
    tech: ['Rust', 'React', 'Tauri', 'AI'],
    category: 'ai',
    status: 'in-progress',
    year: '2026',
    openSource: true,
    url: 'https://github.com/balazsotakomaiya/pupil',
  },
  {
    title: 'Vigil',
    description: 'TanStack Query for Flutter. Cached, stale-aware data fetching with a mixin-based API — no code generation, no boilerplate, no ceremony.',
    tech: ['Dart', 'Flutter'],
    category: 'mobile',
    status: 'in-progress',
    year: '2026',
    openSource: true,
  },
  {
    title: 'Sigil',
    description: 'Gorgeous avatars. Deterministic, multi-style, zero-dependency initial-based avatar generation library.',
    tech: ['TypeScript', 'React'],
    category: 'web',
    status: 'completed',
    year: '2026',
    openSource: true,
    url: 'https://sigil.otakomaiya.com',
  },
  {
    title: 'Octo',
    description: 'Consumer marketplace app for booking home services like cleaning, built with provider onboarding, payments, and marketplace operations end-to-end.',
    tech: ['Flutter', 'Stripe Connect', 'Laravel'],
    category: 'mobile',
    status: 'completed',
    year: '2026',
    url: 'https://octoapp.hu/',
  },
  {
    title: 'iOS Stopwatch Imitation',
    description: 'Playground React project replicating the native iOS stopwatch interaction and visual behavior.',
    tech: ['React', 'TypeScript'],
    category: 'web',
    status: 'completed',
    year: '2023',
    toy: true,
    url: 'https://github.com/balazsotakomaiya/playground/tree/main/stopwatch',
  },
  {
    title: 'Custom Vector (C++)',
    description: 'Playground implementation of a custom C++ vector with manual memory management, growth strategy, and iterator-style access.',
    tech: ['C++'],
    category: 'cpp',
    status: 'completed',
    year: '2025',
    toy: true,
    url: 'https://github.com/balazsotakomaiya/playground/tree/main/custom-vector',
  },
  {
    title: 'CSV Parser (C++)',
    description: 'Playground C++ CSV parser focused on correctness and lightweight parsing for structured tabular input.',
    tech: ['C++'],
    category: 'cpp',
    status: 'completed',
    year: '2025',
    toy: true,
    url: 'https://github.com/balazsotakomaiya/playground/tree/main/csv-parser',
  },
];

export const experiences: Experience[] = [
  {
    company: 'OTP Bank',
    role: 'Product Engineer',
    period: '2023 – Present',
    description: 'Building a cross-platform retail investment app with Flutter for Hungary\'s largest bank.',
    url: 'https://otpbank.hu',
    highlights: ['Flutter', 'Cross-platform', 'Fintech'],
  },
  {
    company: 'Typeform',
    role: 'Product Engineer',
    period: '2022 – 2023',
    description: 'Worked on a brand new marketing automation tool in a small, tight-knit team.',
    url: 'https://typeform.com',
    highlights: ['React', 'TypeScript', 'Marketing Automation'],
  },
  {
    company: 'PokerStars',
    role: 'Product Engineer',
    period: '2021 – 2022',
    description: 'Worked on web products for the world\'s largest online poker platform.',
    url: 'https://pokerstars.com',
    highlights: ['React', 'Gaming', 'Web'],
  },
  {
    company: 'Booking.com',
    role: 'Product Engineer',
    period: '2020 – 2021',
    description: 'Large-scale enterprise product. Deep focus on scalability, performance, accessibility, and observability.',
    url: 'https://booking.com',
    highlights: ['React', 'A/B Testing', 'Performance'],
  },
  {
    company: 'DEPT Agency',
    role: 'Product Engineer',
    period: '2018 – 2020',
    description: 'Global digital agency. Worked on Royal Ascot, TOTUM, SteamForged, Flowtech, and more.',
    url: 'https://deptagency.com',
    highlights: ['React', 'Next.js', 'Various Clients'],
  },
];

export const ventures: Venture[] = [
  {
    name: 'EZZRA',
    description: 'Men\'s Jewellery Design Studio. Recycled stainless steel, fashionable statement pieces. Thousands sold across Hungary, Austria, Slovakia & Romania.',
    url: 'https://ezzra.com',
    founded: '2022',
  },
];

export const categoryLabels: Record<Project['category'], string> = {
  ai: 'AI',
  mobile: 'Mobile',
  cpp: 'C++',
  web: 'Web',
};

export const statusLabels: Record<Project['status'], string> = {
  completed: 'Shipped',
  'in-progress': 'Building',
  planned: 'Planned',
};
