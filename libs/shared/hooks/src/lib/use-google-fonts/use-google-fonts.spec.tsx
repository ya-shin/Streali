import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useGoogleFonts from './use-google-fonts';

describe('useGoogleFonts', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useGoogleFonts());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
