import { ASSET_INVENTORY } from './assetsInventory';

export type VideoCategory = 
  | 'ALL WORK'
  | '2D ANIMATION'
  | 'AUTOMOTIVE'
  | 'FOOTWEAR'
  | 'PRODUCT COMMERCIALS';

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<VideoCategory, 'ALL WORK'>;
  client: string;
  duration: string;
  year: string;
  videoSrc: string;
  thumbnailSrc: string;
  aspectRatio: '16/9' | '9/16' | '4/5';
  featured?: boolean;
  description: string;
  tags: string[];
}

export const PORTFOLIO_CATEGORIES: VideoCategory[] = [
  'ALL WORK',
  '2D ANIMATION',
  'AUTOMOTIVE',
  'FOOTWEAR',
  'PRODUCT COMMERCIALS',
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'zinat-talking-fruit',
    title: 'AI Talking Fruit Video',
    category: 'PRODUCT COMMERCIALS',
    client: 'ZINAT Studio Original',
    duration: '0:15',
    year: '2026',
    videoSrc: '/assets/videos/zinat-visual-spec-1.mp4',
    thumbnailSrc: '/assets/videos/zinat-visual-spec-1.mp4',
    aspectRatio: '9/16',
    featured: true,
    description: 'Dynamic AI character production featuring expressive talking fruit characters in professional attire, showcasing photorealistic facial lip-sync and comedic narrative timing.',
    tags: ['AI Talking Fruit', 'Character Animation', 'AI Commercial', 'Lip Sync', 'Studio Original']
  },
  {
    id: 'zinat-baby-podcast',
    title: 'AI Baby Podcast',
    category: 'PRODUCT COMMERCIALS',
    client: 'ZINAT Studio Original',
    duration: '0:15',
    year: '2026',
    videoSrc: '/assets/videos/zinat-visual-spec-2.mp4',
    thumbnailSrc: '/assets/videos/zinat-visual-spec-2.mp4',
    aspectRatio: '9/16',
    featured: true,
    description: 'Hyper-realistic AI podcast production featuring an articulate toddler host with lifelike facial expressions, natural conversational gestures, and studio broadcast acoustics.',
    tags: ['AI Baby Podcast', 'Synthetic Humans', 'Neural Voice', 'Studio Podcast', 'Studio Original']
  },
  {
    id: 'zinat-ai-miniature',
    title: 'AI Miniature Video',
    category: 'PRODUCT COMMERCIALS',
    client: 'ZINAT Studio Original',
    duration: '0:15',
    year: '2026',
    videoSrc: '/assets/videos/zinat-ai-miniature.mp4',
    thumbnailSrc: '/assets/videos/zinat-ai-miniature.mp4',
    aspectRatio: '9/16',
    featured: true,
    description: 'Intricate tilt-shift miniature construction world brought to life through synthetic AI generation, showing tiny workers, excavators, and mechanical movement in high detail.',
    tags: ['AI Miniature', 'Tilt-Shift Simulation', 'Miniature World', 'Procedural Motion', 'Studio Original']
  },
  {
    id: 'zinat-stickman-animation',
    title: 'ZINAT VECTOR — 2D Stickman Action Narrative',
    category: '2D ANIMATION',
    client: 'ZINAT Animation Lab',
    duration: '0:15',
    year: '2026',
    videoSrc: '/assets/videos/ziba-stickman-animation.mp4',
    thumbnailSrc: '/assets/videos/ziba-stickman-animation.mp4',
    aspectRatio: '16/9',
    featured: true,
    description: 'Dynamic 2D stickman animation showcase exploring kinetic frame-by-frame timing, fluid martial action choreography, and expressive minimalist character motion.',
    tags: ['2D Animation', 'Stickman Action', 'Choreography', 'Kinetic Motion', 'Studio Original']
  },
  {
    id: 'zinat-sneaker-commercial',
    title: 'ZINAT STRIDE — AI Sneaker Commercial Spec',
    category: 'FOOTWEAR',
    client: 'Apex Kinetix Footwear',
    duration: '0:15',
    year: '2026',
    videoSrc: '/assets/videos/ziba-sneaker-commercial.mp4',
    thumbnailSrc: ASSET_INVENTORY['sneaker_commercial_thumb'] ? ASSET_INVENTORY['sneaker_commercial_thumb'].url : 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1400&q=85',
    aspectRatio: '16/9',
    featured: true,
    description: 'Dynamic commercial production engineered for next-generation performance footwear. High-velocity camera arcs, aerodynamic textile synthesis, and hyper-kinetic sound design.',
    tags: ['Sneaker Spec', 'AI Commercial', 'Footwear Motion', 'Hyper-Kinetic', 'Studio Original']
  },
  {
    id: 'zinat-lamborghini-commercial',
    title: 'ZINAT HYPERION — Lamborghini AI Commercial',
    category: 'AUTOMOTIVE',
    client: 'Lamborghini Supercar Spec',
    duration: '0:15',
    year: '2026',
    videoSrc: '/assets/videos/ziba-lamborghini-commercial.mp4',
    thumbnailSrc: ASSET_INVENTORY['spotlight_automotive'].url,
    aspectRatio: '16/9',
    featured: true,
    description: 'Cinematic AI automotive commercial capturing nocturnal aerodynamic flows, razor-sharp metallic bodywork reflections, and instant hypercar acceleration across neon superhighways.',
    tags: ['Automotive AI', 'Lamborghini Spec', 'Virtual Production', 'Raytracing', 'Hypercar Sound']
  },
  {
    id: 'zinat-genesis-commercial',
    title: 'ZINAT GENESIS — The AI Creative Frontier',
    category: 'PRODUCT COMMERCIALS',
    client: 'ZINAT Studio Original',
    duration: '0:15',
    year: '2026',
    videoSrc: '/assets/videos/ziba-ai-commercial-1.mp4',
    thumbnailSrc: ASSET_INVENTORY['spotlight_user_video'].url,
    aspectRatio: '16/9',
    featured: true,
    description: 'Our proprietary studio AI commercial showcasing the boundary between synthetic motion, cinematic storytelling, and photorealistic rendering.',
    tags: ['AI Direction', 'Neural Rendering', 'Cinematic Sound', 'Studio Original']
  },
  {
    id: 'zinat-chrono-velocity',
    title: 'ZINAT CHRONO — Velocity of Perception',
    category: 'PRODUCT COMMERCIALS',
    client: 'ZINAT Studio Original',
    duration: '0:15',
    year: '2026',
    videoSrc: '/assets/videos/ziba-ai-commercial-2.mp4',
    thumbnailSrc: ASSET_INVENTORY['spotlight_user_video_2'].url,
    aspectRatio: '16/9',
    featured: true,
    description: 'A second proprietary AI commercial production exploring hyper-speed temporal warping, metallic reflections, and synthetic commercial art direction.',
    tags: ['AI Production', 'Temporal Synthesis', 'Motion Spec', 'Studio Original']
  }
];
