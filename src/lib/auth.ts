import { supabase } from "@/integrations/supabase/client";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  is_active: boolean;
  created_at: string;
  last_login: string | null;
}

// Simple password hashing (in production, use bcrypt or similar)
const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

export const authService = {
  // Sign up a new admin user
  async signUp(name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> {
    try {
      const passwordHash = await hashPassword(password);
      
      const { error } = await supabase
        .from('admin_users')
        .insert([
          {
            name,
            email,
            password_hash: passwordHash,
            role: 'admin',
            is_active: true
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          return { success: false, error: 'Email already exists' };
        }
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: 'An unexpected error occurred' };
    }
  },

  // Sign in an admin user
  async signIn(email: string, password: string): Promise<{ success: boolean; user?: AdminUser; error?: string }> {
    try {
      const passwordHash = await hashPassword(password);
      
      const { data, error } = await supabase
        .from('admin_users')
        .select('id, name, email, role, is_active, created_at, last_login')
        .eq('email', email)
        .eq('password_hash', passwordHash)
        .eq('is_active', true)
        .single();

      if (error || !data) {
        return { success: false, error: 'Invalid email or password' };
      }

      // Update last login
      await supabase
        .from('admin_users')
        .update({ last_login: new Date().toISOString() })
        .eq('id', data.id);

      return { success: true, user: data };
    } catch (error) {
      return { success: false, error: 'An unexpected error occurred' };
    }
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return localStorage.getItem('admin_authenticated') === 'true';
  },

  // Set authentication state
  setAuthenticated(authenticated: boolean): void {
    if (authenticated) {
      localStorage.setItem('admin_authenticated', 'true');
    } else {
      localStorage.removeItem('admin_authenticated');
    }
  },

  // Logout
  logout(): void {
    localStorage.removeItem('admin_authenticated');
    localStorage.removeItem('admin_user');
  }
};
