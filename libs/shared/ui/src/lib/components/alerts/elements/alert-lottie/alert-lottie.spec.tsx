import { render } from '@testing-library/react';

import AlertLottie from './alert-lottie';

describe('AlertLottie', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlertLottie />);
    expect(baseElement).toBeTruthy();
  });
});
