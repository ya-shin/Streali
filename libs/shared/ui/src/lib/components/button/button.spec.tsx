import { render, screen } from '@testing-library/react';

import Button, { ButtonColor, ButtonProps, ButtonSize } from './button';

describe('Button', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {};
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Button {...props} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with correct className', () => {
    props.className = 'test';
    render(<Button {...props} />);
    const button = screen.getByRole('button');
    expect(button.classList.contains('test')).toBeTruthy();
  });

  it('should render with correct color', () => {
    props.color = ButtonColor.Dark;
    render(<Button {...props} />);
    const button = screen.getByRole('button');
    expect(button.classList.contains('bg-dark-500')).toBeTruthy();
  });

  it('should render with correct size', () => {
    props.size = ButtonSize.Big;
    render(<Button {...props} />);
    const button = screen.getByRole('button');
    expect(button.classList.contains('h-14')).toBeTruthy();
  });

  it('should render with disable', () => {
    props.disabled = true;
    render(<Button {...props} />);
    const button = screen.getByRole('button');
    expect(button.classList.contains('bg-light-100')).toBeTruthy();
  });

  it('should render with iconLeft', () => {
    props.iconLeft = 'test';
    render(<Button {...props} />);
    const icon = screen.getByRole('img');
    expect(icon).toBeTruthy();
  });

  it('should render with iconRight', () => {
    props.iconRight = 'test';
    render(<Button {...props} />);
    const icon = screen.getByRole('img');
    expect(icon).toBeTruthy();
  });

  it('should render with icon', () => {
    props.buttonIcon = 'test';
    render(<Button {...props} />);
    const icon = screen.getByRole('img');
    expect(icon).toBeTruthy();
  });

  it('should render with link', () => {
    props.link = '/test';
    render(<Button {...props} />);
    const link = screen.getByTestId('btn-internallink');
    expect(link).toBeTruthy();
  });

  it('should render with external link', () => {
    props.link = 'https://google.com';
    props.external = true;
    render(<Button {...props} />);
    const link = screen.getByTestId('btn-externallink');
    expect(link).toBeTruthy();
  });

  it('should trigger a function on click', () => {
    const onClick = jest.fn();
    props.onClick = onClick;
    render(<Button {...props} />);
    const button = screen.getByRole('button');
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
