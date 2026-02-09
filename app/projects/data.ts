export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: 'cpp' | 'typescript' | 'ml' | 'professional';
  url?: string;
  status: 'completed' | 'in-progress' | 'planned';
  year?: string;
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
    title: 'Fraud Detection Engine',
    description: 'Open-source ML-based fraud detection system for fintech applications. Real-time transaction scoring with explainable AI.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'PostgreSQL'],
    category: 'ml',
    status: 'in-progress',
    year: '2026',
  },
  {
    title: 'Transaction Anomaly Detector',
    description: 'Streaming anomaly detection for financial transactions using isolation forests and autoencoders.',
    tech: ['Python', 'Kafka', 'scikit-learn'],
    category: 'ml',
    status: 'planned',
    year: '2026',
  },
  {
    title: 'Ray Tracer',
    description: 'A physically-based ray tracer built from scratch. Supports BVH acceleration, PBR materials, and area lights.',
    tech: ['C++', 'CMake', 'OpenMP'],
    category: 'cpp',
    status: 'completed',
    year: '2025',
  },
  {
    title: 'Memory Allocator',
    description: 'Custom memory allocator with pool, stack, and free-list strategies. Benchmarked against malloc/new.',
    tech: ['C++', 'CMake'],
    category: 'cpp',
    status: 'completed',
    year: '2025',
  },
  {
    title: 'React Form Builder',
    description: 'Drag-and-drop form builder with conditional logic, validation, and theme customization.',
    tech: ['React', 'TypeScript', 'Zustand', 'Tailwind'],
    category: 'typescript',
    status: 'completed',
    year: '2024',
  },
  {
    title: 'CLI Task Runner',
    description: 'A fast, concurrent task runner for monorepos. Topological sorting with parallel execution.',
    tech: ['TypeScript', 'Node.js'],
    category: 'typescript',
    status: 'completed',
    year: '2024',
  },
];

export const experiences: Experience[] = [
  {
    company: 'OTP Bank',
    role: 'Software Engineer',
    period: '2024 – Present',
    description: 'Building a cross-platform retail investment app with Flutter for Hungary\'s largest bank.',
    url: 'https://otpbank.hu',
    highlights: ['Flutter', 'Cross-platform', 'Fintech'],
  },
  {
    company: 'Typeform',
    role: 'Software Engineer',
    period: '2023 – 2024',
    description: 'Worked on a brand new marketing automation tool in a small, tight-knit team.',
    url: 'https://typeform.com',
    highlights: ['React', 'TypeScript', 'Marketing Automation'],
  },
  {
    company: 'Booking.com',
    role: 'Software Engineer',
    period: '2022 – 2023',
    description: 'Large-scale enterprise product. Deep focus on scalability, performance, accessibility, and observability.',
    url: 'https://booking.com',
    highlights: ['React', 'A/B Testing', 'Performance'],
  },
  {
    company: 'DEPT Agency',
    role: 'Software Engineer',
    period: '2020 – 2022',
    description: 'Global digital agency. Worked on Royal Ascot, TOTUM, SteamForged, Flowtech, and more.',
    url: 'https://deptagency.com',
    highlights: ['React', 'Next.js', 'Various Clients'],
  },
  {
    company: 'PokerStars',
    role: 'Software Engineer',
    period: '2019 – 2020',
    description: 'Worked on web products for the world\'s largest online poker platform.',
    url: 'https://pokerstars.com',
    highlights: ['React', 'Gaming', 'Web'],
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
  cpp: 'C++',
  typescript: 'TypeScript / React',
  ml: 'ML & Fintech',
  professional: 'Professional',
};

export const statusLabels: Record<Project['status'], string> = {
  completed: 'Shipped',
  'in-progress': 'Building',
  planned: 'Planned',
};
