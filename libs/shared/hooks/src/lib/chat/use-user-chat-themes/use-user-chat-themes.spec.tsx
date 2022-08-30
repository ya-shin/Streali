import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useUserChatThemes from './use-user-chat-themes';

describe('useUserChatThemes', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useUserChatThemes());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
