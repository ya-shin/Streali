import { render, screen } from '@testing-library/react';

import Select, { SelectProps } from './select';

describe('Select', () => {
  let props: SelectProps;

  beforeEach(() => {
    props = {
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
        { value: '4', label: 'Option 4' },
      ],
    };
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Select {...props} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render a label', () => {
    props.label = 'Label';
    render(<Select {...props} />);
    const label = screen.getByText('Label');
    expect(label).toBeTruthy();
  });

  it('should render a label with a className', () => {
    props.label = 'Label';
    props.labelClassName = 'label-class';
    render(<Select {...props} />);
    const label = screen.getByText('Label');
    expect(label.classList.contains('label-class')).toBeTruthy();
  });

  it('should render a placeholder', () => {
    props.placeholder = 'Placeholder';
    render(<Select {...props} />);
    const placeholder = screen.getByText('Placeholder');
    expect(placeholder).toBeTruthy();
  });
});
