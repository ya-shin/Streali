import { render } from '@testing-library/react';

import AlertVideo from './alert-video';

describe('AlertVideo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlertVideo />);
    expect(baseElement).toBeTruthy();
  });
});
