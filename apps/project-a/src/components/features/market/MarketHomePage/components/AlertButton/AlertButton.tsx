'use client';

import { Button } from '@components/ui/button';

interface IAlertButtonProps {
  children?: React.ReactNode;
  alertText?: string;
}

const AlertButton = ({ children, alertText, ...props }: IAlertButtonProps) => {
  const handleButtonClick = () => {
    alert(alertText);
  };

  return (
    <Button className='bg-green-800' onClick={handleButtonClick} {...props}>
      {children}
    </Button>
  );
};

export default AlertButton;
