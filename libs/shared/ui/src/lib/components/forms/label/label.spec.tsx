import { render, screen } from '@testing-library/react';

import Label, { LabelProps } from './label';

describe('Label', () => {
  let props: LabelProps;

  beforeEach(() => {
    props = {
      children: 'Label',
    };
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Label {...props} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the label with the className', () => {
    props.className = 'className';
    render(<Label {...props} />);
    const label = screen.getByTestId('label');
    expect(label.classList.contains('className')).toBeTruthy();
  });
});
