import { render } from '@testing-library/react';

import Spacing from './spacing';

describe('Spacing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Spacing />);
    expect(baseElement).toBeTruthy();
  });
});
