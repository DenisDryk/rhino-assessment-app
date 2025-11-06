'use client';

import Button from '@components/atoms/Button';

interface IAlertButtonProps {
  children?: React.ReactNode;
  alertText?: string;
}

const AlertButton = ({ children, alertText, ...props }: IAlertButtonProps) => {
  const handleButtonClick = () => {
    alert(alertText);
  };

  return (
    <Button variant='brand' onClick={handleButtonClick} {...props}>
      {children}
    </Button>
  );
};

export default AlertButton;
