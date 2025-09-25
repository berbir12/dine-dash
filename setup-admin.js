// Quick setup script for admin user
// Run this in your Supabase SQL Editor

// First, make sure the tables exist (run the table creation SQL above first)

// Then create a test admin user
INSERT INTO public.admin_users (name, email, password_hash, role) 
VALUES (
  'Test Admin', 
  'admin@dinedash.shop', 
  'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f', 
  'admin'
);

-- Verify the user was created
SELECT * FROM public.admin_users;
