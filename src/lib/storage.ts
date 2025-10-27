import { supabase } from "@/integrations/supabase/client";

/**
 * Get the public URL for a menu image from Supabase Storage
 * @param filename - The image filename (e.g., "גלידת_שפרעם_קטן.jpg")
 * @returns The public CDN URL for the image
 */
export function getMenuImageUrl(filename: string): string {
  const { data } = supabase.storage
    .from('menu-images')
    .getPublicUrl(filename);
  
  return data.publicUrl;
}

/**
 * Get the placeholder image URL as fallback
 */
export function getPlaceholderUrl(): string {
  return `${import.meta.env.BASE_URL}placeholder.png`;
}
