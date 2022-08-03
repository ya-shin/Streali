import { toastr, ToastType } from '@streali/shared/utils';
import Button from '../button/button';

export interface ToastProps {
  type?: ToastType;
  title: string;
  content?: React.ReactNode;
}

export function Toast(props: ToastProps) {
  const { type = ToastType.Default, title, content } = props;

  const display = () => toastr(type, title, content);

  return <Button onClick={display}>Display toast</Button>;
}

export default Toast;
