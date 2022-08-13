import { render } from '@testing-library/react';

import Color from './color';

describe('Color', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Color />);
    expect(baseElement).toBeTruthy();
  });
});
