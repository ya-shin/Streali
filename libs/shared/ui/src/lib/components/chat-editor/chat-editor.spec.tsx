import { render } from '@testing-library/react';

import ChatEditor from './chat-editor';

describe('ChatEditor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatEditor />);
    expect(baseElement).toBeTruthy();
  });
});
