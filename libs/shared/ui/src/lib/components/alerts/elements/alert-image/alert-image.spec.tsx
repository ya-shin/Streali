import { render } from '@testing-library/react';

import AlertImage from './alert-image';

describe('AlertImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlertImage />);
    expect(baseElement).toBeTruthy();
  });
});
