import { render } from '@testing-library/react';

import SelectMultiple from './select-multiple';

describe('SelectMultiple', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectMultiple />);
    expect(baseElement).toBeTruthy();
  });
});
