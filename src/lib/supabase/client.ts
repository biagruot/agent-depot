import { createBrowserClient } from '@supabase/ssr'

// Create a null client that doesn't trigger Supabase validation
function createNullClient(): any {
  return {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
      signInWithOAuth: async () => ({ data: { provider: null, url: null }, error: new Error('Supabase not configured') }),
      signOut: async () => ({ error: null }),
      onAuthStateChange: () => {
        return {
          data: { subscription: { unsubscribe: () => {} } }
        };
      },
    },
    from: (table: string) => ({
      select: () => ({
        eq: () => ({
          single: async () => ({ data: null, error: new Error('Supabase not configured') }),
        }),
        order: () => ({
          limit: async () => ({ data: [], error: null }),
        }),
      }),
      insert: async () => ({ data: null, error: new Error('Supabase not configured') }),
      delete: () => ({
        eq: async () => ({ error: null }),
      }),
    }),
  };
}

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window !== 'undefined') {
      console.warn('Supabase not configured. Authentication and favorites features are disabled.');
    }
    return createNullClient() as any;
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
