import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

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

export async function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase not configured. Server features will be disabled.');
    return createNullClient() as any;
  }

  const cookieStore = await cookies()

  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}
