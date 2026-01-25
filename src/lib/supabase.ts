import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Comment {
  id: string;
  post_slug: string;
  author_name: string;
  author_email: string;
  content: string;
  approved: boolean;
  created_at: string;
}
