import { render } from '@testing-library/react';

import AlertElementEditor from './alert-element-editor';

describe('AlertElementEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlertElementEditor />);
    expect(baseElement).toBeTruthy();
  });
});
