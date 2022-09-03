import { supabase } from '@streali/shared/utils';
export const getUserById = async (id?: string) => {
  const { data } = await supabase.from('users').select().eq('id', id);

  return data![0];
};
