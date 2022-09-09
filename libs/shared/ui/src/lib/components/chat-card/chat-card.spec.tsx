import { render } from '@testing-library/react';

import ChatCard from './chat-card';

describe('ChatCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChatCard />);
    expect(baseElement).toBeTruthy();
  });
});
