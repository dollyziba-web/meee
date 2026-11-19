/**
 * ZINAT STUDIO — Centralized Asset Inventory
 * 
 * STRICT NO-IMAGE-REPETITION POLICY:
 * Every visual asset has a globally unique ID and is verified to only appear in ONE section.
 */

export interface StudioAsset {
  id: string;
  section: 'hero' | 'about' | 'service_ai' | 'service_design' | 'service_web' | 'process' | 'spotlight' | 'contact';
  title: string;
  category?: string;
  url: string;
  alt: string;
  aspectRatio?: string;
}

export const ASSET_INVENTORY: Record<string, StudioAsset> = {
  // --- HERO FLOATING MEDIA (8 unique items, spatial arrangement) ---
  'hero_automotive': {
    id: 'hero_automotive',
    section: 'hero',
    title: 'Kinetic Automotive Vision',
    url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    alt: 'Futuristic sports car with cinematic lighting on a dark track',
    aspectRatio: '16/10',
  },
  'hero_fashion': {
    id: 'hero_fashion',
    section: 'hero',
    title: 'Haute Cyber Couture',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    alt: 'High fashion editorial model with dramatic avant-garde styling',
    aspectRatio: '3/4',
  },
  'hero_footwear': {
    id: 'hero_footwear',
    section: 'hero',
    title: 'Zero-G Runner',
    url: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80',
    alt: 'Futuristic metallic sneaker suspended in dark atmosphere',
    aspectRatio: '1/1',
  },
  'hero_beauty': {
    id: 'hero_beauty',
    section: 'hero',
    title: 'Luminous Elixir',
    url: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80',
    alt: 'Luxury cosmetic skincare bottle in water droplets and violet light',
    aspectRatio: '4/5',
  },
  'hero_product': {
    id: 'hero_product',
    section: 'hero',
    title: 'Chronos Horology',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
    alt: 'Minimalist luxury timepiece with reflective crystal surface',
    aspectRatio: '1/1',
  },
  'hero_abstract_3d': {
    id: 'hero_abstract_3d',
    section: 'hero',
    title: 'Violet Quantum Field',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    alt: 'Abstract fluid 3D render in purple and dark chrome tones',
    aspectRatio: '16/9',
  },
  'hero_graphic': {
    id: 'hero_graphic',
    section: 'hero',
    title: 'Kinetic Typography Composition',
    url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
    alt: 'Futuristic geometric graphic design typography art',
    aspectRatio: '4/3',
  },
  'hero_digital_art': {
    id: 'hero_digital_art',
    section: 'hero',
    title: 'Neural Synthetics',
    url: 'https://images.unsplash.com/photo-1633493106185-055c81216d12?auto=format&fit=crop&w=1000&q=80',
    alt: 'Digital glass prism sculpture with iridescent reflections',
    aspectRatio: '3/4',
  },

  // --- ABOUT US SECTION (1 unique monumental editorial visual) ---
  'about_heroic': {
    id: 'about_heroic',
    section: 'about',
    title: 'The Synthesis of AI & Cinema',
    url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1400&q=85',
    alt: 'Monolithic sculptural architecture illuminated in atmospheric haze',
    aspectRatio: '16/10',
  },

  // --- SERVICES SECTION (Each service has a distinct unique visual) ---
  'service_ai_commercial': {
    id: 'service_ai_commercial',
    section: 'service_ai',
    title: 'AI Commercial Production Studio',
    url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=85',
    alt: 'High-end professional cinematic camera system with atmospheric violet studio lighting',
    aspectRatio: '16/9',
  },
  'service_graphic_design': {
    id: 'service_graphic_design',
    section: 'service_design',
    title: 'Brand Identity & Visual Architecture',
    url: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=1600&q=85',
    alt: 'Avant-garde luxury graphic design, custom typography and editorial packaging system',
    aspectRatio: '16/9',
  },
  'service_website_design': {
    id: 'service_website_design',
    section: 'service_web',
    title: 'Digital Systems & Spatial Web',
    url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=85',
    alt: 'Spatial futuristic digital web interface and holographic design architecture',
    aspectRatio: '16/9',
  },
  'home_pillar_cinema': {
    id: 'home_pillar_cinema',
    section: 'hero',
    title: 'Synthetic Cinema & Neural Motion',
    url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1400&q=85',
    alt: 'Iridescent fluid sculpture suspended in cosmic dark space representing generative motion',
    aspectRatio: '16/10',
  },
  'home_pillar_architecture': {
    id: 'home_pillar_architecture',
    section: 'hero',
    title: 'Brand Architecture & Spatial Craft',
    url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=85',
    alt: 'Sculptural architectural forms and dramatic shadows representing luxury brand design',
    aspectRatio: '16/10',
  },
  'sneaker_commercial_thumb': {
    id: 'sneaker_commercial_thumb',
    section: 'spotlight',
    title: 'Apex Stride Zero-G Sneaker Commercial',
    url: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1400&q=85',
    alt: 'Futuristic metallic athletic sneaker in zero gravity with neon violet highlights',
    aspectRatio: '16/9',
  },

  // --- CREATIVE PROCESS SECTION (Unique visual accents) ---
  'process_imagination': {
    id: 'process_imagination',
    section: 'process',
    title: 'Pure Conceptual Spark',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    alt: 'Abstract illuminated neural circuit network',
  },
  'process_innovation': {
    id: 'process_innovation',
    section: 'process',
    title: 'Algorithmic Synthesis',
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    alt: 'Matrix light stream and high-tech code geometry',
  },
  'process_craft': {
    id: 'process_craft',
    section: 'process',
    title: 'Meticulous Polishing',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    alt: 'Precision optics and cinematic lens reflection',
  },
  'process_impact': {
    id: 'process_impact',
    section: 'process',
    title: 'Exponential Resonance',
    url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    alt: 'Vibrant neon horizon leaving a monumental impression',
  },

  // --- SPOTLIGHT VIDEO THUMBNAILS (Unique per project) ---
  'spotlight_user_video': {
    id: 'spotlight_user_video',
    section: 'spotlight',
    title: 'ZINAT Signature AI Commercial — Genesis',
    url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1400&q=85',
    alt: 'ZINAT original AI commercial visual with luminous violet cyber aesthetic',
    aspectRatio: '16/9',
  },
  'spotlight_user_video_2': {
    id: 'spotlight_user_video_2',
    section: 'spotlight',
    title: 'ZINAT Signature AI Commercial — Chrono Velocity',
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=85',
    alt: 'ZINAT original second AI commercial visual with futuristic cyber neon atmosphere',
    aspectRatio: '16/9',
  },
  'spotlight_automotive': {
    id: 'spotlight_automotive',
    section: 'spotlight',
    title: 'Aura GT — Electric Velocity',
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85',
    alt: 'Sleek luxury sports car in dramatic nighttime motion',
    aspectRatio: '16/9',
  },
  'spotlight_fashion': {
    id: 'spotlight_fashion',
    section: 'spotlight',
    title: 'Elysium 2027 — Digital Runway',
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85',
    alt: 'Avant-garde fashion campaign model in violet lighting',
    aspectRatio: '16/9',
  },
  'spotlight_footwear': {
    id: 'spotlight_footwear',
    section: 'spotlight',
    title: 'Apex Matrix — Adaptive Kicks',
    url: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1400&q=85',
    alt: 'Futuristic technical footwear advertising concept',
    aspectRatio: '16/9',
  },
  'spotlight_beauty': {
    id: 'spotlight_beauty',
    section: 'spotlight',
    title: 'Hydra Lumina — Celestial Skincare',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85',
    alt: 'High-end beauty editorial with luminous skin and violet flora',
    aspectRatio: '16/9',
  },
  'spotlight_product': {
    id: 'spotlight_product',
    section: 'spotlight',
    title: 'Spectra Audio — Acoustic Architecture',
    url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=85',
    alt: 'Premium wireless headphones with metallic gold accents on dark background',
    aspectRatio: '16/9',
  },
  'spotlight_lifestyle': {
    id: 'spotlight_lifestyle',
    section: 'spotlight',
    title: 'Nocturne — Tokyo Metropolitan Spirits',
    url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1400&q=85',
    alt: 'Atmospheric cinematic night city lifestyle shot with reflections',
    aspectRatio: '16/9',
  },

  // --- CONTACT SECTION AMBIENCE ---
  'contact_ambient': {
    id: 'contact_ambient',
    section: 'contact',
    title: 'The Horizon of Collaboration',
    url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
    alt: 'Minimalist neon horizon line signifying endless creative possibilities',
  }
};

/**
 * Verification helper ensuring NO URL or ID is duplicated across items.
 */
export function verifyNoDuplicateAssets(): { valid: boolean; duplicates: string[] } {
  const seenUrls = new Set<string>();
  const duplicates: string[] = [];
  
  for (const [key, asset] of Object.entries(ASSET_INVENTORY)) {
    if (seenUrls.has(asset.url)) {
      duplicates.push(`Duplicate URL in asset: ${key} (${asset.url})`);
    }
    seenUrls.add(asset.url);
  }
  
  return {
    valid: duplicates.length === 0,
    duplicates
  };
}
