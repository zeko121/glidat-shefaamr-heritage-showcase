// Optimized lazy-loading image utility
// Only import placeholder upfront, lazy load all other images on-demand
import placeholder from "@/assets/images/placeholder.png";

// Cache for loaded images to prevent duplicate imports
const imageCache: Record<string, string> = {};

// Map of image filenames to their dynamic import paths
const imageModules: Record<string, () => Promise<{ default: string }>> = {
  'glidat_shfaram_small.jpg': () => import('@/assets/images/glidat_shfaram_small.jpg'),
  'glidat_shfaram_medium.jpg': () => import('@/assets/images/glidat_shfaram_medium.jpg'),
  'glidat_shfaram_large.jpg': () => import('@/assets/images/glidat_shfaram_large.jpg'),
  'glidat_shfaram_cup_deluxe.jpg': () => import('@/assets/images/glidat_shfaram_cup_deluxe.jpg'),
  'glidat_shfaram_cup_small_TA.png': () => import('@/assets/images/glidat_shfaram_cup_small_TA.png'),
  'glidat_shfaram_cup_small.png': () => import('@/assets/images/glidat_shfaram_cup_small.png'),
  'glidat_shfaram_cup_big_TA.png': () => import('@/assets/images/glidat_shfaram_cup_big_TA.png'),
  'italian_icecream_small.jpg': () => import('@/assets/images/italian_icecream_small.jpg'),
  'italian_icecream_large.jpg': () => import('@/assets/images/italian_icecream_large.jpg'),
  'italian_icecream.jpg': () => import('@/assets/images/italian_icecream.jpg'),
  'american_icecream_medium.jpg': () => import('@/assets/images/american_icecream_medium.jpg'),
  'american_icecream_large.jpg': () => import('@/assets/images/american_icecream_large.jpg'),
  'burma_icecream.jpg': () => import('@/assets/images/burma_icecream.jpg'),
  'sahlab_lotus_icecream.png': () => import('@/assets/images/sahlab_lotus_icecream.png'),
  'icecream_knafeh_hot.jpg': () => import('@/assets/images/icecream_knafeh_hot.jpg'),
  'icecream_kataif_hot.jpg': () => import('@/assets/images/icecream_kataif_hot.jpg'),
  'sesame_icecream.jpg': () => import('@/assets/images/sesame_icecream.jpg'),
  'tiramisu_icecream.jpg': () => import('@/assets/images/tiramisu_icecream.jpg'),
  'layali_beirut_icecream.jpg': () => import('@/assets/images/layali_beirut_icecream.jpg'),
  'icecream_with_espresso.jpg': () => import('@/assets/images/icecream_with_espresso.jpg'),
  'dubai_chocolate_icecream.png': () => import('@/assets/images/dubai_chocolate_icecream.png'),
  'belgian_waffle.jpg': () => import('@/assets/images/belgian_waffle.jpg'),
  'belgian_waffle_icecream_whippedcream.jpg': () => import('@/assets/images/belgian_waffle_icecream_whippedcream.jpg'),
  'belgian_waffle_deluxe.jpg': () => import('@/assets/images/belgian_waffle_deluxe.jpg'),
  'french_crepe.jpg': () => import('@/assets/images/french_crepe.jpg'),
  'french_crepe_icecream_whippedcream.jpg': () => import('@/assets/images/french_crepe_icecream_whippedcream.jpg'),
  'croissant_with_icecream.jpg': () => import('@/assets/images/croissant_with_icecream.jpg'),
  'pancake_balls.jpg': () => import('@/assets/images/pancake_balls.jpg'),
  'cupcake_with_icecream.png': () => import('@/assets/images/cupcake_with_icecream.png'),
  'souffle_with_icecream.jpg': () => import('@/assets/images/souffle_with_icecream.jpg'),
  'cheesecake_strawberry.jpg': () => import('@/assets/images/cheesecake_strawberry.jpg'),
  'cheesecake_forestberries.jpg': () => import('@/assets/images/cheesecake_forestberries.jpg'),
  'cheesecake_orange.jpg': () => import('@/assets/images/cheesecake_orange.jpg'),
  'darkchoco_icecream_cake.jpg': () => import('@/assets/images/darkchoco_icecream_cake.jpg'),
  'nuts_pie.jpg': () => import('@/assets/images/nuts_pie.jpg'),
  'yogurt_small_fruitmix.jpg': () => import('@/assets/images/yogurt_small_fruitmix.jpg'),
  'yogurt_large_fruitmix.jpg': () => import('@/assets/images/yogurt_large_fruitmix.jpg'),
  'milkshake.jpg': () => import('@/assets/images/milkshake.jpg'),
  'orange_juice.jpg': () => import('@/assets/images/orange_juice.jpg'),
  'carrot_juice.jpg': () => import('@/assets/images/carrot_juice.jpg'),
  'apple_juice.jpg': () => import('@/assets/images/apple_juice.jpg'),
  'lemon_mint_juice.jpg': () => import('@/assets/images/lemon_mint_juice.jpg'),
  'noria_dessert.jpg': () => import('@/assets/images/noria_dessert.jpg'),
  'cappuccino.jpg': () => import('@/assets/images/cappuccino.jpg'),
  'espresso_short.jpg': () => import('@/assets/images/espresso_short.jpg'),
  'nescafe.jpg': () => import('@/assets/images/nescafe.jpg'),
  'hot_chocolate_milk.jpg': () => import('@/assets/images/hot_chocolate_milk.jpg'),
  'hot_chocolate.jpg': () => import('@/assets/images/hot_chocolate.jpg'),
  'tea.jpg': () => import('@/assets/images/tea.jpg'),
  'sahlab_hot.jpg': () => import('@/assets/images/sahlab_hot.jpg'),
  'sahlab_kinder_lotus.jpg': () => import('@/assets/images/sahlab_kinder_lotus.jpg'),
};

/**
 * Asynchronously loads a menu image with caching
 * Returns placeholder immediately, loads actual image in background
 * @param filename - The image filename from menu.json
 * @returns Promise resolving to the image URL
 */
export async function getMenuImage(filename: string): Promise<string> {
  // Return from cache if already loaded
  if (imageCache[filename]) {
    return imageCache[filename];
  }

  // Get the import function for this filename
  const importFn = imageModules[filename];

  if (!importFn) {
    console.warn(`Image not found: ${filename}, using placeholder`);
    return placeholder;
  }

  try {
    const module = await importFn();
    const imageUrl = module.default;
    imageCache[filename] = imageUrl;
    return imageUrl;
  } catch (error) {
    console.error(`Failed to load image: ${filename}`, error);
    return placeholder;
  }
}

/**
 * Synchronously returns placeholder for immediate rendering
 * Use this for initial render, then update with getMenuImage()
 */
export function getPlaceholderImage(): string {
  return placeholder;
}

/**
 * Preload images for a specific category to improve UX
 * Call this when user hovers over or selects a category
 * @param filenames - Array of image filenames to preload
 */
export async function preloadImages(filenames: string[]): Promise<void> {
  await Promise.all(filenames.map(filename => getMenuImage(filename)));
}
