import { render } from '@testing-library/react';

import TextAlign from './text-align';

describe('TextAlign', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextAlign />);
    expect(baseElement).toBeTruthy();
  });
});
