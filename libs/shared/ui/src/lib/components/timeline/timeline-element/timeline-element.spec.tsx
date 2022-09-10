import { render } from '@testing-library/react';

import TimelineElement from './timeline-element';

describe('TimelineElement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TimelineElement />);
    expect(baseElement).toBeTruthy();
  });
});
