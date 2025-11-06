import {
  Button as ButtonUI,
  buttonVariants as buttonVariantsUI,
  buttonVariantsConfig,
} from '@packages/shared-ui/components';
import { cn } from '@packages/shared-ui/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('', {
  variants: {
    variant: {
      ...buttonVariantsConfig.variant,
      brand: 'bg-green-800',
    },
  },
});

interface IButtonProps
  extends Omit<React.ComponentProps<typeof ButtonUI>, 'variant'>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: IButtonProps) => {
  return (
    <ButtonUI
      className={cn(
        buttonVariantsUI({ size, className }),
        buttonVariants({ variant }),
      )}
      {...props}
    />
  );
};

export default Button;
