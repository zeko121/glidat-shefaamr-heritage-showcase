-- Create public storage bucket for menu images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'menu-images',
  'menu-images',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
);

-- Allow public read access to menu images
CREATE POLICY "Public can view menu images"
ON storage.objects FOR SELECT
USING (bucket_id = 'menu-images');

-- Allow authenticated users to upload menu images (for admin purposes)
CREATE POLICY "Authenticated users can upload menu images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'menu-images' AND auth.role() = 'authenticated');