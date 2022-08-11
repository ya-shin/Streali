import { render } from '@testing-library/react';

import NavVertical from './nav-vertical';

describe('NavVertical', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavVertical />);
    expect(baseElement).toBeTruthy();
  });
});
