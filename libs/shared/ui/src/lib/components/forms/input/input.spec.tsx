import { render, screen } from '@testing-library/react';

import Input, { InputProps, InputState } from './input';

describe('Input', () => {
  let props: InputProps;

  beforeEach(() => {
    props = {};
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Input {...props} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the label with the className', () => {
    props.labelClassName = 'className';
    render(<Input {...props} />);
    const label = screen.getByTestId('label');
    expect(label.classList.contains('className')).toBeTruthy();
  });

  it('should render the input with the className', () => {
    props.className = 'className';
    render(<Input {...props} />);
    const input = screen.getByTestId('input');
    expect(input.classList.contains('className')).toBeTruthy();
  });

  it('should render the input with the state', () => {
    props.state = InputState.Error;
    render(<Input {...props} />);
    const input = screen.getByTestId('input');
    expect(input.classList.contains('!border-error-500')).toBeTruthy();
  });

  it('should render the input with the errorMessage', () => {
    props.errorMessage = 'errorMessage';
    render(<Input {...props} />);
    const errorMessage = screen.getByTestId('input-errormessage');
    expect(errorMessage.textContent).toBe('errorMessage');
  });
});
