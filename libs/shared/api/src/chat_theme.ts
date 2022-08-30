import { ChatMessage } from '@streali/shared/interfaces';
import { supabase, toastr, ToastType } from '@streali/shared/utils';

export const createChatTheme = async (
  chatTheme: ChatMessage,
  userId: string
) => {
  const theme = {
    ...chatTheme,
    global: {
      ...chatTheme.global,
    },
    createdBy: userId,
  };

  const { data, error } = await supabase.from('chatthemes').insert([theme]);

  if (data) {
    toastr(
      ToastType.Success,
      'Your chat theme is created!',
      'Congratulation! You can use your theme right now 👍'
    );
  }

  if (error) {
    toastr(ToastType.Error, 'Error 🥲', error.message);
  }

  return { data, error };
};

export const getUserChatThemes = async (userId: string) => {
  const { data } = await supabase
    .from('chatthemes')
    .select()
    .eq('createdBy', userId);

  return data;
};

export const getChatThemeById = async (themeId: string) => {
  const { data } = await supabase.from('chatthemes').select().eq('id', themeId);

  return data;
};
