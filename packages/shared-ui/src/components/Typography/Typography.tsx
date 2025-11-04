import { VARIANTS } from './Typography.constants';
import type { TVariant } from './Typography.types';
import { cn } from '../../utils/lib/cn';

interface ITypographyProps {
  /** Additional CSS classes. */
  className?: string;
  /** Inner content. */
  children?: React.ReactNode;
  /** Element to render, e.g. 'p', 'span', 'time'. */
  as?: React.ElementType;
  /** Typography variant (e.g., 'p', 'h1'). */
  variant?: TVariant;
  /** Data test id. */
  dataTestId?: string;
}

const Typography = ({
  className,
  children,
  as = 'p',
  variant = 'p',
  dataTestId = 'typography',
  ...props
}: ITypographyProps) => {
  const Component = as;

  return (
    <Component
      className={cn(VARIANTS[variant], className)}
      data-testid={dataTestId}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
