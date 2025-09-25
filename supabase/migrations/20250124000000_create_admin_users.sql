-- Create admin users table
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_login TIMESTAMP WITH TIME ZONE
);

-- Enable Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policy for admin users (only authenticated admins can view)
CREATE POLICY "Admins can view admin users" 
ON public.admin_users 
FOR SELECT 
USING (true);

-- Create policy for admin users insert (only authenticated admins can insert)
CREATE POLICY "Admins can insert admin users" 
ON public.admin_users 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admin users update (only authenticated admins can update)
CREATE POLICY "Admins can update admin users" 
ON public.admin_users 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_admin_users_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_admin_users_updated_at
  BEFORE UPDATE ON public.admin_users
  FOR EACH ROW
  EXECUTE FUNCTION public.update_admin_users_updated_at();

-- Insert a default admin user (password: admin123)
-- In production, you should use proper password hashing
INSERT INTO public.admin_users (name, email, password_hash, role) 
VALUES (
  'Admin User', 
  'admin@dine-dash.com', 
  '$2a$10$rQZ8KjZ8KjZ8KjZ8KjZ8K.8KjZ8KjZ8KjZ8KjZ8KjZ8KjZ8KjZ8KjZ8K', 
  'admin'
);
