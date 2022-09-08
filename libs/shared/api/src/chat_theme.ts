import * as z from 'zod';
import { ChatThemeSchema } from '@streali/shared/schema';
import { apiClient, toastr, ToastType } from '@streali/shared/utils';
import type { ChatTheme } from '@streali/shared/schema';

export const createChatTheme = async (chatTheme: ChatTheme) => {
  const { data } = await apiClient.post('/chat-themes', {
    ...chatTheme,
    global: {
      ...chatTheme.global,
    },
  });

  if (data) {
    toastr(
      ToastType.Success,
      'Your chat theme is created!',
      'Congratulation! You can use your theme right now 👍'
    );
  }

  // if (error) {
  //   toastr(ToastType.Error, 'Error 🥲', error.message);
  // }

  return { data };
};

export const getUserChatThemes = async () => {
  const { data } = await apiClient.get('/chat-themes');

  return data;
};

export const getChatThemeById = async (themeId: string) => {
  const { data } = await apiClient.get(`/chat-themes/${themeId}`);

  if (!data) {
    return null;
  }

  const userEmbedSchema = z.object({
    user: z.object({
      username: z.string(),
    }),
  });

  return ChatThemeSchema.merge(userEmbedSchema).parse(data);
};

export const updateChatTheme = async (chatTheme: ChatTheme) => {
  const { data } = await apiClient.put(`/chat-themes/${chatTheme.id}`, {
    ...chatTheme,
    global: {
      ...chatTheme.global,
    },
  });

  if (data) {
    toastr(
      ToastType.Success,
      'Your chat theme is updated!',
      'Congratulation! You can use your theme right now 👍'
    );
  }

  // if (error) {
  //   toastr(ToastType.Error, 'Error 🥲', error.message);
  // }

  return { data };
};

export const deleteChatTheme = async (themeId: string) => {
  try {
    await apiClient.delete(`/chat-themes/${themeId}`);

    toastr(
      ToastType.Success,
      'Theme deleted',
      'Your theme is successfully deleted !'
    );
  } catch (error) {
    // @ts-expect-error WTF?!
    toastr(ToastType.Error, 'Error 😞', error?.message);
  }

  return { id: themeId };
};
