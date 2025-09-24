-- Create restaurant registrations table
CREATE TABLE public.restaurant_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.restaurant_registrations ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (anyone can register)
CREATE POLICY "Anyone can register restaurants" 
ON public.restaurant_registrations 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admin select (for now, anyone can view - you'll want to restrict this to admins later)
CREATE POLICY "Anyone can view registrations" 
ON public.restaurant_registrations 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_restaurant_registrations_updated_at
  BEFORE UPDATE ON public.restaurant_registrations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();