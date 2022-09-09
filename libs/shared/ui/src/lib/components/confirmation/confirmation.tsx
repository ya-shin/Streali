import React, { useState } from 'react';
import Button, { ButtonColor } from '../button/button';
import Dialog from '../dialog/dialog';
import Input, { InputState } from '../forms/input/input';

export interface ConfirmationProps {
  trigger: React.ReactNode;
  title: string;
  text: string;
  word: string;
  confirmText: string;
  textButton?: string;
  onConfirm?: () => void;
  onConfirmationClose?: () => void;
}

export function Confirmation(props: ConfirmationProps) {
  const {
    trigger,
    title,
    text,
    word,
    confirmText,
    textButton = 'Confirm',
    onConfirm,
    onConfirmationClose,
  } = props;
  const [confirm, setConfirm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent) => {
    setConfirm((e.target as HTMLInputElement).value);
  };

  const handleConfirm = () => {
    if (confirm === word) {
      onConfirm && onConfirm();
      setIsOpen(false);
    }
  };

  return (
    <Dialog
      trigger={trigger}
      title={title}
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) onConfirmationClose && onConfirmationClose();
      }}
    >
      <p>{text}</p>
      <p className="mb-3">
        {confirmText}: <b className="font-bold text-primary-400">{word}</b>
      </p>
      <Input
        type="text"
        label="Word to confirm"
        onChange={handleInputChange}
        state={word === confirm ? InputState.Success : InputState.Error}
      />
      <div className="mt-5 flex w-full justify-end">
        <Button
          color={ButtonColor.Error}
          disabled={word !== confirm}
          onClick={handleConfirm}
        >
          {textButton}
        </Button>
      </div>
    </Dialog>
  );
}

export default Confirmation;
