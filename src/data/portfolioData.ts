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
    title: 'ZINAT DOLLY — AI Sneaker Commercial Spec',
    category: 'FOOTWEAR',
    client: 'DOLLY Footwear Spec',
    duration: '0:15',
    year: '2026',
    videoSrc: '/assets/videos/zinat-dolly-sneaker.mp4',
    thumbnailSrc: '/assets/videos/zinat-dolly-sneaker.mp4',
    aspectRatio: '16/9',
    featured: true,
    description: 'Official commercial production engineered for the signature DOLLY sneaker. Hyper-clean white leather reflections, marble pedestal display, and broadcast-grade product cinematography.',
    tags: ['DOLLY Sneaker', 'Footwear AI', 'Commercial Motion', 'Luxury Footwear', 'Studio Original']
  },
  {
    id: 'zinat-lamborghini-commercial',
    title: 'ZINAT HYPERION — Lamborghini AI Commercial',
    category: 'AUTOMOTIVE',
    client: 'Lamborghini Supercar Spec',
    duration: '0:15',
    year: '2026',
    videoSrc: '/assets/videos/zinat-lamborghini-commercial.mp4',
    thumbnailSrc: '/assets/videos/zinat-lamborghini-commercial.mp4',
    aspectRatio: '16/9',
    featured: true,
    description: 'Cinematic AI automotive commercial capturing the red Lamborghini supercar in a luxury studio showroom, featuring razor-sharp metallic bodywork reflections and studio stage lighting.',
    tags: ['Automotive AI', 'Lamborghini Spec', 'Virtual Production', 'Raytracing', 'Hypercar Cinema']
  },
  {
    id: 'zinat-wristwatch-commercial',
    title: 'ZINAT VELOCITY — Luxury Wristwatch Commercial',
    category: 'PRODUCT COMMERCIALS',
    client: 'VELOCITY Horology Spec',
    duration: '0:15',
    year: '2026',
    videoSrc: '/assets/videos/zinat-wristwatch-commercial.mp4',
    thumbnailSrc: '/assets/videos/zinat-wristwatch-commercial.mp4',
    aspectRatio: '16/9',
    featured: true,
    description: 'High-precision luxury timepiece commercial featuring the VELOCITY chronograph with brushed steel bracelet, tachymeter bezel, atmospheric smoke effects, and cinematic macro lighting.',
    tags: ['Luxury Timepiece', 'Wristwatch Commercial', 'Macro Cinematography', 'Product Lighting', 'Studio Original']
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
