import { render } from '@testing-library/react';

import ChatSettings from './chat-settings';

describe('ChatSettings', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatSettings />);
    expect(baseElement).toBeTruthy();
  });
});
