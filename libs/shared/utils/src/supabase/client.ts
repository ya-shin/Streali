import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env['NX_SUPABASE_URL'];
const supabaseAnonKey = process.env['NX_SUPABASE_ANON_KEY'];

// export function assertTruthy(value: unknown): asserts value is true {
//   if (!value) throw new Error('Expected truthy value');
// }

// assertTruthy(supabaseUrl);
// assertTruthy(supabaseAnonKey);

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
