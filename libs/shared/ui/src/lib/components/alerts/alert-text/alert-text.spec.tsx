import { render } from '@testing-library/react';

import AlertText from './alert-text';

describe('AlertText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlertText />);
    expect(baseElement).toBeTruthy();
  });
});
