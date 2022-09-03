import { ChatThemeSchema } from '@streali/shared/schema';
import { supabase, toastr, ToastType } from '@streali/shared/utils';
import type { ChatTheme } from '@streali/shared/schema';

export const createChatTheme = async (chatTheme: ChatTheme, userId: string) => {
  const theme = {
    ...chatTheme,
    global: {
      ...chatTheme.global,
    },
    created_by: userId,
  };

  const { data, error } = await supabase.from('chat_themes').insert([theme]);

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
    .from('chat_themes')
    .select()
    .eq('created_by', userId);

  return data;
};

export const getChatThemeById = async (themeId: string) => {
  const { data } = await supabase
    .from('chat_themes')
    .select()
    .eq('id', themeId);

  if (!data || data.length <= 0) {
    return null;
  }

  return ChatThemeSchema.parse(data[0]);
};

export const updateChatTheme = async (chatTheme: ChatTheme, userId: string) => {
  const theme = {
    ...chatTheme,
    global: {
      ...chatTheme.global,
    },
  };

  const { data, error } = await supabase
    .from('chat_themes')
    .update([theme])
    .match({ id: chatTheme.id });

  if (data) {
    toastr(
      ToastType.Success,
      'Your chat theme is updated!',
      'Congratulation! You can use your theme right now 👍'
    );
  }

  if (error) {
    toastr(ToastType.Error, 'Error 🥲', error.message);
  }

  return { data, error };
};
