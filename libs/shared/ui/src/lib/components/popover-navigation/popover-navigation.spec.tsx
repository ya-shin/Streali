import { render } from '@testing-library/react';

import PopoverNavigation from './popover-navigation';

describe('PopoverNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PopoverNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
