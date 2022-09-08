export const queryKeys = {
  authCheck: () => ['authCheck'],
  authUser: () => ['authUser'],
  chat: (id?: string) => ['chat', id],
  chats: () => ['chats'],
};
