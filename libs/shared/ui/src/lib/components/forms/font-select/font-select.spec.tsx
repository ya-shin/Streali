import { render } from '@testing-library/react';

import FontSelect from './font-select';

describe('FontSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FontSelect />);
    expect(baseElement).toBeTruthy();
  });
});
