import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useChatTheme from './use-chat-theme';

describe('useChatTheme', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useChatTheme());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
