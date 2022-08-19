import { render } from '@testing-library/react';

import ChatDemo from './chat-demo';

describe('ChatDemo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatDemo />);
    expect(baseElement).toBeTruthy();
  });
});
